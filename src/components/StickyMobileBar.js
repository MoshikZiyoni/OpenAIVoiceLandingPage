import React from 'react';
import { PhoneCall } from 'lucide-react';

export default function StickyMobileBar({ onOpenModal }) {
  const whatsappUrl = `https://wa.me/972526134734?text=${encodeURIComponent(
    'היי ערן ומושיק, הגעתי מהאתר של Bot 10 ואשמח לשיחת התאמה לעסק שלי'
  )}`;

  return (
    <aside className="sticky-mobile-bar" aria-label="סרגל פעולות מהיר למובייל">
      <div className="sticky-mobile-bar-inner">
        {/* Main CTA (70%) */}
        <button
          type="button"
          className="sticky-cta-main"
          onClick={onOpenModal}
          aria-label="תיאום שיחת הדגמה לעסק"
        >
          <PhoneCall size={18} className="sticky-phone-icon" />
          <span>תיאום שיחת הדגמה לעסק</span>
        </button>

        {/* Secondary WhatsApp (30%) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta-whatsapp"
          aria-label="פנייה בוואטסאפ לערן ומושיק"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="sticky-wa-icon"
          />
          <span>וואטסאפ</span>
        </a>
      </div>
    </aside>
  );
}
