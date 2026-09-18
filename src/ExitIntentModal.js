import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExitIntentModal.css';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let hasShown = false;
    try {
      if (sessionStorage.getItem('bot10_exit_intent_shown') === 'true') {
        hasShown = true;
      }
    } catch (e) {}

    if (hasShown) return;

    let enableDetection = false;
    // Don't trigger during the first 8 seconds
    const delayTimer = setTimeout(() => {
      enableDetection = true;
    }, 8000);

    const handleMouseLeave = (e) => {
      if (!enableDetection) return;
      // Trigger when mouse moves out through the top of the viewport
      if (e.clientY <= 12 && !e.relatedTarget) {
        setIsOpen(true);
        enableDetection = false;
        try {
          sessionStorage.setItem('bot10_exit_intent_shown', 'true');
        } catch (err) {}
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(delayTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGoToCalculator = () => {
    setIsOpen(false);
    navigate('/cost-calculator');
  };

  const handleGoToContact = () => {
    setIsOpen(false);
    navigate('/contactform');
  };

  if (!isOpen) return null;

  return (
    <div className="exit-modal-overlay" onClick={handleClose} dir="rtl">
      <div
        className="exit-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
      >
        <button
          className="exit-modal-close"
          onClick={handleClose}
          aria-label="סגור חלון"
        >
          ×
        </button>

        <div className="exit-modal-badge">הזדמנות בלעדית לעסק שלך</div>

        <h2 id="exit-modal-title" className="exit-modal-title">
          רגע לפני שאתה יוצא...
        </h2>

        <p className="exit-modal-subtitle">
          האם ידעת ש-<b>Bot 10</b> חוסך לעסקים בישראל עשרות שעות עבודה בחודש ומבטיח שאף ליד לא יתפספס?
        </p>

        <div className="exit-modal-highlights">
          <div className="exit-highlight-item">
            <span className="exit-highlight-check">✓</span>
            <span>מענה קולי מיידי 24/7 בעברית טבעית</span>
          </div>
          <div className="exit-highlight-item">
            <span className="exit-highlight-check">✓</span>
            <span>חיסכון ממוצע של מעל 60% מעלויות כוח אדם</span>
          </div>
          <div className="exit-highlight-item">
            <span className="exit-highlight-check">✓</span>
            <span>סנכרון מלא ל-CRM וליומן הפגישות שלך</span>
          </div>
        </div>

        <div className="exit-modal-actions">
          <button
            className="exit-modal-btn exit-modal-btn-primary"
            onClick={handleGoToCalculator}
          >
            חשב חיסכון חודשי לעסק שלך &larr;
          </button>
          <button
            className="exit-modal-btn exit-modal-btn-secondary"
            onClick={handleGoToContact}
          >
            תיאום שיחת אפיון ללא התחייבות
          </button>
        </div>

        <button className="exit-modal-dismiss" onClick={handleClose}>
          לא תודה, המשך לגלוש באתר
        </button>
      </div>
    </div>
  );
}
