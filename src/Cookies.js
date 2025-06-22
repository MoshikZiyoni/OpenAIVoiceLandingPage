import React, { useState } from 'react';
import './CookiePopup.css';

export default function CookiePopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="cookie-popup">
      <p>
        המשך השימוש באתר מהווה הסכמה לשימוש בקבצי <b>Cookies</b> החיוניים לתפקוד האתר שלנו.
      </p>
      <div className="cookie-buttons">
        <button onClick={() => setVisible(false)}>אשר</button>
        <button onClick={() => setVisible(false)} className="outline">דחה</button>
      </div>
    </div>
  );
}
