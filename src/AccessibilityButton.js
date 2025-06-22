import React, { useState } from 'react';
import './AccessibilityButton.css';

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false);

  const toggleFontSize = () => {
    document.body.classList.toggle('accessibility-font-size');
  };

  const toggleContrast = () => {
    document.body.classList.toggle('accessibility-contrast');
  };

  const toggleLinks = () => {
    document.body.classList.toggle('accessibility-links');
  };

  return (
    <div className="accessibility-container">
      <button
        className="accessibility-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle accessibility options"
      >
        ♿
      </button>
      {open && (
        <div className="accessibility-menu">
          <button onClick={toggleFontSize}>הגדלת טקסט</button>
          <button onClick={toggleContrast}>ניגודיות גבוהה</button>
          <button onClick={toggleLinks}>הדגשת קישורים</button>
        </div>
      )}
    </div>
  );
}
