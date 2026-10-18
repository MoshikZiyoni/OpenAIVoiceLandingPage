import React from 'react';
import { CheckCircle2, Sparkles, ArrowLeft, Shield } from 'lucide-react';
import prices_logo from '../prices.png';

const PRICING_PLANS = [
  {
    id: 'start',
    name: 'Business Start',
    badge: null,
    target: 'לעסקים שרוצים להפסיק לפספס שיחות ולידים',
    priceDisplay: 'התאמה אישית לפי נפח',
    priceSub: '(החל מ-₪33 ליום)',
    ctaText: 'לבדיקת התאמה והצעת מחיר',
    featured: false,
    bullets: [
      'מענה קולי אנושי 24/7 לשיחות נכנסות',
      'סינון לידים וקביעת פגישות ביומן',
      'מספר וירטואלי ייעודי + תמלול והקלטת שיחות',
      'סיכום שיחה מיידי לוואטסאפ / אימייל / Google Sheets',
      'אפיון והקמת תסריט שיחה מותאם אישית'
    ]
  },
  {
    id: 'pro',
    name: 'Pro AI & Voice Clone',
    badge: 'הכי פופולרי ⭐',
    target: 'לעסקים ומוקדים עם זרם לידים שדורשים אוטומציה מלאה',
    priceDisplay: 'מותאם אישית לעסק',
    priceSub: '(ROI חיובי מהחודש הראשון)',
    ctaText: 'לתיאום שיחת אפיון והדגמה',
    featured: true,
    bullets: [
      'שכפול קול אישי (Voice Cloning) של בעל העסק/נציג',
      'חיוג אוטומטי ללידים קרים ומערך Follow-up חכם',
      'חיבור דו-כיווני מלא ל-CRM (Monday, HubSpot, Fireberry, Priority ועוד)',
      'דשבורד אנליטיקות בזמן אמת ושליטה בשעות/חגים',
      'תסריטי שיחה דינמיים לטיפול בהתנגדויות מכירה'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'לארגונים ומוקדים',
    target: 'לארגונים, חברות ביטוח ומוקדים עתירי שיחות',
    priceDisplay: 'פתרון ארגוני מותאם',
    priceSub: '(התאמה מלאה למערכות ליבה)',
    ctaText: 'לתיאום פגישת מומחה',
    featured: false,
    bullets: [
      'תמיכה במעל 5,000 דקות ומספר עוזרים קוליים במקביל',
      'אימות זהות לקוח מאובטח ועמידה ברגולציה',
      'התממשקות API/ERP מותאמת אישית למערכות הארגון',
      'ליווי הנדסי צמוד, בקרת איכות ו-SLA מובטח'
    ]
  }
];

export default function PricingSection({ onSelectPlan }) {
  const handlePlanClick = (planName) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="pricing" className="section-full-width pricing-custom-section" dir="rtl">
      <div className="section-content">
        <div className="pricing-header-center scroll-reveal">
          <div className="pricing-badge-top">
            <Shield size={16} />
            <span>תמחור הוגן מבוסס ערך ותוצאות</span>
          </div>
          <h2 className="section-title">החבילות של Bot 10</h2>
          <p className="pricing-section-desc">
            בלי תשלום כפול, בלי התחייבויות דרקוניות. כל חבילה כוללת אפיון הנדסי מלא, חיבור ישיר למערכות העסק שלכם וליווי אישי של המייסדים.
          </p>
          <div style={{ textAlign: 'center', marginBottom: '35px', marginTop: '10px' }}>
            <img src={prices_logo} alt="חבילות מחיר לבוט קולי Bot 10" className="logo-image" style={{ maxHeight: '70px' }} />
          </div>
        </div>

        <div className="pricing-grid-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card-v2 scroll-reveal ${plan.featured ? 'featured-card' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-card-badge">
                  <Sparkles size={14} style={{ marginLeft: '4px' }} />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <p className="pricing-plan-target">{plan.target}</p>
              </div>

              <div className="pricing-card-price-block">
                <div className="pricing-card-main-price">{plan.priceDisplay}</div>
                <div className="pricing-card-sub-price">{plan.priceSub}</div>
              </div>

              <div className="pricing-card-divider" />

              <div className="pricing-card-features-title">מה כלול בחבילה:</div>
              <ul className="pricing-card-bullets">
                {plan.bullets.map((bullet, i) => (
                  <li key={i} className="pricing-bullet-item">
                    <CheckCircle2 size={18} className="bullet-check-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`cta-button ${plan.featured ? 'btn-shimmer' : 'btn-outline-gold'} pricing-plan-btn`}
                onClick={() => handlePlanClick(plan.name)}
              >
                <span>{plan.ctaText}</span>
                <ArrowLeft size={16} style={{ marginRight: '6px' }} />
              </button>

              <div className="pricing-card-guarantee">
                🔒 שיחת אפיון והדגמה אישית ללא עלות
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
