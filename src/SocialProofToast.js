import React, { useState, useEffect, useRef } from 'react';
import './SocialProofToast.css';

const NOTIFICATIONS = [
  {
    id: 1,
    badge: 'הדגמה חדשה',
    title: 'סוכנות ביטוח מהמרכז',
    detail: 'תיאמה הרגע שיחת אפיון עם Bot 10',
    time: 'לפני 3 דקות',
    iconType: 'check'
  },
  {
    id: 2,
    badge: 'חיסכון בעלויות',
    title: 'משרד עורכי דין בתל אביב',
    detail: 'סינן מעל 120 שיחות ללא מענה אנושי',
    time: 'לפני 14 דקות',
    iconType: 'trend'
  },
  {
    id: 3,
    badge: 'אוטומציה פעילה',
    title: 'מרפאת מומחים בירושלים',
    detail: 'סגרה 42 תורים אוטומטיים השבוע',
    time: 'לפני 28 דקות',
    iconType: 'calendar'
  },
  {
    id: 4,
    badge: 'הצטרפות חדשה',
    title: 'סוכנות נדל״ן מחיפה',
    detail: 'הפעילה מוקד שיחות יוצאות 24/7',
    time: 'לפני שעה',
    iconType: 'zap'
  },
  {
    id: 5,
    badge: 'ייעול מוקד',
    title: 'חברת שירותים מראשון לציון',
    detail: 'חסכה 65 שעות עבודה חודשיות במענה ללידים',
    time: 'לפני שעתיים',
    iconType: 'trend'
  }
];

export default function SocialProofToast() {
  const [currentToast, setCurrentToast] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const currentIndexRef = useRef(0);
  const hideTimerRef = useRef(null);
  const nextTimerRef = useRef(null);

  useEffect(() => {
    // Check if dismissed in this session
    try {
      if (sessionStorage.getItem('bot10_toast_dismissed') === 'true') {
        setIsDismissed(true);
        return;
      }
    } catch (e) {}

    const showNext = () => {
      if (isDismissed) return;
      const notif = NOTIFICATIONS[currentIndexRef.current % NOTIFICATIONS.length];
      currentIndexRef.current += 1;
      setCurrentToast(notif);
      setIsVisible(true);

      // Hide after 6 seconds
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        // Schedule next toast after 22 seconds
        nextTimerRef.current = setTimeout(showNext, 22000);
      }, 6000);
    };

    // Initial appearance after 7 seconds
    const initialTimer = setTimeout(showNext, 7000);

    return () => {
      clearTimeout(initialTimer);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
    };
  }, [isDismissed]);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
    try {
      sessionStorage.setItem('bot10_toast_dismissed', 'true');
    } catch (e) {}
  };

  if (!currentToast || isDismissed) return null;

  return (
    <div
      className={`social-toast-container ${isVisible ? 'toast-visible' : 'toast-hidden'}`}
      dir="rtl"
      role="status"
      aria-live="polite"
    >
      <div className="social-toast-card">
        <button
          className="social-toast-close"
          onClick={handleClose}
          aria-label="סגור התראה"
          title="סגור"
        >
          ×
        </button>

        <div className="social-toast-icon-wrap">
          <span className="social-toast-live-dot"></span>
          <div className="social-toast-icon">
            {currentToast.iconType === 'check' && '✓'}
            {currentToast.iconType === 'trend' && '📈'}
            {currentToast.iconType === 'calendar' && '📅'}
            {currentToast.iconType === 'zap' && '⚡'}
          </div>
        </div>

        <div className="social-toast-body">
          <div className="social-toast-header">
            <span className="social-toast-badge">{currentToast.badge}</span>
            <span className="social-toast-time">{currentToast.time}</span>
          </div>
          <div className="social-toast-title">{currentToast.title}</div>
          <div className="social-toast-detail">{currentToast.detail}</div>
        </div>
      </div>
    </div>
  );
}
