import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import updatedLogo from '../new_logo_white.png?url';
import HeroAudioPlayer from '../components/HeroAudioPlayer';
import LeadCaptureForm from '../components/LeadCaptureForm';
import UpgradedRoiCalculator from '../components/UpgradedRoiCalculator';
import StickyMobileBar from '../components/StickyMobileBar';
import LeadModal from '../components/LeadModal';

export default function LandingPageTemplate({
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalUrl,
  badgeText,
  h1Title,
  subtitleText,
  stats = [],
  audioSrc,
  audioTitle,
  audioDescription,
  audioBadge,
  audioTags = [],
  painPoints = [],
  benefits = [],
  calculatorDefaultCalls = 200,
  calculatorDefaultDeal = 1500,
  sourceSection,
  faqItems = []
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState(null);
  const [listenedRecordings, setListenedRecordings] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  const handleTrackPlay = (trackName) => {
    if (!listenedRecordings.includes(trackName)) {
      setListenedRecordings((prev) => [...prev, trackName]);
    }
  };

  const handleCalculatorCta = (data) => {
    setCalculatorData(data);
    const formElement = document.getElementById('landing-lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="landing-page-container" dir="rtl">
      {/* SEO Helmet Tags */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
      </Helmet>

      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <Link to="/" className="landing-brand-link">
            <img src={updatedLogo} alt="Bot 10 AI" className="landing-brand-logo" />
          </Link>

          <nav className="landing-nav-links">
            <Link to="/" className="landing-home-link">
              <span>← חזרה לדף הבית</span>
            </Link>
            <a href="#demo-audio" className="landing-nav-item">שמעו הקלטה</a>
            <a href="#roi-section" className="landing-nav-item">מחשבון אובדן</a>
            <a href="#landing-lead-form" className="landing-nav-item landing-cta-nav">דברו איתנו</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-hero-section">
        <div className="landing-hero-content">
          <div className="landing-hero-badge">
            <Sparkles size={16} />
            <span>{badgeText}</span>
          </div>

          <h1 className="landing-h1">{h1Title}</h1>
          <p className="landing-subtitle">{subtitleText}</p>

          {/* Quick Metrics */}
          {stats && stats.length > 0 && (
            <div className="landing-stats-grid">
              {stats.map((st, i) => (
                <div key={i} className="landing-stat-card">
                  <div className="landing-stat-val">{st.val}</div>
                  <div className="landing-stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Hero CTAs */}
          <div className="landing-hero-ctas">
            <button
              type="button"
              className="cta-button btn-shimmer"
              onClick={() => setIsModalOpen(true)}
            >
              <span>תיאום שיחת הדגמה לתחום שלכם ←</span>
            </button>
            <a href="#demo-audio" className="cta-button-secondary">
              <span>האזינו לשיחה חיה</span>
            </a>
          </div>
        </div>

        {/* Hero Form Card right on top */}
        <div className="landing-hero-form-wrapper">
          <LeadCaptureForm
            sourceSection={`${sourceSection}_hero`}
            calculatorData={calculatorData}
            listenedRecordings={listenedRecordings}
            title="רוצים לשמוע איך הבוט יישמע בתחום שלכם?"
            subtitle="השאירו פרטים ונכין עבורכם תסריט ראשוני מותאם לענף ונעלה לשיחת הדגמה קצרה."
            submitButtonText="תכינו לי הדגמה ודברו איתי ←"
            compact={true}
          />
        </div>
      </section>

      {/* Featured Audio Player Section */}
      <section id="demo-audio" className="landing-audio-section">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">הקלטת אמת מתוך המערכת</span>
          <h2 className="landing-section-title">{audioTitle || 'שמעו את הבוט בפעולה בענף שלכם'}</h2>
          <p className="landing-section-desc">
            {audioDescription || 'ללא קול רובוטי וללא תפריטים מציקים. סוכן קולי חד וטבעי שמסנן, מתשאל וקובע פגישות ביומן.'}
          </p>
        </div>

        <div className="landing-audio-wrapper">
          <HeroAudioPlayer
            audioSrc={audioSrc}
            onPlayTrack={handleTrackPlay}
          />
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      {(painPoints.length > 0 || benefits.length > 0) && (
        <section className="landing-comparison-section">
          <div className="landing-section-header">
            <span className="landing-section-eyebrow">למה בוט קולי מותאם אישית?</span>
            <h2 className="landing-section-title">ההבדל בין לאבד לידים לבין לסגור אותם בשניות</h2>
          </div>

          <div className="landing-comparison-grid">
            <div className="landing-compare-card card-pain">
              <h3 className="compare-card-title">❌ מה קורה היום בעסק שלך?</h3>
              <ul className="compare-list">
                {painPoints.map((p, i) => (
                  <li key={i}>
                    <span className="compare-icon-pain">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="landing-compare-card card-benefit">
              <h3 className="compare-card-title">✅ איך Bot 10 משנה את המשחק?</h3>
              <ul className="compare-list">
                {benefits.map((b, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="compare-icon-check" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Calculator Section */}
      <div id="roi-section">
        <UpgradedRoiCalculator onCtaClick={handleCalculatorCta} />
      </div>

      {/* Bottom Lead Form */}
      <section id="landing-lead-form" className="landing-bottom-form-section">
        <div className="landing-section-header">
          <h2 className="landing-section-title">רוצים לבחון התאמה לעסק שלכם?</h2>
          <p className="landing-section-desc">
            שיחת אפיון טלפונית אישית עם צוות המייסדים של Bot 10. בלי התחייבות, בלי לחץ – רק הצגת היכולות והתאמת תסריט מדויק לעסק שלכם.
          </p>
        </div>

        <div className="landing-full-form-wrapper">
          <LeadCaptureForm
            sourceSection={`${sourceSection}_bottom`}
            calculatorData={calculatorData}
            listenedRecordings={listenedRecordings}
            title="השאירו פרטים ונחזור אליכם לשיחת אפיון והדגמה"
            subtitle="מענה מהיר מאיתנו • נכין עבורכם דמו קולי ייעודי לתחום העסק שלכם"
            submitButtonText="אני רוצה הדגמה קולית לעסק שלי ←"
          />
        </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="landing-faq-section">
          <div className="landing-section-header">
            <h2 className="landing-section-title">שאלות נפוצות</h2>
          </div>
          <div className="landing-faq-list">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`landing-faq-item ${openFaq === idx ? 'faq-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="landing-faq-q">
                  <span>{item.q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </div>
                {openFaq === idx && (
                  <div className="landing-faq-a">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-footer-brand">
            <img src={updatedLogo} alt="Bot 10" className="landing-footer-logo" />
            <p>הסוכן הקולי שמדבר בקול שלך וסוגר פגישות 24/7</p>
          </div>
          <div className="landing-footer-contact">
            <div>דוא״ל: <a href="mailto:bot10.info@gmail.com">bot10.info@gmail.com</a></div>
            <div>טלפון וואטסאפ: <a href="https://wa.me/972526134734">052-6134734</a></div>
          </div>
        </div>
        <div className="landing-footer-bottom">
          <Link to="/">דף הבית של Bot 10</Link> | <Link to="/accessibility">הצהרת נגישות</Link> | © {new Date().getFullYear()} Bot 10 AI. כל הזכויות שמורות.
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <StickyMobileBar onOpenModal={() => setIsModalOpen(true)} />

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceSection={`${sourceSection}_modal`}
        calculatorData={calculatorData}
        listenedRecordings={listenedRecordings}
      />
    </div>
  );
}
