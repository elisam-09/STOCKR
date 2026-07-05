# ── Dépenses du commerce (loyer, électricité, transport, salaires…) ──
# Miroir serveur de la carte « 💸 Dépenses » du Bilan : permet la synchro
# multi-appareils du bénéfice NET dès que le backend est déployé.
from flask import Blueprint, request, jsonify
from models import db, token_required
from datetime import datetime

expense_bp = Blueprint('expense', __name__)


class Expense(db.Model):
    __tablename__ = 'expense'

    id       = db.Column(db.Integer,     primary_key=True)
    label    = db.Column(db.String(200), nullable=False)
    amount   = db.Column(db.Float,       nullable=False, default=0)
    category = db.Column(db.String(50),  nullable=True)
    date     = db.Column(db.DateTime,    default=datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def to_dict(self):
        return {
            'id':       self.id,
            'label':    self.label,
            'amount':   self.amount,
            'category': self.category or 'Autre',
            'date':     self.date.isoformat() if self.date else None,
            'user_id':  self.user_id,
        }


@expense_bp.route('/', methods=['GET'])
@token_required
def get_expenses(current_user):
    expenses = Expense.query.filter_by(user_id=current_user.id).order_by(Expense.date.desc()).all()
    return jsonify([e.to_dict() for e in expenses])


@expense_bp.route('/', methods=['POST'])
@token_required
def create_expense(current_user):
    data  = request.json or {}
    label = (data.get('label') or '').strip()
    try:
        amount = float(data.get('amount') or 0)
    except (TypeError, ValueError):
        amount = 0
    if not label:
        return jsonify({'error': 'Libellé requis'}), 400
    if amount <= 0:
        return jsonify({'error': 'Montant invalide'}), 400

    date = None
    if data.get('date'):
        try:
            date = datetime.fromisoformat(str(data['date']).replace('Z', '+00:00')).replace(tzinfo=None)
        except (TypeError, ValueError):
            date = None

    expense = Expense(
        label    = label,
        amount   = amount,
        category = (data.get('category') or 'Autre').strip()[:50],
        date     = date or datetime.utcnow(),
        user_id  = current_user.id,
    )
    db.session.add(expense)
    db.session.commit()
    return jsonify(expense.to_dict()), 201


@expense_bp.route('/<int:expense_id>', methods=['DELETE'])
@token_required
def delete_expense(current_user, expense_id):
    expense = Expense.query.filter_by(id=expense_id, user_id=current_user.id).first()
    if not expense:
        return jsonify({'error': 'Dépense introuvable'}), 404
    db.session.delete(expense)
    db.session.commit()
    return jsonify({'deleted': True})
