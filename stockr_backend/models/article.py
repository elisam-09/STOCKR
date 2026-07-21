from . import db
import json

class Article(db.Model):
    __tablename__ = 'article'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Float, nullable=False, default=0)
    unit = db.Column(db.String(20), nullable=False, default='pcs')
    alert_threshold = db.Column(db.Float, nullable=True)
    daily_avg_demand = db.Column(db.Float, nullable=False, default=1.0)
    lead_time_days = db.Column(db.Integer, nullable=False, default=7)

    # Métadonnées métier synchronisées entre appareils (les photos restent
    # locales : trop lourdes pour la base et la data mobile à chaque démarrage)
    ref            = db.Column(db.String(80),   nullable=True)
    price          = db.Column(db.Float,        nullable=True, default=0)
    purchase_price = db.Column(db.Float,        nullable=True, default=0)
    sell_price     = db.Column(db.Float,        nullable=True, default=0)
    category       = db.Column(db.String(80),   nullable=True)
    ean            = db.Column(db.String(40),   nullable=True)
    expiry         = db.Column(db.String(20),   nullable=True)
    perishable     = db.Column(db.Boolean,      nullable=True, default=False)
    description    = db.Column(db.String(1000), nullable=True)
    in_boutique    = db.Column(db.Boolean,      nullable=True, default=False)
    variants       = db.Column(db.Text,         nullable=True)  # JSON [{name, options[]}]

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('articles', lazy=True, cascade="all, delete-orphan"))

    def reorder_point(self):
        return self.daily_avg_demand * self.lead_time_days

    def is_below_threshold(self):
        if self.alert_threshold:
            return self.quantity <= self.alert_threshold
        return self.quantity <= self.reorder_point()

    def to_dict(self):
        try:
            variants = json.loads(self.variants) if self.variants else []
        except (ValueError, TypeError):
            variants = []
        return {
            'id': self.id,
            'name': self.name,
            'quantity': self.quantity,
            'unit': self.unit,
            'alert_threshold': self.alert_threshold,
            'daily_avg_demand': self.daily_avg_demand,
            'lead_time_days': self.lead_time_days,
            'reorder_point': self.reorder_point(),
            'is_low': self.is_below_threshold(),
            'ref': self.ref,
            'price': self.price or 0,
            'purchase_price': self.purchase_price or 0,
            'sell_price': self.sell_price or 0,
            'category': self.category,
            'ean': self.ean,
            'expiry': self.expiry,
            'perishable': bool(self.perishable),
            'description': self.description,
            'in_boutique': bool(self.in_boutique),
            'variants': variants,
        }