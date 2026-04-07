import cv2
import numpy as np
from ultralytics import YOLO
import time
import json
import os
import logging
from datetime import datetime
from collections import deque

class SpectraVisionEngine:
    """
    Spectra Vision Engine V2.0 - Core AI Module pour Stockr.
    Architecture orientée objet avancée incluant : 
    - Inférence YOLOv8 temps réel
    - Système d'alertes de seuils critiques
    - Logging d'activité système
    - Génération de rapports d'audit JSON pour API REST (Django/Flask)
    """
    
    def __init__(self, confidence_threshold=0.6, history_frames=5):
        self._setup_system_directories()
        self._setup_logger()
        
        self.logger.info("=== DÉMARRAGE DU MOTEUR SPECTRA ===")
        self.logger.info("Initialisation du réseau de neurones profond (YOLOv8)...")
        
        # Chargement du modèle IA
        self.model = YOLO('yolov8n.pt') 
        self.confidence_threshold = confidence_threshold
        
        # --- CONFIGURATION MÉTIER STOCKR ---
        # Dictionnaire de traduction : IA générique -> Base de données
        self.stockr_mapping = {
            'bottle': 'Bouteille (Boisson/Huile)',
            'cup': 'Gobelet / Tasse',
            'apple': 'Pomme',
            'book': 'Livre / Cahier',
            'cell phone': 'Téléphone Portable',
            'laptop': 'Ordinateur Portable'
        }
        
        # Seuils d'alerte (Si quantité < seuil -> Alerte Rouge)
        self.alert_thresholds = {
            'Bouteille (Boisson/Huile)': 3,
            'Gobelet / Tasse': 5,
            'Téléphone Portable': 2
        }
        
        # --- VARIABLES DE SESSION & LISSAGE ---
        self.current_inventory = {}
        # Historique pour stabiliser le comptage (évite le clignotement)
        self.inventory_history = deque(maxlen=history_frames) 
        
        # Variables de performance (FPS)
        self.fps = 0
        self.frame_count = 0
        self.start_time = time.time()
        self.inference_time = 0.0
        
        self.logger.info("Moteur Spectra prêt. En attente du flux vidéo entrant.")

    def _setup_system_directories(self):
        """Crée l'arborescence des dossiers nécessaires au fonctionnement."""
        directories = ['outputs/images', 'outputs/json', 'logs']
        for d in directories:
            if not os.path.exists(d):
                os.makedirs(d)

    def _setup_logger(self):
        """Configure le système d'enregistrement des événements (Logs)."""
        log_filename = f"logs/spectra_engine_{datetime.now().strftime('%Y%m%d')}.log"
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s [%(levelname)s] SPECTRA: %(message)s',
            handlers=[
                logging.FileHandler(log_filename),
                logging.StreamHandler() # Affiche aussi dans la console
            ]
        )
        self.logger = logging.getLogger(__name__)

    def _smooth_inventory(self, raw_inventory):
        """Lisse les données d'inventaire sur plusieurs frames pour la stabilité."""
        self.inventory_history.append(raw_inventory)
        
        smoothed_inv = {}
        # On consolide les clés existantes
        all_keys = set().union(*(d.keys() for d in self.inventory_history))
        
        for key in all_keys:
            # On prend la quantité maximale vue récemment pour éviter les disparitions
            counts = [d[key]['count'] for d in self.inventory_history if key in d]
            confs = [d[key]['avg_conf'] for d in self.inventory_history if key in d]
            
            if counts:
                smoothed_inv[key] = {
                    'count': max(counts),
                    'avg_conf': sum(confs) / len(confs),
                    'status': 'OK' # Statut par défaut
                }
                
                # Vérification des seuils d'alerte
                if key in self.alert_thresholds and smoothed_inv[key]['count'] < self.alert_thresholds[key]:
                    smoothed_inv[key]['status'] = 'ALERT_LOW_STOCK'
                    
        return smoothed_inv

    def _draw_advanced_hud(self, frame, resolution_info):
        """Génère l'interface graphique (Heads Up Display) par-dessus la vidéo."""
        hud_frame = frame.copy()
        h, w = hud_frame.shape[:2]
        
        # --- BANDEAU SUPÉRIEUR (Header) ---
        header_bg = hud_frame.copy()
        cv2.rectangle(header_bg, (0, 0), (w, 60), (15, 20, 25), -1)
        hud_frame = cv2.addWeighted(header_bg, 0.8, hud_frame, 0.2, 0)
        
        # Titre et heure
        current_time = datetime.now().strftime('%H:%M:%S')
        cv2.putText(hud_frame, "SPECTRA AI - LIVE INVENTORY AUDIT", (20, 35), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 150), 2)
        cv2.putText(hud_frame, f"SYS TIME: {current_time}", (w - 250, 35), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, (200, 200, 200), 2)
        
        # --- PANNEAU LATÉRAL (Inventaire & Alertes) ---
        panel_bg = hud_frame.copy()
        cv2.rectangle(panel_bg, (0, 60), (350, h), (10, 15, 20), -1)
        hud_frame = cv2.addWeighted(panel_bg, 0.6, hud_frame, 0.4, 0)
        
        cv2.putText(hud_frame, "DONNEES EN DIRECT", (20, 100), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
        cv2.line(hud_frame, (20, 110), (330, 110), (100, 100, 100), 1)

        y_offset = 140
        alerts_active = False

        for item, data in self.current_inventory.items():
            count = data['count']
            conf = int(data['avg_conf'] * 100)
            status = data['status']
            
            # Gestion des couleurs selon le statut
            color = (0, 255, 0) # Vert par défaut (OK)
            if status == 'ALERT_LOW_STOCK':
                color = (0, 0, 255) # Rouge si alerte
                alerts_active = True
            
            text_item = f"{item[:18]}" # Tronquer le texte si trop long
            text_data = f"[{count}] - {conf}%"
            
            cv2.putText(hud_frame, text_item, (20, y_offset), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 1)
            cv2.putText(hud_frame, text_data, (220, y_offset), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
            y_offset += 35

        # --- TÉLÉMÉTRIE (Bas de l'écran) ---
        footer_text = f"FPS: {int(self.fps)} | Latence: {self.inference_time:.1f}ms | Res: {resolution_info}"
        cv2.putText(hud_frame, footer_text, (20, h - 20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 200, 255), 1)

        # Indicateur global d'alerte
        if alerts_active:
            cv2.putText(hud_frame, "ATTENTION: SEUIL CRITIQUE ATTEINT", (w // 2 - 150, h - 20), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 255), 2)

        return hud_frame

    def process_frame(self, frame):
        """Boucle principale : Analyse l'image, extrait les données, met à jour l'état."""
        # Calcul FPS & Télémétrie
        self.frame_count += 1
        elapsed_time = time.time() - self.start_time
        if elapsed_time > 1:
            self.fps = self.frame_count / elapsed_time
            self.frame_count = 0
            self.start_time = time.time()

        h, w = frame.shape[:2]
        resolution_info = f"{w}x{h}"

        # 🧠 INFERENCE IA (Chronométrée pour les logs)
        inf_start = time.time()
        results = self.model(frame, verbose=False)[0]
        self.inference_time = (time.time() - inf_start) * 1000 # Converti en millisecondes

        raw_inventory = {}

        # Analyse des détections mathématiques
        for box in results.boxes:
            conf = float(box.conf[0])
            if conf >= self.confidence_threshold:
                class_id = int(box.cls[0])
                class_name_en = self.model.names[class_id]
                
                # Mapping métier
                stockr_name = self.stockr_mapping.get(class_name_en, class_name_en)
                
                # Comptage brut
                if stockr_name in raw_inventory:
                    raw_inventory[stockr_name]['count'] += 1
                    old_conf = raw_inventory[stockr_name]['avg_conf']
                    new_count = raw_inventory[stockr_name]['count']
                    raw_inventory[stockr_name]['avg_conf'] = ((old_conf * (new_count - 1)) + conf) / new_count
                else:
                    raw_inventory[stockr_name] = {'count': 1, 'avg_conf': conf}
                
                # --- Rendu visuel ciblé (Bounding Boxes) ---
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                
                # Détermine la couleur de la boîte selon l'historique
                box_color = (0, 255, 150) # Vert d'eau par défaut
                if stockr_name in self.current_inventory and self.current_inventory[stockr_name]['status'] == 'ALERT_LOW_STOCK':
                    box_color = (0, 0, 255) # Rouge
                    
                # Dessin du cadre
                cv2.rectangle(frame, (x1, y1), (x2, y2), box_color, 2)
                
                # Étiquette au-dessus de l'objet
                label_bg_y = max(20, y1 - 10)
                (label_w, label_h), _ = cv2.getTextSize(stockr_name, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 1)
                cv2.rectangle(frame, (x1, label_bg_y - label_h - 5), (x1 + label_w, label_bg_y + 5), box_color, -1)
                cv2.putText(frame, stockr_name, (x1, label_bg_y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)

        # Lissage des données pour stabiliser l'affichage
        self.current_inventory = self._smooth_inventory(raw_inventory)

        # Application du filtre HUD complet
        final_frame = self._draw_advanced_hud(frame, resolution_info)
        return final_frame

    def execute_audit(self, frame):
        """
        Déclenche un audit complet : Sauvegarde la preuve visuelle et génère
        le payload JSON riche formaté spécifiquement pour l'API de Sami.
        """
        audit_id = f"AUDIT_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        # 1. Sauvegarde de la Preuve Image
        img_path = f"outputs/images/{audit_id}.jpg"
        cv2.imwrite(img_path, frame)
        
        # 2. Construction du Payload JSON Riche
        payload = {
            "metadata": {
                "audit_id": audit_id,
                "timestamp_iso": datetime.now().isoformat(),
                "ai_model": "Spectra-YOLOv8n",
                "inference_time_ms": round(self.inference_time, 2),
                "image_proof_path": img_path
            },
            "status": "success",
            "inventory_data": []
        }
        
        alerts_triggered = 0
        
        for item, data in self.current_inventory.items():
            item_data = {
                "product_name": item,
                "quantity_counted": data['count'],
                "ai_confidence_score": round(data['avg_conf'] * 100, 2),
                "alert_status": data['status']
            }
            payload["inventory_data"].append(item_data)
            if data['status'] == 'ALERT_LOW_STOCK':
                alerts_triggered += 1
                
        payload["metadata"]["total_alerts"] = alerts_triggered
        
        # 3. Sauvegarde du JSON
        json_path = f"outputs/json/{audit_id}.json"
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(payload, f, indent=4, ensure_ascii=False)
            
        self.logger.info(f"Audit {audit_id} généré avec succès. Objets comptés: {len(self.current_inventory)}.")
        return audit_id, json_path