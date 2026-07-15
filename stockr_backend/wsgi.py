import sys
import os

# Ajoute le dossier backend au path Python
path = os.path.dirname(os.path.abspath(__file__))
if path not in sys.path:
    sys.path.insert(0, path)

from app import app as application
