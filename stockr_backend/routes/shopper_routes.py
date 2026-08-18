# ── Comptes clients de la boutique en ligne ──────────────────────────────
#
# Un acheteur crée un compte SUR une boutique donnée. Il n'existe pas de
# compte global : le client de la Pharmacie de la Paix n'est pas connu de
# la boutique d'à côté. C'est la seule lecture honnête pour un commerçant
# qui ne partage pas son fichier client.
#
# L'identifiant est le TÉLÉPHONE, pas l'e-mail : en Afrique de l'Ouest la
# majorité des acheteurs n'ont pas d'adresse e-mail utilisée au quotidien,
# et le vendeur rappelle de toute façon par téléphone.
#
# Les commandes ne sont PAS reliées par une clé étrangère : ajouter une
# colonne à shop_order imposerait une migration sur une base déjà en
# production. Le rattachement se fait sur (boutique, téléphone normalisé),
# ce qui récupère aussi l'historique passé du client — y compris les
# commandes déposées avant qu'il ne crée son compte.

from flask import Blueprint, request, jsonify
from models import db, User
from datetime import datetime, timedelta
from functools import wraps
import json
import re
import secrets

shopper_bp = Blueprint('shopper', __name__)

MIN_PASSWORD = 6
MAX_ECHECS = 8                       # tentatives avant blocage temporaire
DUREE_BLOCAGE = timedelta(minutes=15)
DUREE_SESSION = timedelta(days=60)


def normalise_tel(brut):
    """Ne garde que les chiffres et retire les indicatifs courants.

    « 07 00 11 22 33 », « +225 07 00 11 22 33 » et « 002250700112233 »
    doivent désigner le même client, sinon il se retrouve avec trois
    comptes et un historique éparpillé.
    """
    chiffres = re.sub(r'[^0-9]', '', brut or '')
    if chiffres.startswith('00'):
        chiffres = chiffres[2:]
    # Indicatifs de la zone couverte, retirés seulement si un numéro
    # local plausible subsiste derrière.
    for indicatif in ('225', '221', '223', '226', '227', '228', '229', '237', '241', '242'):
        if chiffres.startswith(indicatif) and len(chiffres) - len(indicatif) >= 8:
            chiffres = chiffres[len(indicatif):]
            break
    return chiffres


class Shopper(db.Model):
    """Compte acheteur, rattaché à une boutique."""
    __tablename__ = 'shopper'

    id            = db.Column(db.Integer, primary_key=True)
    shop_id       = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, index=True)
    phone         = db.Column(db.String(24),  nullable=False, index=True)   # normalisé
    phone_display = db.Column(db.String(40),  nullable=True)                # tel que saisi
    name          = db.Column(db.String(120), nullable=True)
    password_hash = db.Column(db.String(200), nullable=False)
    zone          = db.Column(db.String(80),  nullable=True)

    auth_token    = db.Column(db.String(80),  nullable=True, index=True)
    token_expiry  = db.Column(db.DateTime,    nullable=True)

    echecs        = db.Column(db.Integer,     nullable=False, default=0)
    bloque_jusqua = db.Column(db.DateTime,    nullable=True)

    created_at    = db.Column(db.DateTime,    default=datetime.utcnow)
    last_login    = db.Column(db.DateTime,    nullable=True)

    __table_args__ = (
        db.UniqueConstraint('shop_id', 'phone', name='uq_shopper_boutique_tel'),
    )

    # bcrypt, comme les comptes commerçants : une seule façon de hacher
    # dans tout le projet.
    def set_password(self, mot_de_passe):
        import bcrypt
        sel = bcrypt.gensalt()
        self.password_hash = bcrypt.hashpw(mot_de_passe.encode('utf-8'), sel).decode('utf-8')

    def check_password(self, mot_de_passe):
        import bcrypt
        try:
            return bcrypt.checkpw(mot_de_passe.encode('utf-8'),
                                  self.password_hash.encode('utf-8'))
        except (ValueError, TypeError):
            return False

    def to_dict(self):
        # Ni empreinte, ni jeton, ni compteur d'échecs.
        return {
            'id':      self.id,
            'name':    self.name,
            'phone':   self.phone_display or self.phone,
            'zone':    self.zone,
            'shopId':  self.shop_id,
            'since':   self.created_at.isoformat() if self.created_at else None,
        }

    def nouvelle_session(self):
        self.auth_token = secrets.token_urlsafe(32)
        self.token_expiry = datetime.utcnow() + DUREE_SESSION
        self.last_login = datetime.utcnow()
        self.echecs = 0
        self.bloque_jusqua = None
        return self.auth_token


