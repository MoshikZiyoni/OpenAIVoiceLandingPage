import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Icons = {
  robot: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
  user: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f855a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  x: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c53030" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- LOGIC ---
  useEffect(() => {
    const missedLeadsPerDay = leadsPerDay * (missedRate / 100);
    const lostDealsPerDay = missedLeadsPerDay * (closeRate / 100);
    const dailyMoneyLost = lostDealsPerDay * dealValue;
    const totalLoss = dailyMoneyLost * 22; // 22 ימי עבודה בחודש
    setMonthlyLoss(Math.floor(totalLoss));
  }, [leadsPerDay, missedRate, dealValue, closeRate]);

  // --- STYLES ---
  const wrapperStyle = {
    fontFamily: '"Assistant", sans-serif',
    padding: isMobile ? '20px 10px' : '60px 20px',
    direction: 'rtl',
    background: '#020408',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1000px',
    backgroundColor: 'rgba(15, 22, 42, 0.55)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: isMobile ? '20px' : '28px',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
    padding: isMobile ? '25px 15px' : '45px',
    position: 'relative',
    zIndex: 1
  };

  const gradientBg = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(28, 120, 149, 0.15) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    background: 'linear-gradient(110deg, #f9bb2b 8%, #ffe082 18%, #f9bb2b 33%)',
    backgroundSize: '200% 100%',
    color: '#030712',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '800',
    fontSize: '1.05rem',
    textDecoration: 'none',
    marginTop: '20px',
    boxShadow: '0 5px 15px rgba(249, 187, 43, 0.25)',
    cursor: 'pointer',
    border: 'none',
    width: '100%'
  };

  return (
    <div style={wrapperStyle}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={containerStyle}
      >
        <div style={gradientBg} />
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px', position: 'relative', zIndex: 1 }}>
          <motion.h1 
            style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: '800', color: '#fefef9', marginBottom: '10px' }}
          >
            מחשבון אובדן הכנסות
          </motion.h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.15rem', color: '#c8d3e6', maxWidth: '600px', margin: '0 auto' }}>
            גלה במספרים אמיתיים כמה כסף נוזל מהעסק שלך בכל חודש בגלל שיחות שלא קיבלו מענה.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? '30px' : '50px', position: 'relative', zIndex: 1 }}>
          
          {/* Left Side: Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
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
              backgroundColor: 'rgba(239, 68, 68, 0.05)', 
              borderRadius: '20px', 
              padding: isMobile ? '25px' : '40px', 
              textAlign: 'center',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              boxShadow: '0 10px 30px rgba(239, 68, 68, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#ef4444', marginBottom: '10px', fontWeight: '700' }}>
              בכל חודש אתה מפסיד:
            </h3>
            
            <div style={{ fontSize: isMobile ? '3rem' : '4rem', fontWeight: '900', color: '#ef4444', lineHeight: 1, marginBottom: '20px' }}>
              <AnimatedCounter value={monthlyLoss} />
            </div>

            <div style={{ width: '100%', height: '1px', background: 'rgba(239, 68, 68, 0.2)', margin: '20px 0' }}></div>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '30px' }}>
              הכסף הזה יכול להיות בכיס שלך כבר בחודש הבא.
            </p>

            <MotionLink 
              to="/contactform" 
              style={ctaButtonStyle}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>אני רוצה לחסוך את הכסף הזה</span>
              {Icons.arrowLeft}
            </MotionLink>
          </motion.div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '35px', position: 'relative', zIndex: 1 }}>
          <Link to="/" style={{ color: '#fefef9', textDecoration: 'underline', fontWeight: '600', fontSize: '0.95rem' }}>
            חזרה לדף הבית
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

// רכיב קלט מעוצב
const InputSlider = ({ label, value, setValue, min, max, suffix, step = 1, note }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <label style={{ fontSize: '0.95rem', fontWeight: '600', color: '#c8d3e6' }}>{label}</label>
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(249, 187, 43, 0.3)',
          color: '#f9bb2b',
          padding: '2px 10px',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.05rem',
          minWidth: '80px',
          textAlign: 'center'
        }}>
          {value} <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{suffix}</span>
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
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '5px',
          outline: 'none',
          cursor: 'pointer',
          accentColor: '#f9bb2b'
        }}
      />
      {note && <small style={{ display: 'block', marginTop: '6px', color: '#94a3b8', fontSize: '0.8rem' }}>{note}</small>}
    </div>
  );
};

export default MissedCallCalculator;