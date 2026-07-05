# ── Sauvegarde de configuration (boutique, équipe, fournisseurs…) ──
# Un blob JSON par utilisateur : l'app le pousse à chaque démarrage et le
# restaure sur un nouvel appareil. Les données métier (articles, ventes,
# clients, dépenses) ont leurs propres tables — ce blob ne contient QUE la
# configuration locale (jamais de mots de passe : l'app exclut ces clés).
from flask import Blueprint, request, jsonify
from models import db, token_required
from datetime import datetime

store_bp = Blueprint('store', __name__)

MAX_BLOB = 2_000_000  # ~2 Mo : logo + config très large, jamais les photos produits


class StoreBlob(db.Model):
    __tablename__ = 'store_blob'

    id         = db.Column(db.Integer, primary_key=True)
    data       = db.Column(db.Text, nullable=False, default='{}')
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, unique=True, index=True)

    def to_dict(self):
        return {
            'data':       self.data,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
        }


@store_bp.route('/', methods=['GET'])
@token_required
def get_store(current_user):
    blob = StoreBlob.query.filter_by(user_id=current_user.id).first()
    if not blob:
        return jsonify({'data': None, 'updated_at': None})
    return jsonify(blob.to_dict())


@store_bp.route('/', methods=['PUT'])
@token_required
def put_store(current_user):
    payload = request.json or {}
    data = payload.get('data')
    if not isinstance(data, str) or not data.strip():
        return jsonify({'error': 'data (chaîne JSON) requis'}), 400
    if len(data) > MAX_BLOB:
        return jsonify({'error': f'Blob trop volumineux (max {MAX_BLOB} octets)'}), 413

    blob = StoreBlob.query.filter_by(user_id=current_user.id).first()
    if blob:
        blob.data = data
        blob.updated_at = datetime.utcnow()
    else:
        blob = StoreBlob(data=data, user_id=current_user.id)
        db.session.add(blob)
    db.session.commit()
    return jsonify(blob.to_dict())
