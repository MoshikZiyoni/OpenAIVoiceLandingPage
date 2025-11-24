import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
const MotionLink = motion(Link);
const Icons = {
  robot: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
  user: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f855a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  x: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c53030" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
};
const THEME = {
    primary: '#103157', // הכחול הכהה של Bot-10
    accent: '#3182ce',  // כחול בהיר לאלמנטים אינטראקטיביים
    success: '#10B981', // ירוק לכסף והצלחה
    error: '#EF4444',   // אדום להוצאות
    bg: '#F3F4F6'       // רקע כללי
  };
  
const styles = {
    wrapper: {
      fontFamily: '"Heebo", sans-serif',
      padding: '40px 20px',
      direction: 'rtl',
      background: '#f4f7fa',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '80vh',
      alignItems: 'center'
    },
    container: {
      width: '100%',
      maxWidth: '1100px',
      background: '#ffffff',
      borderRadius: '30px',
      boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      padding: '40px',
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#ffffff',
      color: THEME.success,
      padding: '12px 28px',
      borderRadius: '50px',
      fontWeight: '800',
      fontSize: '1.1rem',
      textDecoration: 'none',
      marginTop: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      border: 'none'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '60px',
      alignItems: 'start'
    },
    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: '800',
      color: '#1a202c',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    card: {
      padding: '30px',
      borderRadius: '24px',
      position: 'relative',
      marginBottom: '25px',
      transition: 'transform 0.3s ease',
    },
    savingsBox: {
      marginTop: '30px',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      padding: '30px',
      borderRadius: '24px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 15px 35px rgba(16, 185, 129, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }
  };
// רכיב עזר לאנימציה של המספרים הרצים
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 1.5,
      onUpdate: (latest) => {
        node.textContent = '₪' + Math.floor(latest).toLocaleString();
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [value]);

  return <span ref={ref} />;
};

const MissedCallCalculator = () => {
  // --- STATE ---
  const [leadsPerDay, setLeadsPerDay] = useState(15);
  const [missedRate, setMissedRate] = useState(20);
  const [dealValue, setDealValue] = useState(400);
  const [closeRate, setCloseRate] = useState(15);
  const [monthlyLoss, setMonthlyLoss] = useState(0);

  // --- LOGIC ---
  useEffect(() => {
    const missedLeadsPerDay = leadsPerDay * (missedRate / 100);
    const lostDealsPerDay = missedLeadsPerDay * (closeRate / 100);
    const dailyMoneyLost = lostDealsPerDay * dealValue;
    const totalLoss = dailyMoneyLost * 22; // 22 ימי עבודה בחודש
    setMonthlyLoss(Math.floor(totalLoss));
  }, [leadsPerDay, missedRate, dealValue, closeRate]);

  // --- STYLES (Inline for easy copy-paste) ---
  const containerStyle = {
    fontFamily: '"Heebo", "Rubik", sans-serif',
    maxWidth: '900px',
    margin: '60px auto',
    padding: '40px 20px',
    direction: 'rtl',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
  };

  const gradientBg = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(66,153,225,0.1) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={containerStyle}
    >
      <div style={gradientBg} />
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 1 }}>
        <motion.h1 
          style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1a202c', marginBottom: '10px' }}
        >
          מחשבון אובדן הכנסות
        </motion.h1>
        <p style={{ fontSize: '1.2rem', color: '#718096', maxWidth: '600px', margin: '0 auto' }}>
          גלה במספרים אמיתיים כמה כסף נוזל מהעסק שלך בכל חודש בגלל שיחות שלא קיבלו מענה.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', position: 'relative', zIndex: 1 }}>
        
        {/* Left Side: Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          <InputSlider 
            label="כמה שיחות נכנסות ביום?" 
            value={leadsPerDay} 
            setValue={setLeadsPerDay} 
            min={1} max={200} 
            suffix="שיחות"
          />

          <InputSlider 
            label="אחוז השיחות שמתפספסות (בממוצע)" 
            value={missedRate} 
            setValue={setMissedRate} 
            min={0} max={100} 
            suffix="%"
            note="הממוצע בשוק הוא כ-25%"
          />

          <InputSlider 
            label="שווי עסקה ממוצעת" 
            value={dealValue} 
            setValue={setDealValue} 
            min={50} max={5000} 
            step={50}
            suffix="₪"
          />

          <InputSlider 
            label="אחוז סגירה (מליד לעסקה)" 
            value={closeRate} 
            setValue={setCloseRate} 
            min={1} max={100} 
            suffix="%"
          />
          
        </div>

        {/* Right Side: Results Card */}
        <motion.div 
          style={{ 
            backgroundColor: '#fff5f5', 
            borderRadius: '20px', 
            padding: '40px', 
            textAlign: 'center',
            border: '1px solid #fed7d7',
            boxShadow: '0 10px 30px rgba(229, 62, 62, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 style={{ fontSize: '1.4rem', color: '#c53030', marginBottom: '10px', fontWeight: '600' }}>
            בכל חודש אתה מפסיד:
          </h3>
          
          <div style={{ fontSize: '4rem', fontWeight: '900', color: '#e53e3e', lineHeight: 1, marginBottom: '20px' }}>
            <AnimatedCounter value={monthlyLoss} />
          </div>

          <div style={{ width: '100%', height: '1px', background: '#feb2b2', margin: '20px 0' }}></div>

          <p style={{ fontSize: '1rem', color: '#718096', marginBottom: '30px' }}>
            הכסף הזה יכול להיות בכיס שלך כבר בחודש הבא.
          </p>

          <MotionLink 
                  to="/contactform" 
                  style={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   <span>אני רוצה לחסוך את הכסף הזה</span>
                   {Icons.arrowLeft}
                </MotionLink>
        </motion.div>
      </div>
      <Link to="/" className="footer-link">חזרה לדף הבית</Link>
    </motion.div>
  );
};

// רכיב קלט מעוצב
const InputSlider = ({ label, value, setValue, min, max, suffix, step = 1, note }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <label style={{ fontSize: '1rem', fontWeight: '600', color: '#4a5568' }}>{label}</label>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2b6cb0' }}>
          {value} <span style={{ fontSize: '0.9rem' }}>{suffix}</span>
        </div>
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          background: '#e2e8f0',
          borderRadius: '5px',
          outline: 'none',
          cursor: 'pointer',
          accentColor: '#3182ce' // צבע הסליידר בדפדפנים מודרניים
        }}
      />
      {note && <small style={{ display: 'block', marginTop: '5px', color: '#a0aec0', fontSize: '0.85rem' }}>{note}</small>}
    </div>
  );
};

export default MissedCallCalculator;