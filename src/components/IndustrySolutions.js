import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  ShieldAlert,
  Home,
  Stethoscope,
  PhoneOutgoing,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

const SOLUTIONS = [
  {
    path: '/virtual-secretary',
    icon: PhoneCall,
    title: 'מזכירה וירטואלית AI לעסקים',
    subtitle: 'מענה טלפוני אוטומטי 24/7 במקום שירות מזכירות אנושי יקר',
    highlights: ['אפס שיחות שלא נענו', 'חיסכון של אלפי שקלים בחודש', 'סיכום מיידי לוואטסאפ'],
    badge: 'הכי מבוקש'
  },
  {
    path: '/insurance-finance',
    icon: ShieldAlert,
    title: 'ביטוח, משכנתאות ופיננסים',
    subtitle: 'סוכן קולי מאומת ת"ז + תאריך לידה וטיפול בפוליסות ומשכנתאות',
    highlights: ['מענה מיידי ללידים 24/7', 'אימות זהות מאובטח', 'סנכרון מלא ל-CRM'],
    badge: 'פתרון מותאם'
  },
  {
    path: '/real-estate',
    icon: Home,
    title: 'נדל"ן, שיווק פרויקטים ותיווך',
    subtitle: 'סינון לידים חם תוך 5 שניות ותיאום סיורים וצפיות בנכסים',
    highlights: ['חיוג אוטומטי לרוכשים פוטנציאליים', 'תיאום ביומן', 'העברת לידים בשלים למתווך'],
    badge: 'ROI גבוה'
  },
  {
    path: '/clinics-lawyers',
    icon: Stethoscope,
    title: 'קליניקות, רופאים ועורכי דין',
    subtitle: 'תיאום תורים חכם, מענה לפניות דחופות וסינון ראשוני מדויק',
    highlights: ['זמינות מלאה מחוץ לשעות הקליניקה', 'תזכורות אוטומטיות לתורים', 'חיסכון בזמן צוות'],
    badge: 'דיסקרטי ומדויק'
  },
  {
    path: '/outbound-sales',
    icon: PhoneOutgoing,
    title: 'שיחות יוצאות וטיוב לידים קרים',
    subtitle: 'מערך Outbound חכם לחימום דאטה ישנה ומענה ללידים נכנסים בשניות',
    highlights: ['הגעה לליד לפני המתחרים', 'טיפול בהתנגדויות בזמן אמת', 'תיאום פגישות לנציגים'],
    badge: 'מנוע מכירות'
  }
];

export default function IndustrySolutions() {
  return (
    <section id="solutions" className="solutions-section scroll-reveal" dir="rtl">
      <div className="section-content">
        <div className="solutions-header">
          <div className="solutions-badge">
            <Sparkles size={16} />
            <span>פתרונות מותאמים לפי ענף</span>
          </div>
          <h2 className="section-title">פתרונות AI קוליים מותאמים אישית לתחום שלכם</h2>
          <p className="solutions-desc">
            הבוט שלנו אינו מוצר מדף גנרי. הוא מותאם במדויק לשפה, לרגולציה, לתסריטי השיחה ולאתגרים העסקיים של הענף שלכם.
          </p>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((sol) => {
            const Icon = sol.icon;
            return (
              <Link
                key={sol.path}
                to={sol.path}
                className="solution-card"
                title={`למידע נוסף על ${sol.title}`}
              >
                <div className="solution-card-top">
                  <div className="solution-icon-wrap">
                    <Icon size={26} />
                  </div>
                  {sol.badge && (
                    <span className="solution-pill">{sol.badge}</span>
                  )}
                </div>

                <h3 className="solution-card-title">{sol.title}</h3>
                <p className="solution-card-subtitle">{sol.subtitle}</p>

                <ul className="solution-highlights-list">
                  {sol.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="solution-bullet">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="solution-link-arrow">
                  <span>למידע מלא והאזנה להקלטות בתחום</span>
                  <ArrowLeft size={16} className="solution-arrow-icon" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
