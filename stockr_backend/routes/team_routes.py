# ── Compte partagé patron ↔ vendeurs (accès équipe en ligne) ──
# Le patron génère un CODE d'équipe. Le vendeur le saisit sur SON téléphone
# et accède au compte de la boutique (même stock, mêmes ventes) ; ses ventes
# sont attribuées à son nom (côté app). Impossible hors-ligne par nature.
#
# Choix de conception (MVP, "sans compétences") : rejoindre renvoie le token
# d'accès du compte patron. Le vendeur agit donc SUR le compte de la boutique
# — modèle de confiance adapté aux petits commerces. Le patron peut couper
# l'accès à tout moment en régénérant le code (POST /reset).
from flask import Blueprint, request, jsonify
from models import db, token_required, User
import secrets

team_bp = Blueprint('team', __name__)


def _gen_code():
    # Code court, lisible, sans caractères ambigus (0/O, 1/I)
    alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    return 'BARO-' + ''.join(secrets.choice(alphabet) for _ in range(6))


@team_bp.route('/code', methods=['GET'])
@token_required
def get_team_code(current_user):
    # Seul un compte "patron" (pas déjà un membre) possède un code d'équipe
    if getattr(current_user, 'owner_id', None):
        return jsonify({'error': 'Un compte vendeur ne peut pas créer d\'équipe'}), 403
    if not current_user.team_code:
        # code unique
        for _ in range(6):
            code = _gen_code()
            if not User.query.filter_by(team_code=code).first():
                current_user.team_code = code
                db.session.commit()
                break
    return jsonify({'code': current_user.team_code, 'business_name': current_user.business_name})


@team_bp.route('/reset', methods=['POST'])
@token_required
def reset_team_code(current_user):
    if getattr(current_user, 'owner_id', None):
        return jsonify({'error': 'Action réservée au patron'}), 403
    for _ in range(6):
        code = _gen_code()
        if not User.query.filter_by(team_code=code).first():
            current_user.team_code = code
            db.session.commit()
            break
    return jsonify({'code': current_user.team_code})


@team_bp.route('/join', methods=['POST'])
def join_team():
    data = request.json or {}
    code = (data.get('code') or '').strip().upper()
    name = (data.get('name') or '').strip()
    if not code:
        return jsonify({'error': 'Code requis'}), 400
    if not name:
        return jsonify({'error': 'Entrez votre nom'}), 400
    owner = User.query.filter_by(team_code=code).first()
    if not owner:
        return jsonify({'error': 'Code d\'équipe invalide'}), 404
    # Assure un token d'accès valide côté patron
    if not owner.auth_token:
        owner.generate_token()
    return jsonify({
        'access_token':  owner.auth_token,
        'shop_id':       owner.id,
        'business_name': owner.business_name,
        'currency':      owner.currency,
        'country':       owner.country,
        'language':      owner.language,
        'member_name':   name,
        'is_member':     True,
    })
