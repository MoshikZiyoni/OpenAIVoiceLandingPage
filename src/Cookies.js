import React, { useState, useEffect } from 'react';
import './CookiePopup.css';

export default function CookiePopup() {
  const [isV, setIsV] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('bot10_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setIsV(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage may fail in strict private browsing
      setIsV(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('bot10_cookie_consent', 'accepted');
    } catch (e) {}
    setIsV(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('bot10_cookie_consent', 'declined');
    } catch (e) {}
    setIsV(false);
  };

  if (!isV) return null;

  return (
    <div className={`cookie-popup ${isV ? 'visible' : ''}`} role="dialog" aria-labelledby="cookie-title" dir="rtl">
      <div className="cookie-popup__content">
        <p id="cookie-title">
          המשך השימוש באתר מהווה הסכמה לשימוש בקבצי <b>Cookies</b> לשיפור חווית המשתמש וסטטיסטיקה.
        </p>
        <div className="cookie-popup__actions">
          <button className="cookie-popup__button cookie-popup__button--primary" onClick={handleAccept}>
            אשר הכל
          </button>
          <button className="cookie-popup__button cookie-popup__button--secondary" onClick={handleDecline}>
            הכרחיים בלבד
          </button>
        </div>
      </div>
    </div>
  );
}