import React, { useState } from 'react';
import { Send, CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';

const BUSINESS_FIELDS = [
  'סוכנות ביטוח / פיננסים',
  'נדל"ן ותיווך',
  'קליניקה / רפואה',
  'משרד עו"ד / רו"ח',
  'מוקד מכירות / שירות',
  'אחר'
];

export default function LeadCaptureForm({
  sourceSection = 'general_form',
  selectedPlan = null,
  calculatorData = null,
  listenedRecordings = [],
  title = 'רוצים לשמוע איך הבוט יישמע עם הקול והתסריט של העסק שלכם?',
  subtitle = 'השאירו שם וטלפון – אנחנו נכין תסריט ראשוני מותאם לעסק שלכם ונעלה מולכם לשיחת הדגמה קצרה.',
  submitButtonText = 'תכינו לי הדגמה לעסק ודברו איתי ←',
  compact = false,
  onSuccess = null
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessField: BUSINESS_FIELDS[0]
  });
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Validate Israeli mobile phone: e.g. 050-1234567 or 0501234567
  const validateIsraeliPhone = (val) => {
    const clean = val.replace(/[-\s]/g, '');
    return /^05\d{8}$/.test(clean);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, phone: val }));
    if (val && !validateIsraeliPhone(val)) {
      setPhoneError('אנא הזינו מספר נייד ישראלי תקין (לדוגמה: 050-1234567)');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('נא להזין שם מלא');
      return;
    }
    if (!validateIsraeliPhone(formData.phone)) {
      setPhoneError('אנא הזינו מספר נייד ישראלי תקין (לדוגמה: 050-1234567)');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      businessField: formData.businessField,
      selectedPlan: selectedPlan || 'לא נבחרה חבילה (פנייה כללית)',
      sourceSection: sourceSection,
      calculatorData: calculatorData ? JSON.stringify(calculatorData) : 'לא נעשה שימוש במחשבון',
      listenedRecordings: listenedRecordings && listenedRecordings.length > 0
        ? listenedRecordings.join(' | ')
        : 'לא נרשמה האזנה',
      submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
      pageUrl: typeof window !== 'undefined' ? window.location.href : ''
    };

    try {
      const response = await fetch('https://formspree.io/f/xpwrjdyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setSubmitError('אירעה שגיאה קלה בשליחה. ניתן לחייג אלינו או לשלוח הודעה בוואטסאפ.');
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setSubmitError('שגיאת תקשורת. נא לנסות שנית או לפנות בוואטסאפ.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="lead-form-success">
        <CheckCircle size={48} className="lead-success-icon" />
        <h4 className="lead-success-title">תודה {formData.name}! הפרטים התקבלו בהצלחה</h4>
        <p className="lead-success-desc">
          צוות המייסדים של Bot 10 יכין תסריט ראשוני מותאם לתחום <strong>{formData.businessField}</strong> וניצור איתך קשר בהקדם למספר <strong>{formData.phone}</strong> לשיחת הדגמה אישית.
        </p>
        {selectedPlan && (
          <div className="lead-success-plan">
            התעניינות בחבילה: <strong>{selectedPlan}</strong>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`lead-form-card ${compact ? 'lead-form-compact' : ''}`}>
      <div className="lead-form-header">
        {selectedPlan && (
          <div className="lead-selected-plan-badge">
            חבילה שנבחרה: {selectedPlan}
          </div>
        )}
        <h3 className="lead-form-title">{title}</h3>
        {subtitle && <p className="lead-form-subtitle">{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className="lead-form-inner" noValidate>
        {/* Field 1: Full Name */}
        <div className="lead-form-group">
          <label className="lead-form-label">שם מלא <span className="req-star">*</span></label>
          <input
            type="text"
            className="lead-form-input"
            placeholder="ישראל ישראלי"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* Field 2: Phone */}
        <div className="lead-form-group">
          <label className="lead-form-label">טלפון נייד <span className="req-star">*</span></label>
          <input
            type="tel"
            dir="ltr"
            className={`lead-form-input ${phoneError ? 'input-error' : ''}`}
            placeholder="050-1234567"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
          />
          {phoneError && (
            <div className="lead-field-error">
              <AlertCircle size={14} />
              <span>{phoneError}</span>
            </div>
          )}
        </div>

        {/* Field 3: Business Field */}
        <div className="lead-form-group">
          <label className="lead-form-label">תחום העסק <span className="req-star">*</span></label>
          <div className="lead-field-options">
            <select
              className="lead-form-select"
              value={formData.businessField}
              onChange={(e) => setFormData({ ...formData, businessField: e.target.value })}
            >
              {BUSINESS_FIELDS.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>
        </div>

        {submitError && (
          <div className="lead-form-error-banner">
            <AlertCircle size={16} />
            <span>{submitError}</span>
          </div>
        )}

        <button
          type="submit"
          className="lead-submit-btn btn-shimmer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>שולח פרטים...</span>
          ) : (
            <>
              <span>{submitButtonText}</span>
              <Send size={18} style={{ marginRight: '8px' }} />
            </>
          )}
        </button>

        <div className="lead-microcopy">
          <ShieldCheck size={16} className="shield-icon" />
          <span>🔒 שיחת אפיון אישית ללא התחייבות • מענה אנושי מהיר על ידי צוות המייסדים</span>
        </div>
      </form>
    </div>
  );
}
