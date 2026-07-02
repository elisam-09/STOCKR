# ── Facturation des abonnements BARO ─────────────────────────────────
# Deux fournisseurs, activés par variables d'environnement (Render/Railway) :
#   Stripe   : STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET  (abonnement récurrent)
#   CinetPay : CINETPAY_API_KEY + CINETPAY_SITE_ID        (Wave/OM/MoMo — paiement à la période)
# Sans clés : les endpoints répondent 501 avec un message clair (honnête, pas de simulation).
# Aucune dépendance externe : urllib + hmac/hashlib (stdlib).

import os
import json
import hmac
import hashlib
import time
import urllib.request
import urllib.parse
from datetime import datetime, timedelta

from flask import Blueprint, request, jsonify
from models import db, User, token_required

billing_bp = Blueprint('billing', __name__)

# Tarifs serveur (source de vérité — XOF est une devise "zéro décimale" chez Stripe)
PLANS = {
    'starter':    {'monthly': 5000,   'yearly': 48000,  'label': 'BARO Starter'},
    'pro':        {'monthly': 20000,  'yearly': 192000, 'label': 'BARO Professional'},
    'enterprise': {'monthly': 100000, 'yearly': 960000, 'label': 'BARO Enterprise'},
}

def _stripe_key():    return (os.environ.get('STRIPE_SECRET_KEY') or '').strip()
def _stripe_whsec():  return (os.environ.get('STRIPE_WEBHOOK_SECRET') or '').strip()
def _cinetpay_key():  return (os.environ.get('CINETPAY_API_KEY') or '').strip()
def _cinetpay_site(): return (os.environ.get('CINETPAY_SITE_ID') or '').strip()
def _frontend_url():
    return (os.environ.get('FRONTEND_URL') or request.headers.get('Origin') or 'https://mrcisse12.github.io/STOCKR').rstrip('/')


# ── Statut d'abonnement (l'app lit ça pour débloquer les fonctionnalités) ──
@billing_bp.route('/status', methods=['GET'])
@token_required
def billing_status(user):
    expired = bool(user.plan_expires and user.plan_expires < datetime.utcnow())
    return jsonify({
        'plan': 'free' if expired else (user.plan or 'free'),
        'status': 'expired' if expired else (user.plan_status or 'none'),
        'expires': user.plan_expires.isoformat() if user.plan_expires else None,
        'provider': user.billing_provider,
        'configured': {'stripe': bool(_stripe_key()), 'cinetpay': bool(_cinetpay_key() and _cinetpay_site())},
    })


# ── Créer un paiement / abonnement ──
@billing_bp.route('/checkout', methods=['POST'])
@token_required
def billing_checkout(user):
    data = request.get_json(silent=True) or {}
    plan = data.get('plan')
    cycle = data.get('billing', 'monthly')
    if plan not in PLANS or cycle not in ('monthly', 'yearly'):
        return jsonify({'error': 'Plan ou période invalide'}), 400
    amount = PLANS[plan][cycle]
    front = _frontend_url()

    # 1) Stripe (abonnement récurrent, carte) — prioritaire si configuré
    if _stripe_key():
        form = {
            'mode': 'subscription',
            'client_reference_id': str(user.id),
            'customer_email': user.email,
            'success_url': front + '/?billing=success',
            'cancel_url': front + '/?billing=cancel',
            'metadata[user_id]': str(user.id),
            'metadata[plan]': plan,
            'metadata[cycle]': cycle,
            'line_items[0][quantity]': '1',
            'line_items[0][price_data][currency]': 'xof',
            'line_items[0][price_data][unit_amount]': str(amount),
            'line_items[0][price_data][recurring][interval]': 'month' if cycle == 'monthly' else 'year',
            'line_items[0][price_data][product_data][name]': PLANS[plan]['label'],
            'subscription_data[metadata][user_id]': str(user.id),
            'subscription_data[metadata][plan]': plan,
        }
        req = urllib.request.Request(
            'https://api.stripe.com/v1/checkout/sessions',
            data=urllib.parse.urlencode(form).encode(),
            headers={'Authorization': 'Bearer ' + _stripe_key(),
                     'Content-Type': 'application/x-www-form-urlencoded'},
            method='POST')
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                session = json.loads(r.read().decode())
            return jsonify({'url': session['url'], 'provider': 'stripe'})
        except urllib.error.HTTPError as e:
            detail = e.read().decode()[:300]
            return jsonify({'error': 'Stripe a refusé la demande', 'detail': detail}), 502

    # 2) CinetPay (Wave / Orange Money / MoMo — paiement de la période)
    if _cinetpay_key() and _cinetpay_site():
        tx_id = f'baro_{user.id}_{plan}_{cycle}_{int(time.time())}'
        payload = {
            'apikey': _cinetpay_key(),
            'site_id': _cinetpay_site(),
            'transaction_id': tx_id,
            'amount': amount,
            'currency': 'XOF',
            'description': f"{PLANS[plan]['label']} ({'mensuel' if cycle == 'monthly' else 'annuel'})",
            'notify_url': request.url_root.rstrip('/') + '/api/billing/webhook/cinetpay',
            'return_url': front + '/?billing=success',
            'channels': 'ALL',
            'metadata': json.dumps({'user_id': user.id, 'plan': plan, 'cycle': cycle}),
            'customer_email': user.email,
            'customer_name': user.name,
        }
        req = urllib.request.Request(
            'https://api-checkout.cinetpay.com/v2/payment',
            data=json.dumps(payload).encode(),
            headers={'Content-Type': 'application/json'}, method='POST')
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                res = json.loads(r.read().decode())
            url = (res.get('data') or {}).get('payment_url')
            if not url:
                return jsonify({'error': 'CinetPay a refusé la demande', 'detail': str(res)[:300]}), 502
            return jsonify({'url': url, 'provider': 'cinetpay'})
        except urllib.error.HTTPError as e:
            return jsonify({'error': 'CinetPay a refusé la demande', 'detail': e.read().decode()[:300]}), 502

    return jsonify({'error': "Paiement non configuré : ajoutez STRIPE_SECRET_KEY ou CINETPAY_API_KEY + CINETPAY_SITE_ID dans les variables d'environnement du serveur."}), 501


