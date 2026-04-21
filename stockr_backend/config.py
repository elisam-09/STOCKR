import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-key-change-in-production')

    # PostgreSQL en prod (Render), SQLite en local
    _db_url = os.environ.get('DATABASE_URL', 'sqlite:///baro.db')
    # Render fournit "postgres://..." — SQLAlchemy veut "postgresql://..."
    if _db_url.startswith('postgres://'):
        _db_url = _db_url.replace('postgres://', 'postgresql://', 1)
    SQLALCHEMY_DATABASE_URI = _db_url

    SQLALCHEMY_TRACK_MODIFICATIONS = False