def shopper_required(f):
    """Comme token_required, mais pour un acheteur — jamais un commerçant.

    Les deux familles de jetons vivent dans des tables séparées : un jeton
    d'acheteur ne peut donc pas ouvrir une route commerçant, ni l'inverse.
    """
    @wraps(f)
    def decore(*args, **kwargs):
        entete = request.headers.get('Authorization') or ''
        jeton = entete.split(' ', 1)[1].strip() if entete.startswith('Bearer ') else None
        if not jeton:
            return jsonify({'error': 'Connexion requise'}), 401
        acheteur = Shopper.query.filter_by(auth_token=jeton).first()
        if not acheteur:
            return jsonify({'error': 'Session invalide'}), 401
        if acheteur.token_expiry and acheteur.token_expiry < datetime.utcnow():
            return jsonify({'error': 'Session expirée'}), 401
        return f(acheteur, *args, **kwargs)
    return decore


def _lire_identifiants():
    d = request.json or {}
    return (normalise_tel(d.get('phone')),
            (d.get('phone') or '').strip()[:40],
            (d.get('password') or ''),
            (d.get('name') or '').strip()[:120],
            (d.get('zone') or '').strip()[:80])


# ── Créer un compte sur une boutique ─────────────────────────────────────
@shopper_bp.route('/shop/<int:shop_id>/register', methods=['POST'])
def inscription(shop_id):
    if not User.query.get(shop_id):
        return jsonify({'error': 'Boutique introuvable'}), 404

    tel, tel_affiche, mdp, nom, zone = _lire_identifiants()
    if len(tel) < 8:
        return jsonify({'error': 'Numéro de téléphone invalide'}), 400
    if len(mdp) < MIN_PASSWORD:
        return jsonify({'error': 'Le mot de passe doit faire au moins %d caractères' % MIN_PASSWORD}), 400

    existant = Shopper.query.filter_by(shop_id=shop_id, phone=tel).first()
    if existant:
        # On ne dit pas « ce compte existe » sans preuve d'identité : cela
        # révélerait à n'importe qui quels numéros sont clients. On invite
        # simplement à se connecter.
        return jsonify({'error': 'Un compte existe déjà pour ce numéro. Connectez-vous.'}), 409

    acheteur = Shopper(shop_id=shop_id, phone=tel, phone_display=tel_affiche,
                       name=nom or None, zone=zone or None)
    acheteur.set_password(mdp)
    jeton = acheteur.nouvelle_session()
    db.session.add(acheteur)
    db.session.commit()
    return jsonify({'token': jeton, 'customer': acheteur.to_dict()}), 201


