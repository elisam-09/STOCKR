from flask import Blueprint, request, jsonify
from models import db, token_required
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

client_bp = Blueprint('client', __name__)

# ── Modèle Client (inline pour éviter de modifier models/__init__.py) ──
class Client(db.Model):
    __tablename__ = 'client'

    id         = db.Column(db.Integer, primary_key=True)
    name       = db.Column(db.String(100), nullable=False)
    phone      = db.Column(db.String(30),  nullable=True)
    email      = db.Column(db.String(120), nullable=True)
    notes      = db.Column(db.String(500), nullable=True)
    created_at = db.Column(db.DateTime,    default=datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def to_dict(self):
        return {
            'id':         self.id,
            'name':       self.name,
            'phone':      self.phone,
            'email':      self.email,
            'notes':      self.notes,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'user_id':    self.user_id,
        }


@client_bp.route('/', methods=['GET'])
@token_required
def get_clients(current_user):
    clients = Client.query.filter_by(user_id=current_user.id).order_by(Client.name).all()
    return jsonify([c.to_dict() for c in clients])


@client_bp.route('/', methods=['POST'])
@token_required
def create_client(current_user):
    data   = request.json or {}
    name   = (data.get('name') or '').strip()
    if not name:
        return jsonify({'error': 'Nom requis'}), 400

    client = Client(
        name    = name,
        phone   = (data.get('phone') or '').strip() or None,
        email   = (data.get('email') or '').strip() or None,
        notes   = (data.get('notes') or '').strip() or None,
        user_id = current_user.id,
    )
    db.session.add(client)
    db.session.commit()
    return jsonify(client.to_dict()), 201


@client_bp.route('/<int:client_id>', methods=['PUT'])
@token_required
def update_client(current_user, client_id):
    client = Client.query.filter_by(id=client_id, user_id=current_user.id).first_or_404()
    data   = request.json or {}
    if 'name'  in data: client.name  = data['name'].strip()
    if 'phone' in data: client.phone = (data['phone'] or '').strip() or None
    if 'email' in data: client.email = (data['email'] or '').strip() or None
    if 'notes' in data: client.notes = (data['notes'] or '').strip() or None
    db.session.commit()
    return jsonify(client.to_dict())


@client_bp.route('/<int:client_id>', methods=['DELETE'])
@token_required
def delete_client(current_user, client_id):
    client = Client.query.filter_by(id=client_id, user_id=current_user.id).first_or_404()
    db.session.delete(client)
    db.session.commit()
    return jsonify({'message': 'Client supprimé'}), 200
