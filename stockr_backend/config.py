import os


def _charger_env():
    """Lit stockr_backend/.env et le verse dans os.environ.

    PythonAnywhere n'a pas d'écran pour les variables d'environnement d'une
    application web : sans ce fichier, les clés de paiement ne peuvent être
    posées qu'en éditant le WSGI à la main. Ici il suffit de coller les clés
    dans .env (ignoré par git) puis de cliquer « Reload ».

    Aucune dépendance : pas de python-dotenv à installer. Une variable déjà
    présente dans l'environnement n'est jamais écrasée.
    """
    chemin = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')
    if not os.path.isfile(chemin):
        return
    with open(chemin, encoding='utf-8') as f:
        for ligne in f:
            ligne = ligne.strip()
            if not ligne or ligne.startswith('#') or '=' not in ligne:
                continue
            cle, valeur = ligne.split('=', 1)
            cle = cle.strip()
            valeur = valeur.strip().strip('"').strip("'")
            if cle and cle not in os.environ:
                os.environ[cle] = valeur


_charger_env()


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-key-change-in-production')

    # PostgreSQL en prod (Render), SQLite en local
    _db_url = os.environ.get('DATABASE_URL', 'sqlite:///baro.db')
    # Render fournit "postgres://..." — SQLAlchemy veut "postgresql://..."
    if _db_url.startswith('postgres://'):
        _db_url = _db_url.replace('postgres://', 'postgresql://', 1)
    SQLALCHEMY_DATABASE_URI = _db_url

    SQLALCHEMY_TRACK_MODIFICATIONS = False