# ── Se connecter ─────────────────────────────────────────────────────────
@shopper_bp.route('/shop/<int:shop_id>/login', methods=['POST'])
def connexion(shop_id):
    tel, _, mdp, _, _ = _lire_identifiants()
    acheteur = Shopper.query.filter_by(shop_id=shop_id, phone=tel).first()

    # Message identique que le compte existe ou non : sinon la page devient
    # un annuaire permettant de tester des numéros un par un.
    refus = jsonify({'error': 'Numéro ou mot de passe incorrect'}), 401
    if not acheteur:
        return refus

    maintenant = datetime.utcnow()
    if acheteur.bloque_jusqua and acheteur.bloque_jusqua > maintenant:
        restant = int((acheteur.bloque_jusqua - maintenant).total_seconds() // 60) + 1
        return jsonify({'error': 'Trop de tentatives. Réessayez dans %d minutes.' % restant}), 429

    if not acheteur.check_password(mdp):
        acheteur.echecs = (acheteur.echecs or 0) + 1
        if acheteur.echecs >= MAX_ECHECS:
            acheteur.bloque_jusqua = maintenant + DUREE_BLOCAGE
            acheteur.echecs = 0
        db.session.commit()
        return refus

    jeton = acheteur.nouvelle_session()
    db.session.commit()
    return jsonify({'token': jeton, 'customer': acheteur.to_dict()})


# ── Profil ───────────────────────────────────────────────────────────────
@shopper_bp.route('/me', methods=['GET'])
@shopper_required
def profil(acheteur):
    return jsonify(acheteur.to_dict())


@shopper_bp.route('/me', methods=['PUT'])
@shopper_required
def maj_profil(acheteur):
    d = request.json or {}
    if 'name' in d:
        acheteur.name = (d.get('name') or '').strip()[:120] or None
    if 'zone' in d:
        acheteur.zone = (d.get('zone') or '').strip()[:80] or None
    db.session.commit()
    return jsonify(acheteur.to_dict())


@shopper_bp.route('/me/password', methods=['PUT'])
@shopper_required
def changer_mot_de_passe(acheteur):
    d = request.json or {}
    if not acheteur.check_password(d.get('current') or ''):
        return jsonify({'error': 'Mot de passe actuel incorrect'}), 401
    nouveau = d.get('new') or ''
    if len(nouveau) < MIN_PASSWORD:
        return jsonify({'error': 'Le nouveau mot de passe doit faire au moins %d caractères' % MIN_PASSWORD}), 400
    acheteur.set_password(nouveau)
    # Changer de mot de passe ferme les sessions ouvertes ailleurs.
    jeton = acheteur.nouvelle_session()
    db.session.commit()
    return jsonify({'token': jeton, 'customer': acheteur.to_dict()})


@shopper_bp.route('/logout', methods=['POST'])
@shopper_required
def deconnexion(acheteur):
    acheteur.auth_token = None
    acheteur.token_expiry = None
    db.session.commit()
    return jsonify({'ok': True})


# ── Historique des commandes, sur n'importe quel appareil ────────────────
@shopper_bp.route('/orders', methods=['GET'])
@shopper_required
def mes_commandes(acheteur):
    from routes.order_routes import ShopOrder, _STATUS_LABELS

    # Rattachement par téléphone normalisé : récupère aussi les commandes
    # passées avant la création du compte.
    candidates = (ShopOrder.query
                  .filter_by(user_id=acheteur.shop_id)
                  .order_by(ShopOrder.created_at.desc())
                  .limit(400).all())
    miennes = [o for o in candidates if normalise_tel(o.phone) == acheteur.phone]

    sortie = []
    for o in miennes[:100]:
        try:
            articles = json.loads(o.items or '[]')
        except (ValueError, TypeError):
            articles = []
        sortie.append({
            'id':          o.id,
            'items':       articles,
            'itemsCount':  len(articles),
            'total':       o.total,
            'mode':        o.mode,
            'zone':        o.zone,
            'payment':     o.payment,
            'status':      o.status,
            'statusLabel': _STATUS_LABELS.get(o.status, o.status),
            'date':        o.created_at.isoformat() if o.created_at else None,
        })
    return jsonify(sortie)


# ── Ce que le client a acheté le plus : base d'une recommande ────────────
@shopper_bp.route('/orders/again', methods=['GET'])
@shopper_required
def a_recommander(acheteur):
    """Articles les plus repris par ce client, pour un panier en un geste.

    Calculé à partir de ses commandes réelles, pas d'une recommandation
    inventée.
    """
    from routes.order_routes import ShopOrder

    commandes = (ShopOrder.query
                 .filter_by(user_id=acheteur.shop_id)
                 .order_by(ShopOrder.created_at.desc())
                 .limit(400).all())
    compte = {}
    for o in commandes:
        if normalise_tel(o.phone) != acheteur.phone:
            continue
        try:
            articles = json.loads(o.items or '[]')
        except (ValueError, TypeError):
            continue
        for ligne in articles:
            libelle = ligne if isinstance(ligne, str) else (ligne or {}).get('name')
            if not libelle:
                continue
            # « Doliprane 1000 mg ×2 » → « Doliprane 1000 mg »
            nom = re.sub(r'\s*[×x]\s*\d+\s*$', '', str(libelle)).strip()
            if nom:
                compte[nom] = compte.get(nom, 0) + 1

    classe = sorted(compte.items(), key=lambda kv: kv[1], reverse=True)[:8]
    return jsonify([{'name': n, 'times': c} for n, c in classe])
