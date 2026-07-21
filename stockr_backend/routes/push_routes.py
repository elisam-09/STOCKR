# ── Notifications push Web (nouvelle commande boutique) ──
# Le téléphone du patron s'abonne (PushManager) ; quand la vitrine publique
# envoie une commande, le serveur pousse une vraie notification système —
# même app fermée. Impossible hors-ligne par nature.
#
# Clés VAPID : lues depuis l'env (VAPID_PRIVATE_KEY / VAPID_PUBLIC_KEY),
# sinon générées au premier démarrage et persistées dans instance/vapid.json
# (zéro configuration pour le propriétaire).
import base64
import json
import os
from flask import Blueprint, request, jsonify, current_app
from models import db, token_required

push_bp = Blueprint('push', __name__)

try:
    from pywebpush import webpush, WebPushException
    PUSH_AVAILABLE = True
except ImportError:      # pywebpush absent → routes honnêtes (501), rien de simulé
    PUSH_AVAILABLE = False

_VAPID = {'private': None, 'public': None}


class PushSub(db.Model):
    __tablename__ = 'push_sub'

    id         = db.Column(db.Integer, primary_key=True)
    endpoint   = db.Column(db.Text,        nullable=False)
    p256dh     = db.Column(db.String(255), nullable=False)
    auth       = db.Column(db.String(64),  nullable=False)
    user_agent = db.Column(db.String(200), nullable=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, index=True)


def _b64url(raw):
    return base64.urlsafe_b64encode(raw).rstrip(b'=').decode()


def _load_vapid():
    """Env > fichier instance/vapid.json > génération (persistée)."""
    if _VAPID['private'] and _VAPID['public']:
        return _VAPID
    env_priv = os.environ.get('VAPID_PRIVATE_KEY')
    env_pub  = os.environ.get('VAPID_PUBLIC_KEY')
    if env_priv and env_pub:
        _VAPID.update(private=env_priv, public=env_pub)
        return _VAPID
    path = os.path.join(current_app.instance_path, 'vapid.json')
    try:
        with open(path, encoding='utf-8') as f:
            data = json.load(f)
        _VAPID.update(private=data['private'], public=data['public'])
        return _VAPID
    except (OSError, KeyError, ValueError):
        pass
    # Génération P-256 (format brut base64url attendu par pywebpush / PushManager)
    from cryptography.hazmat.primitives.asymmetric import ec
    from cryptography.hazmat.primitives import serialization
    key = ec.generate_private_key(ec.SECP256R1())
    priv = _b64url(key.private_numbers().private_value.to_bytes(32, 'big'))
    pub = _b64url(key.public_key().public_bytes(
        serialization.Encoding.X962, serialization.PublicFormat.UncompressedPoint))
    _VAPID.update(private=priv, public=pub)
    try:
        os.makedirs(current_app.instance_path, exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump({'private': priv, 'public': pub}, f)
    except OSError:
        pass  # clés en mémoire seulement — regénérées au prochain restart
    return _VAPID


@push_bp.route('/vapid-key', methods=['GET'])
def vapid_key():
    """Publique : la clé serveur nécessaire à PushManager.subscribe()."""
    if not PUSH_AVAILABLE:
        return jsonify({'error': 'Push non disponible sur ce serveur (pywebpush manquant)'}), 501
    return jsonify({'key': _load_vapid()['public']})


@push_bp.route('/subscribe', methods=['POST'])
@token_required
def subscribe(current_user):
    if not PUSH_AVAILABLE:
        return jsonify({'error': 'Push non disponible sur ce serveur'}), 501
    data = request.json or {}
    endpoint = (data.get('endpoint') or '').strip()
    keys = data.get('keys') or {}
    p256dh, auth = (keys.get('p256dh') or '').strip(), (keys.get('auth') or '').strip()
    if not endpoint.startswith('https://') or not p256dh or not auth:
        return jsonify({'error': 'Abonnement push invalide'}), 400
    sub = PushSub.query.filter_by(endpoint=endpoint).first()
    if sub:                      # même appareil ré-abonné (éventuellement autre compte)
        sub.p256dh, sub.auth, sub.user_id = p256dh, auth, current_user.id
    else:
        sub = PushSub(endpoint=endpoint, p256dh=p256dh, auth=auth,
                      user_agent=(request.headers.get('User-Agent') or '')[:200],
                      user_id=current_user.id)
        db.session.add(sub)
    db.session.commit()
    return jsonify({'subscribed': True}), 201


@push_bp.route('/unsubscribe', methods=['POST'])
@token_required
def unsubscribe(current_user):
    endpoint = ((request.json or {}).get('endpoint') or '').strip()
    if endpoint:
        PushSub.query.filter_by(endpoint=endpoint, user_id=current_user.id).delete()
        db.session.commit()
    return jsonify({'subscribed': False})


def notify_user(user_id, title, body, url='/'):
    """Best-effort : pousse vers tous les appareils abonnés de l'utilisateur.
    Ne lève jamais — une commande ne doit pas échouer parce qu'un push échoue."""
    if not PUSH_AVAILABLE:
        return 0
    try:
        vapid = _load_vapid()
        subs = PushSub.query.filter_by(user_id=user_id).all()
    except Exception:
        return 0
    sent = 0
    for sub in subs:
        try:
            webpush(
                subscription_info={'endpoint': sub.endpoint,
                                   'keys': {'p256dh': sub.p256dh, 'auth': sub.auth}},
                data=json.dumps({'title': title, 'body': body, 'url': url}),
                vapid_private_key=vapid['private'],
                vapid_claims={'sub': 'mailto:contact@baro-app.local'},
                timeout=10,
            )
            sent += 1
        except WebPushException as e:
            code = getattr(getattr(e, 'response', None), 'status_code', None)
            if code in (404, 410):        # abonnement mort → purge
                try:
                    db.session.delete(sub)
                    db.session.commit()
                except Exception:
                    db.session.rollback()
        except Exception:
            pass
    return sent
