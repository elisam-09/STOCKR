from flask import Blueprint, request, jsonify
from models import db, Article, token_required
import json


article_bp = Blueprint('article', __name__)

# Champs métier optionnels acceptés à la création / mise à jour
_META_FIELDS = ('ref', 'price', 'purchase_price', 'sell_price', 'category',
                'ean', 'expiry', 'perishable', 'description', 'in_boutique')


def _clean_variants(value):
    """Liste [{name, options[]}] → JSON texte borné (jamais d'erreur)."""
    if not isinstance(value, list):
        return None
    try:
        return json.dumps(value)[:20000]
    except (TypeError, ValueError):
        return None

@article_bp.route('/', methods=['GET'])
@token_required
def get_articles(current_user):
    """Récupère uniquement les articles de l'utilisateur connecté"""
    articles = Article.query.filter_by(user_id=current_user.id).all()
    return jsonify([a.to_dict() for a in articles])

@article_bp.route('/', methods=['POST'])
@token_required
def create_article(current_user):
    """Crée un article pour l'utilisateur connecté"""
    data = request.json
    article = Article(
        name=data['name'],
        quantity=data.get('quantity', 0),
        unit=data.get('unit', 'pcs'),
        alert_threshold=data.get('alert_threshold'),
        daily_avg_demand=data.get('daily_avg_demand', 1.0),
        lead_time_days=data.get('lead_time_days', 7),
        user_id=current_user.id  # ← LIAISON IMPORTANTE
    )
    for f in _META_FIELDS:
        if f in data and data[f] is not None:
            setattr(article, f, data[f])
    if 'variants' in data:
        article.variants = _clean_variants(data['variants'])
    db.session.add(article)
    db.session.commit()
    return jsonify(article.to_dict()), 201

@article_bp.route('/<int:article_id>', methods=['PUT'])
@token_required
def update_article(current_user, article_id):
    """Met à jour un article (vérifie qu'il appartient à l'utilisateur)"""
    article = Article.query.filter_by(id=article_id, user_id=current_user.id).first_or_404()
    data = request.json

    for key, value in data.items():
        if key == 'variants':
            article.variants = _clean_variants(value)
        elif hasattr(article, key) and key not in ('id', 'user_id'):
            setattr(article, key, value)

    db.session.commit()
    return jsonify(article.to_dict())

@article_bp.route('/<int:article_id>', methods=['DELETE'])
@token_required
def delete_article(current_user, article_id):
    article = Article.query.filter_by(id=article_id, user_id=current_user.id).first_or_404()
    db.session.delete(article)
    db.session.commit()
    return jsonify({'message': 'Article supprimé'}), 200