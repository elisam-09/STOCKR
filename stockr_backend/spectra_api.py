from flask import Flask, request, jsonify
from spectra_core import SpectraVisionEngine
import cv2
import numpy as np
import base64

app = Flask(__name__)
# On initialise le moteur une seule fois au démarrage
spectra = SpectraVisionEngine()

@app.route('/spectra/analyze', methods=['POST'])
def analyze_frame():
    """Route API que Sami appellera depuis son JavaScript"""
    data = request.get_json()
    if not data or 'image' not in data:
        return jsonify({"status": "error", "message": "No image data"}), 400

    # Décoder l'image envoyée par le JS (format Base64)
    img_data = base64.b64decode(data['image'].split(',')[1])
    nparr = np.frombuffer(img_data, np.uint8)
    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Analyser avec Spectra
    processed_frame = spectra.process_frame(frame)
    
    # Renvoyer les résultats à Sami
    return jsonify({
        "inventory": spectra.current_inventory,
        "inference_time": spectra.inference_time
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)