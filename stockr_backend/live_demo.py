import cv2
from spectra_core import SpectraVisionEngine

def run_spectra_audit_system():
    print("=====================================================")
    print("   STOCKR - MODULE D'AUDIT IA SPECTRA (V2.0 PRO)     ")
    print("=====================================================")
    
    # Instanciation du moteur avec une confiance stricte
    spectra = SpectraVisionEngine(confidence_threshold=0.55, history_frames=7)
    
    # Ouverture du flux vidéo
    cap = cv2.VideoCapture(0)
    
    # Configuration de la caméra en mode HD
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

    if not cap.isOpened():
        print("❌ Erreur Critique : Impossible de s'interfacer avec le matériel vidéo.")
        return

    print("\n[COMMANDES OPÉRATEUR]")
    print("  [ESPACE] ou [S] : Déclencher un Audit Complet (Image + JSON)")
    print("  [Q]             : Quitter le système proprement\n")
    
    while True:
        success, frame = cap.read()
        if not success:
            break
            
        # Le moteur Spectra analyse la frame et la redessine avec le HUD
        processed_frame = spectra.process_frame(frame)
        
        # Affichage du flux sécurisé
        cv2.imshow("Stockr - Spectra Vision AI", processed_frame)
        
        # Écoute des commandes clavier
        key = cv2.waitKey(1) & 0xFF
        
        if key == ord('q'):
            print("\n[SYSTÈME] Arrêt manuel demandé. Déconnexion...")
            break
            
        elif key == ord('s') or key == 32: # 32 = Barre Espace
            print("\n[SYSTÈME] Exécution de l'audit en cours...")
            # On demande au moteur d'exécuter l'audit et de sauvegarder les datas
            audit_id, json_file = spectra.execute_audit(processed_frame)
            print(f"✅ Opération terminée. Données prêtes pour le backend : {json_file}")

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    run_spectra_audit_system()