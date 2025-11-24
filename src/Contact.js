import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // To handle loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xpwrjdyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        alert('תודה על פנייתך! נחזור אליך בהקדם');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setStatus('success');
      } else {
        alert('אירעה שגיאה בשליחת הטופס');
        setStatus('error');
      }
    } catch (error) {
      alert('אירעה שגיאה בשליחת הטופס. נסה שוב או פנה אלינו ישירות.');
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-wrapper" dir="rtl">
      {/* Injecting styles directly here */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&display=swap');

        /* Global Reset for this component */
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Assistant', sans-serif;
          background-color: #f0f4f8; /* Added a light background to make the white form pop */
        }

        .page-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .contact-form-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        /* Responsive adjustment for mobile */
        @media (max-width: 900px) {
          .contact-form-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .contact-form {
            order: 2; /* Put form below image on mobile if desired, or keep default */
          }
          
          .image-container {
            order: 1;
            margin-bottom: 20px;
          }
        }

        .contact-form {
          background: #fefef9;
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
          opacity: 0; 
          animation: fadeIn 1s ease-out 0.5s forwards; 
        }
        
        .form-group {
          margin-bottom: 24px;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #1c7895;
          text-align: right;
        }
        
        .form-input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'Assistant', sans-serif;
          background-color: #ffffff;
          color: #1c7895;
          text-align: right; /* Ensure RTL input */
        }
        
        .form-input:focus {
          border-color: #f9bb2b;
          outline: none;
          box-shadow: 0 0 0 3px rgba(249, 187, 43, 0.2); 
        }
        
        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-button {
          background: #f9bb2b;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          color: #1c7895;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .submit-button:hover {
          transform: translateY(-2px) scale(1.01); 
          box-shadow: 0 15px 40px rgba(249, 187, 43, 0.3);
        }

        .submit-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .image-container {
            justify-self: center;
            width: 100%;
            display: flex;
            justify-content: center;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px', textAlign: 'center', color: '#1c7895' }}>
            בואו נתחיל לעבוד יחד
          </h3>
          <div className="form-group">
            <label className="form-label">שם מלא</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">אימייל</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">טלפון</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
              dir="ltr" 
              style={{ textAlign: 'right' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">שם החברה</label>
            <input
              type="text"
              name="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">הודעה</label>
            <textarea
              name="message"
              className="form-input form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="ספרו לנו על הצרכים שלכם..."
            />
          </div>

          <button type="submit" className="submit-button" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'שולח...' : 'שלח פנייה'}
          </button>
        </form>

        <div className="image-container">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/528e0dac3_WhatsAppImage2025-06-19at175252.jpeg"
            alt="צור קשר עם צוות Bot 10 להטמעת עוזר קולי AI בעסק שלך"
            style={{
              maxWidth: '300px',
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              animation: 'float 3s ease-in-out infinite'
            }}
            onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none'; // Hide if image breaks
            }}
          />
          <Link to="/" className="footer-link">חזרה לדף הבית</Link>
        </div>
      </div>
   
    </div>
    
  );
};

// Main App Component
export default function App() {
  return <ContactForm />;
}