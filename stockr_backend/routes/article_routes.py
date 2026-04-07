from flask import Blueprint, request, jsonify
from models import db, Article, token_required


article_bp = Blueprint('article', __name__)

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
        if hasattr(article, key):
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