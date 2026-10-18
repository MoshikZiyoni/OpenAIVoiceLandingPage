import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LeadCaptureForm from './components/LeadCaptureForm';
import updatedLogo from './new_logo_white.png?url';

export default function Contact() {
  return (
    <div className="landing-page-container" dir="rtl" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Helmet>
        <title>יצירת קשר ותיאום שיחת הדגמה אישית | Bot 10</title>
        <meta name="description" content="השאירו פרטים לשיחת אפיון והדגמה אישית עם צוות המייסדים של Bot 10. סוכן קולי AI מותאם אישית לעסק שלך." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bot-10.com/contactform" />
        <meta property="og:title" content="יצירת קשר ותיאום שיחת הדגמה אישית | Bot 10" />
        <meta property="og:description" content="השאירו פרטים לשיחת אפיון והדגמה אישית עם צוות המייסדים של Bot 10. סוכן קולי AI מותאם אישית לעסק שלך." />
        <meta property="og:url" content="https://bot-10.com/contactform" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bot-10.com/logo-og.jpg" />
      </Helmet>

      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <Link to="/" className="landing-brand-link">
            <img src={updatedLogo} alt="Bot 10 AI" className="landing-brand-logo" />
          </Link>
          <Link to="/" className="landing-home-link">
            <span>← חזרה לדף הבית</span>
          </Link>
        </div>
      </header>

      <main style={{ flex: 1, padding: '60px 20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <LeadCaptureForm
          sourceSection="dedicated_contact_page"
          title="רוצים לשמוע איך Bot 10 יישמע בעסק שלכם? השאירו טלפון לשיחת אפיון והדגמה אישית"
          subtitle="נציג בכיר מצוות המייסדים יכין תסריט ראשוני מותאם לענף שלכם ויחזור אליכם לשיחת הדגמה קצרה ללא התחייבות."
          submitButtonText="תכינו לי הדגמה לעסק ודברו איתי ←"
        />

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/" className="cta-button-secondary" style={{ display: 'inline-block' }}>
            חזרה לדף הבית של Bot 10
          </Link>
        </div>
      </main>
    </div>
  );
}