import React, { useState } from 'react';
import { TrendingUp, Clock, Sparkles, ArrowRight, CheckCircle2, PhoneCall, DollarSign } from 'lucide-react';

export default function UpgradedRoiCalculator({ onCtaClick }) {
  const [activeTab, setActiveTab] = useState('revenue_growth'); // 'revenue_growth' or 'cost_savings'

  // Tab 1: Revenue Growth State
  const [monthlyInquiries, setMonthlyInquiries] = useState(250);
  const [missedRate, setMissedRate] = useState(25); // conservative 25% after-hours / busy
  const [avgDealValue, setAvgDealValue] = useState(1500);

  // Tab 2: Operational Cost Savings State
  const [leadsForSavings, setLeadsForSavings] = useState(350);
  const [hourlyWage, setHourlyWage] = useState(50);

  // Tab 1 Calculations
  const missedCalls = Math.round(monthlyInquiries * (missedRate / 100));
  const additionalDeals = Math.max(1, Math.round(missedCalls * 0.20)); // conservative 20% conversion on immediate speed-to-lead
  const estimatedAddedRevenue = additionalDeals * avgDealValue;

  // Tab 2 Calculations
  const hoursSaved = Math.max(1, Math.round((leadsForSavings * 3.5) / 60)); // ~3.5 min per call + CRM logging
  const laborCostSaved = Math.round(hoursSaved * hourlyWage * 1.2); // wage + overhead
  const filteredValue = Math.round(leadsForSavings * 0.15 * 30);
  const totalSavings = Math.round(laborCostSaved + filteredValue);
  const meetingsAdded = Math.max(1, Math.round(leadsForSavings * 0.07));

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleCta = (e) => {
    e.preventDefault();
    const data = activeTab === 'revenue_growth'
      ? {
          type: 'revenue_growth',
          monthlyInquiries,
          missedRate: `${missedRate}%`,
          avgDealValue: `₪${formatNumber(avgDealValue)}`,
          instantAnsweredCalls: missedCalls,
          estimatedAdditionalDeals: additionalDeals,
          estimatedAddedRevenue: `₪${formatNumber(estimatedAddedRevenue)}`
        }
      : {
          type: 'cost_savings',
          leadsForSavings,
          hourlyWage: `₪${hourlyWage}`,
          hoursSaved,
          totalSavingsMonth: `₪${formatNumber(totalSavings)}`,
          meetingsAdded
        };

    if (onCtaClick) {
      onCtaClick(data, activeTab === 'revenue_growth' ? estimatedAddedRevenue : totalSavings);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="roi-calculator" className="roi-section-full" dir="rtl">
      <div className="roi-container">
        {/* Header */}
        <div className="roi-header">
          <div className="roi-badge-top">
            <Sparkles size={16} />
            <span>מחשבון פוטנציאל עסקי & ROI</span>
          </div>
          <h2 className="section-title">
            מחשבון פוטנציאל הכנסות וחיסכון בעסק
          </h2>
          <p className="roi-subtext">
            הזינו את נתוני הפעילות שלכם וגלו בזמן אמת כמה הכנסות סוכן ה-AI של Bot 10 יכול להניב ממענה מיידי 24/7 לכל ליד, וכמה שעות ועלויות הוא יכול לחסוך לצוות שלכם.
          </p>

          {/* 2 Tabs Switcher */}
          <div className="roi-tabs-wrapper">
            <button
              type="button"
              className={`roi-tab-btn ${activeTab === 'revenue_growth' ? 'active-revenue' : ''}`}
              onClick={() => setActiveTab('revenue_growth')}
            >
              <TrendingUp size={18} />
              <span>פוטנציאל הגדלת הכנסות ממענה מהיר (24/7)</span>
            </button>
            <button
              type="button"
              className={`roi-tab-btn ${activeTab === 'cost_savings' ? 'active-savings' : ''}`}
              onClick={() => setActiveTab('cost_savings')}
            >
              <Clock size={18} />
              <span>חיסכון בעלויות תפעול ושעות עבודה</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Revenue Growth */}
        {activeTab === 'revenue_growth' && (
          <div className="roi-dashboard-card">
            {/* Step 1: 3 Input Cards */}
            <div className="roi-inputs-row">
              {/* Card 1: Monthly inquiries */}
              <div className="roi-input-panel">
                <div className="roi-panel-head">
                  <div className="roi-panel-title">
                    <PhoneCall size={18} color="#f9bb2b" />
                    <span>פניות ושיחות בחודש</span>
                  </div>
                  <span className="roi-chip-val">{formatNumber(monthlyInquiries)} פניות</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(parseInt(e.target.value, 10))}
                  className="roi-slider slider-gold"
                />
                <div className="roi-presets-row">
                  {[100, 250, 500, 1000, 2000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`roi-preset-btn ${monthlyInquiries === val ? 'preset-active' : ''}`}
                      onClick={() => setMonthlyInquiries(val)}
                    >
                      {formatNumber(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card 2: Missed Rate */}
              <div className="roi-input-panel">
                <div className="roi-panel-head">
                  <div className="roi-panel-title">
                    <Clock size={18} color="#f9bb2b" />
                    <span>שיחות ללא מענה מיידי</span>
                  </div>
                  <span className="roi-chip-val highlight-amber">{missedRate}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={missedRate}
                  onChange={(e) => setMissedRate(parseInt(e.target.value, 10))}
                  className="roi-slider slider-gold"
                />
                <div className="roi-presets-row">
                  {[15, 25, 35, 50].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`roi-preset-btn ${missedRate === val ? 'preset-active' : ''}`}
                      onClick={() => setMissedRate(val)}
                    >
                      {val}% {val === 25 ? '(שוק)' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card 3: Avg Deal Value */}
              <div className="roi-input-panel">
                <div className="roi-panel-head">
                  <div className="roi-panel-title">
                    <DollarSign size={18} color="#f9bb2b" />
                    <span>שווי עסקה ממוצעת</span>
                  </div>
                  <span className="roi-chip-val">₪{formatNumber(avgDealValue)}</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(parseInt(e.target.value, 10))}
                  className="roi-slider slider-gold"
                />
                <div className="roi-presets-row">
                  {[500, 1500, 3000, 6000, 10000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`roi-preset-btn ${avgDealValue === val ? 'preset-active' : ''}`}
                      onClick={() => setAvgDealValue(val)}
                    >
                      ₪{formatNumber(val)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Full-Width Results Dashboard */}
            <div className="roi-results-showcase revenue-theme">
              <div className="roi-showcase-header">
                <div className="roi-showcase-badge">
                  <Sparkles size={16} />
                  <span>פוטנציאל הכנסות חודשי נוסף לעסק:</span>
                </div>
                <div className="roi-hero-number gold-gradient-text">
                  +₪{formatNumber(estimatedAddedRevenue)}
                  <span className="roi-hero-period">/ חודש</span>
                </div>
                <p className="roi-hero-sub">
                  הכנסה חודשית מוערכת מחיוג מיידי לכל ליד תוך 5 שניות ומענה רציף 24/7 לשיחות נכנסות במקום שיחות שמתקררות.
                </p>
              </div>

              {/* 4 Spacious KPI Tiles */}
              <div className="roi-kpi-grid">
                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num">{formatNumber(missedCalls)}</div>
                  <div className="roi-kpi-label">שיחות שנענות מיידית 24/7</div>
                  <div className="roi-kpi-sub">ללא המתנה וללא שיחות אבודות</div>
                </div>

                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-gold">~{additionalDeals}</div>
                  <div className="roi-kpi-label">עסקאות נוספות מוערכות</div>
                  <div className="roi-kpi-sub">על בסיס המרה שמרנית של 20%</div>
                </div>

                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-teal">5 שניות</div>
                  <div className="roi-kpi-label">זמן חיוג לליד (Speed to Lead)</div>
                  <div className="roi-kpi-sub">הלקוח עדיין מול המסך</div>
                </div>

                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-green">100%</div>
                  <div className="roi-kpi-label">סנכרון מיידי ל-CRM</div>
                  <div className="roi-kpi-sub">סיכום מלא ותיעוד אוטומטי</div>
                </div>
              </div>

              {/* Highlights Bar */}
              <div className="roi-highlights-bar">
                <div className="roi-highlight-item">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>מענה מלא לשיחות נכנסות בשעות הערב, סופי שבוע וחגים</span>
                </div>
                <div className="roi-highlight-item">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>חיוג אוטומטי ללידים חדשים מקמפיינים תוך שניות</span>
                </div>
                <div className="roi-highlight-item">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>אימות נתונים וסינון מעמיק לפני תיאום פגישה</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="roi-cta-wrap">
                <button
                  type="button"
                  onClick={handleCta}
                  className="cta-button btn-shimmer roi-full-cta"
                >
                  <span>רוצים להגדיל את המכירות בעסק? תאמו שיחת הדגמה קצרה</span>
                  <ArrowRight size={20} style={{ marginRight: '10px' }} />
                </button>
                <div className="roi-disclaimer-text">
                  * התוצאות מהוות סימולציה עסקית על בסיס הנתונים שהזנתם ומדדי שוק מקובלים, ואינן מהוות התחייבות כספית.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cost Savings */}
        {activeTab === 'cost_savings' && (
          <div className="roi-dashboard-card">
            {/* Step 1: 2 Input Cards */}
            <div className="roi-inputs-row two-panels">
              {/* Card 1: Monthly leads */}
              <div className="roi-input-panel">
                <div className="roi-panel-head">
                  <div className="roi-panel-title">
                    <PhoneCall size={18} color="#10b981" />
                    <span>שיחות ולידים לטיפול בחודש</span>
                  </div>
                  <span className="roi-chip-val green-chip">{formatNumber(leadsForSavings)} פניות</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={leadsForSavings}
                  onChange={(e) => setLeadsForSavings(parseInt(e.target.value, 10))}
                  className="roi-slider slider-green"
                />
                <div className="roi-presets-row">
                  {[150, 350, 750, 1500, 3000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`roi-preset-btn ${leadsForSavings === val ? 'preset-active-green' : ''}`}
                      onClick={() => setLeadsForSavings(val)}
                    >
                      {formatNumber(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card 2: Hourly wage */}
              <div className="roi-input-panel">
                <div className="roi-panel-head">
                  <div className="roi-panel-title">
                    <Clock size={18} color="#10b981" />
                    <span>עלות שעת עבודה ממוצעת של נציג</span>
                  </div>
                  <span className="roi-chip-val green-chip">₪{hourlyWage} לשעה</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="150"
                  step="5"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(parseInt(e.target.value, 10))}
                  className="roi-slider slider-green"
                />
                <div className="roi-presets-row">
                  {[40, 50, 65, 80, 110].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`roi-preset-btn ${hourlyWage === val ? 'preset-active-green' : ''}`}
                      onClick={() => setHourlyWage(val)}
                    >
                      ₪{val}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Full-Width Results Dashboard */}
            <div className="roi-results-showcase savings-theme">
              <div className="roi-showcase-header">
                <div className="roi-showcase-badge green-badge">
                  <Clock size={16} />
                  <span>חיסכון חודשי מוערך בעלויות תפעול וכוח אדם:</span>
                </div>
                <div className="roi-hero-number green-text">
                  ₪{formatNumber(totalSavings)}
                  <span className="roi-hero-period">/ חודש</span>
                </div>
                <p className="roi-hero-sub">
                  חיסכון ישיר בשעות מענה של נציגים, סינון שיחות סרק ותיעוד אוטומטי של סיכומי שיחה ישירות ב-CRM.
                </p>
              </div>

              {/* 4 Spacious KPI Tiles */}
              <div className="roi-kpi-grid">
                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-green">{formatNumber(hoursSaved)} שעות</div>
                  <div className="roi-kpi-label">שעות עבודה שנחסכות בחודש</div>
                  <div className="roi-kpi-sub">לצוות המכירות והשירות בעסק</div>
                </div>

                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-gold">+{formatNumber(meetingsAdded)}</div>
                  <div className="roi-kpi-label">פגישות מתואמות ליומן</div>
                  <div className="roi-kpi-sub">פניות בשלות ומסוננות מראש</div>
                </div>

                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-teal">24/7</div>
                  <div className="roi-kpi-label">זמינות מלאה סביב השעון</div>
                  <div className="roi-kpi-sub">ללא תוספת שעות נוספות</div>
                </div>

                <div className="roi-kpi-tile">
                  <div className="roi-kpi-num highlight-green">0</div>
                  <div className="roi-kpi-label">הקלדות ידניות ב-CRM</div>
                  <div className="roi-kpi-sub">תיעוד מלא בסיום כל שיחה</div>
                </div>
              </div>

              {/* Highlights Bar */}
              <div className="roi-highlights-bar">
                <div className="roi-highlight-item">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>סינון שיחות סרק ופניות לא רלוונטיות בלי לבזבז זמן נציג</span>
                </div>
                <div className="roi-highlight-item">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>חיסכון בעלויות מעביד, הכשרת עובדים ותחלופת כוח אדם</span>
                </div>
                <div className="roi-highlight-item">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>תיאום פגישות ישירות ליומן Google Calendar / Outlook</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="roi-cta-wrap">
                <button
                  type="button"
                  onClick={handleCta}
                  className="cta-button btn-shimmer roi-full-cta"
                >
                  <span>רוצים לחסוך שעות ועלויות? תאמו שיחת הדגמה קצרה</span>
                  <ArrowRight size={20} style={{ marginRight: '10px' }} />
                </button>
                <div className="roi-disclaimer-text">
                  * התוצאות מהוות סימולציה עסקית על בסיס הנתונים שהזנתם ומדדי שוק מקובלים, ואינן מהוות התחייבות כספית.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
