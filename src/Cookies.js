import React, { useState, useEffect } from 'react';
import './CookiePopup.css';

export default function CookiePopup() {
  const [isV, setIsV] = useState(false);

  useEffect(() => {
    // The popup will appear after a short delay
    const timer = setTimeout(() => setIsV(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    // Here you can also add logic to set a cookie
    setIsV(false);
  };

  const handleDecline = () => {
    // Add logic for declining, e.g., redirecting to a privacy page
    setIsV(false);
  };

  return (
    <div className={`cookie-popup ${isV ? 'visible' : ''}`} role="dialog" aria-labelledby="cookie-title">
      <div className="cookie-popup__content">
        <p id="cookie-title">
        המשך השימוש באתר מהווה הסכמה לשימוש בקבצי <b>Cookies</b> החיוניים לתפקוד האתר שלנו.
        </p>
        <div className="cookie-popup__actions">
          <button className="cookie-popup__button cookie-popup__button--primary" onClick={handleAccept}>
          אשר
          </button>
          <button className="cookie-popup__button cookie-popup__button--secondary" onClick={handleDecline}>
          דחה
          </button>
        </div>
      </div>
    </div>
  );
}