def _activate(user_id, plan, cycle, provider, customer_id=None):
    """Active un plan pour un utilisateur (appelé uniquement par les webhooks vérifiés)."""
    user = User.query.get(int(user_id))
    if not user or plan not in PLANS:
        return False
    user.plan = plan
    user.plan_status = 'active'
    user.billing_provider = provider
    if customer_id:
        user.billing_customer_id = str(customer_id)
    # Marge de 2 jours pour couvrir les délais de renouvellement
    days = 367 if cycle == 'yearly' else 32
    user.plan_expires = datetime.utcnow() + timedelta(days=days)
    db.session.commit()
    return True


# ── Webhook Stripe (signature vérifiée manuellement : HMAC-SHA256, stdlib) ──
@billing_bp.route('/webhook/stripe', methods=['POST'])
def stripe_webhook():
    whsec = _stripe_whsec()
    if not whsec:
        return jsonify({'error': 'Webhook non configuré'}), 501
    payload = request.get_data()
    sig_header = request.headers.get('Stripe-Signature', '')
    try:
        parts = dict(p.split('=', 1) for p in sig_header.split(',') if '=' in p)
        ts, v1 = parts.get('t', ''), parts.get('v1', '')
        expected = hmac.new(whsec.encode(), f'{ts}.'.encode() + payload, hashlib.sha256).hexdigest()
        if not hmac.compare_digest(expected, v1):
            return jsonify({'error': 'Signature invalide'}), 400
        if abs(time.time() - int(ts)) > 600:
            return jsonify({'error': 'Horodatage trop ancien'}), 400
    except Exception:
        return jsonify({'error': 'Signature illisible'}), 400

    event = json.loads(payload.decode())
    etype = event.get('type', '')
    obj = (event.get('data') or {}).get('object') or {}
    meta = obj.get('metadata') or {}

    if etype == 'checkout.session.completed':
        _activate(meta.get('user_id') or obj.get('client_reference_id'),
                  meta.get('plan'), meta.get('cycle', 'monthly'), 'stripe', obj.get('customer'))
    elif etype == 'invoice.paid':
        sub_meta = ((obj.get('parent') or {}).get('subscription_details') or {}).get('metadata') or {}
        uid, plan = sub_meta.get('user_id'), sub_meta.get('plan')
        if uid and plan:
            _activate(uid, plan, 'monthly', 'stripe', obj.get('customer'))
    elif etype in ('customer.subscription.deleted', 'invoice.payment_failed'):
        customer = obj.get('customer')
        if customer:
            user = User.query.filter_by(billing_customer_id=str(customer)).first()
            if user:
                user.plan_status = 'cancelled' if etype.endswith('deleted') else 'past_due'
                db.session.commit()
    return jsonify({'received': True})


# ── Webhook CinetPay : on RE-VÉRIFIE la transaction auprès de leur API ──
@billing_bp.route('/webhook/cinetpay', methods=['POST'])
def cinetpay_webhook():
    if not (_cinetpay_key() and _cinetpay_site()):
        return jsonify({'error': 'Webhook non configuré'}), 501
    data = request.get_json(silent=True) or request.form.to_dict() or {}
    tx_id = data.get('cpm_trans_id') or data.get('transaction_id')
    if not tx_id:
        return jsonify({'error': 'transaction_id manquant'}), 400
    # Ne JAMAIS se fier au corps du webhook : vérification serveur-à-serveur
    check = urllib.request.Request(
        'https://api-checkout.cinetpay.com/v2/payment/check',
        data=json.dumps({'apikey': _cinetpay_key(), 'site_id': _cinetpay_site(),
                         'transaction_id': tx_id}).encode(),
        headers={'Content-Type': 'application/json'}, method='POST')
    try:
        with urllib.request.urlopen(check, timeout=20) as r:
            res = json.loads(r.read().decode())
    except Exception:
        return jsonify({'error': 'Vérification CinetPay impossible'}), 502
    d = res.get('data') or {}
    if d.get('status') != 'ACCEPTED':
        return jsonify({'received': True, 'ignored': d.get('status')})
    try:
        meta = json.loads(d.get('metadata') or '{}')
    except Exception:
        meta = {}
    # Repli : notre transaction_id encode aussi user/plan/cycle (baro_<uid>_<plan>_<cycle>_<ts>)
    if not meta.get('user_id') and str(tx_id).startswith('baro_'):
        p = str(tx_id).split('_')
        if len(p) >= 4:
            meta = {'user_id': p[1], 'plan': p[2], 'cycle': p[3]}
    _activate(meta.get('user_id'), meta.get('plan'), meta.get('cycle', 'monthly'), 'cinetpay')
    return jsonify({'received': True})
