import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

export default function LeadModal({
  isOpen,
  onClose,
  sourceSection = 'lead_modal',
  selectedPlan = null,
  calculatorData = null,
  listenedRecordings = []
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay" onClick={onClose} dir="rtl">
      <div
        className="lead-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="lead-modal-close-btn"
          onClick={onClose}
          aria-label="סגור חלון"
        >
          <X size={22} />
        </button>

        <LeadCaptureForm
          sourceSection={sourceSection}
          selectedPlan={selectedPlan}
          calculatorData={calculatorData}
          listenedRecordings={listenedRecordings}
          title={
            selectedPlan
              ? `שיחת אפיון לחבילת ${selectedPlan}`
              : 'רוצים לשמוע איך הבוט יישמע בעסק שלכם?'
          }
          subtitle="השאירו פרטים ונחזור אליכם לשיחת אפיון קצרה והדגמה אישית ללא כל התחייבות."
          submitButtonText="תכינו לי הדגמה ודברו איתי ←"
          compact={false}
          onSuccess={() => {
            // Keep open so they see success message, user can close when ready
          }}
        />
      </div>
    </div>
  );
}
