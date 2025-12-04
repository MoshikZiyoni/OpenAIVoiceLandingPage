import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { Link } from 'react-router-dom';

// יצירת קומפוננטה שמשלבת בין Link ל-Motion כדי לאפשר אנימציה על הלינק
const MotionLink = motion(Link);

// --- אייקונים ---
const Icons = {
    robot: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>,
    user: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f855a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    x: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c53030" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
    arrowLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
};

// רכיב למספר רץ (Counter)
const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const controls = animate(0, value, {
            duration: 0.8,
            onUpdate: (latest) => { node.textContent = Math.floor(latest).toLocaleString(); },
            ease: "easeOut"
        });
        return () => controls.stop();
    }, [value]);

    return <span ref={ref}>{value.toLocaleString()}</span>;
};

const EnterpriseCostCalculator = () => {
    // --- STATE ---
    const [callsPerDay, setCallsPerDay] = useState(150);
    const [avgDuration, setAvgDuration] = useState(2.5);
    const [numAgents, setNumAgents] = useState(2);
    const [hourlyWage, setHourlyWage] = useState(45);
    
    // זיהוי מובייל לשינוי עיצוב
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // בדיקה ראשונית
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const THEME = {
        primary: '#103157', // הכחול הכהה של Bot-10
        accent: '#3182ce',  // כחול בהיר לאלמנטים אינטראקטיביים
        success: '#10B981', // ירוק לכסף והצלחה
        error: '#EF4444',   // אדום להוצאות
        bg: '#F3F4F6'       // רקע כללי
    };

    const [humanMonthlyCost, setHumanMonthlyCost] = useState(0);
    const [aiMonthlyCost, setAiMonthlyCost] = useState(0);
    const [savings, setSavings] = useState(0);

    // קבועים
    const aiPricePerMinute = 1.5;
    const workingDays = 22;
    const shiftHours = 9;

    // חישובים
    useEffect(() => {
        const totalHumanCost = numAgents * hourlyWage * shiftHours * workingDays;
        const totalAiCost = callsPerDay * avgDuration * aiPricePerMinute * workingDays;

        setHumanMonthlyCost(Math.floor(totalHumanCost));
        setAiMonthlyCost(Math.floor(totalAiCost));
        setSavings(Math.floor(totalHumanCost - totalAiCost));
    }, [callsPerDay, avgDuration, numAgents, hourlyWage]);

    // --- STYLES ---
    const styles = {
        wrapper: {
            fontFamily: '"Heebo", sans-serif',
            padding: isMobile ? '20px 10px' : '40px 20px',
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
            borderRadius: isMobile ? '20px' : '30px',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            padding: isMobile ? '25px 15px' : '40px', // פחות ריווח במובייל
        },
        ctaButton: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: '#ffffff',
            color: THEME.success,
            padding: '12px 28px',
            borderRadius: '50px',
            fontWeight: '800',
            fontSize: isMobile ? '1rem' : '1.1rem',
            textDecoration: 'none',
            marginTop: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            border: 'none',
            width: isMobile ? '100%' : 'auto' // כפתור רחב במובייל
        },
        grid: {
            display: 'grid',
            // השינוי הקריטי למובייל: מאפשר לעמודות לרדת עד 280 פיקסלים לפני שבירה
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: isMobile ? '40px' : '60px',
            alignItems: 'start'
        },
        sectionTitle: {
            fontSize: isMobile ? '1rem' : '1.1rem',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        card: {
            padding: isMobile ? '20px' : '30px',
            borderRadius: '24px',
            position: 'relative',
            marginBottom: '25px',
            transition: 'transform 0.3s ease',
        },
        savingsBox: {
            marginTop: '30px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            padding: isMobile ? '25px' : '30px',
            borderRadius: '24px',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(16, 185, 129, 0.3)',
            position: 'relative',
            overflow: 'hidden'
        },
        calculationNote: {
            fontSize: '0.75rem',
            color: '#718096',
            marginTop: '4px',
            fontWeight: '400'
        }
    };

    return (
        <div style={styles.wrapper}>
            <motion.div
                style={styles.container}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ 
                            fontSize: isMobile ? '1.8rem' : '2.5rem', // פונט קטן יותר במובייל
                            fontWeight: '900', 
                            color: '#1a202c', 
                            margin: 0,
                            lineHeight: 1.2
                        }}
                    >
                        מחשבון התייעלות וחיסכון
                    </motion.h1>
                    <p style={{ color: '#718096', fontSize: isMobile ? '1rem' : '1.1rem', marginTop: '10px' }}>
                        בדוק כמה העסק שלך יכול לחסוך במעבר ל-Bot 10
                    </p>
                </div>

                <div style={styles.grid}>

                    {/* --- צד ימין (קונטרולס + באנר חיסכון) --- */}
                    <div>
                        {/* קבוצה 1: כוח אדם */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ marginBottom: '40px' }}
                        >
                            <div style={styles.sectionTitle}>
                                <span style={{ background: '#FED7D7', color: '#C53030', padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem' }}>1</span>
                                כוח האדם הנוכחי
                            </div>

                            <InputSlider
                                label="כמה נציגים להחליף?"
                                value={numAgents} setValue={setNumAgents} min={1} max={15} suffix="נציגים"
                                accentColor="#e53e3e"
                            />
                            <InputSlider
                                label="עלות שעתית (מעביד)"
                                value={hourlyWage} setValue={setHourlyWage} min={30} max={100} suffix="₪/שעה"
                                accentColor="#e53e3e"
                            />
                        </motion.div>

                        {/* קבוצה 2: נפח פעילות */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div style={styles.sectionTitle}>
                                <span style={{ background: '#BEE3F8', color: '#2C5282', padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem' }}>2</span>
                                נפח הפעילות
                            </div>

                            <InputSlider
                                label="כמות שיחות ביום"
                                value={callsPerDay} setValue={setCallsPerDay} min={10} max={1000} step={10} suffix="שיחות"
                                accentColor="#3182ce"
                            />
                            <InputSlider
                                label="משך שיחה ממוצע"
                                value={avgDuration} setValue={setAvgDuration} min={0.5} max={10} step={0.5} suffix="דקות"
                                accentColor="#3182ce"
                            />
                        </motion.div>

                        {/* --- באנר החיסכון --- */}
                        <motion.div
                            style={styles.savingsBox}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* אפקט זוהר ברקע */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                style={{
                                    position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)',
                                    pointerEvents: 'none'
                                }}
                            />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <h3 style={{ margin: '0 0 10px 0', fontSize: isMobile ? '1.1rem' : '1.3rem', opacity: 0.95 }}>החלף את הנציגים ותחסוך:</h3>

                                {/* המספר הגדול - פועם */}
                                <motion.div
                                    key={savings} // מפעיל אנימציה בכל שינוי מספר
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    style={{ 
                                        fontSize: isMobile ? '2.5rem' : '3.5rem', // מספר קטן יותר במובייל 
                                        fontWeight: '900', 
                                        lineHeight: 1, 
                                        textShadow: '0 4px 10px rgba(0,0,0,0.2)' 
                                    }}
                                >
                                    ₪<AnimatedNumber value={savings} />
                                </motion.div>

                                <p style={{ margin: '10px 0 0 0', fontSize: '1rem', fontWeight: '500', background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '5px 15px', borderRadius: '20px' }}>
                                    בכל חודש מחדש!
                                </p>

                                <br />

                                {/* כפתור ה-Link החדש */}
                                <MotionLink
                                    to="/contactform"
                                    style={styles.ctaButton}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>אני רוצה לחסוך את הכסף הזה</span>
                                    {Icons.arrowLeft}
                                </MotionLink>

                            </div>
                        </motion.div>
                    </div>

                    {/* --- צד שמאל (כרטיסי תוצאות) --- */}
                    <div>

                        {/* כרטיס אנושי */}
                        <motion.div
                            style={{ ...styles.card, background: '#FFF5F5', border: '2px solid #FED7D7' }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(229, 62, 62, 0.1)' }}
                        >
                            <div style={{ marginBottom: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C53030', fontWeight: 'bold' }}>
                                    {Icons.user} צוות אנושי ({numAgents})
                                </div>
                                {/* --- תוספת הסבר חישוב אנושי --- */}
                                <div style={styles.calculationNote}>
                                    (לפי 9 שעות ביום, 22 ימי עבודה בחודש)
                                </div>
                            </div>

                            <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: '800', color: '#C53030', lineHeight: 1 }}>
                                ₪<AnimatedNumber value={humanMonthlyCost} />
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#E53E3E', opacity: 0.8, marginBottom: '20px' }}>עלות חודשית קבועה</div>

                            <div style={{ height: '1px', background: '#FED7D7', width: '100%', marginBottom: '20px' }}></div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <FeatureRow icon={Icons.x} text="תשלום על זמן מת ללא שיחות" color="#C53030" />
                                <FeatureRow icon={Icons.x} text={`מוגבל ל-${numAgents} שיחות במקביל בלבד`} color="#C53030" />
                                <FeatureRow icon={Icons.x} text="ימי מחלה, חופשות והפסקות" color="#C53030" />
                            </div>
                        </motion.div>

                        {/* כרטיס AI */}
                        <motion.div
                            style={{ ...styles.card, background: '#F0FFF4', border: '2px solid #48BB78' }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(72, 187, 120, 0.2)' }}
                        >
                            <div style={{ position: 'absolute', top: 15, left: 15, background: '#48BB78', color: 'white', fontSize: '0.8rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
                                הבחירה המומלצת
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#276749', fontWeight: 'bold' }}>
                                    {Icons.robot} סוכן Bot-10
                                </div>
                                {/* --- תוספת הסבר חישוב בוט --- */}
                                <div style={styles.calculationNote}>
                                    (לפי {aiPricePerMinute} ש"ח לדקה, ללא דמי הקמה)
                                </div>
                            </div>

                            <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: '800', color: '#2F855A', lineHeight: 1 }}>
                                ₪<AnimatedNumber value={aiMonthlyCost} />
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#2F855A', opacity: 0.8, marginBottom: '20px' }}>עלות לפי צריכה בפועל</div>

                            <div style={{ height: '1px', background: '#9AE6B4', width: '100%', marginBottom: '20px' }}></div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <FeatureRow icon={Icons.check} text="0 שקלים על זמן המתנה" color="#2F855A" bold />
                                <FeatureRow icon={Icons.check} text="ללא הגבלת שיחות במקביל" color="#2F855A" bold />
                                <FeatureRow icon={Icons.check} text="זמינות 24/7 ללא עלות נוספת" color="#2F855A" bold />
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div style={{textAlign: 'center', marginTop: '30px'}}>
                   <Link to="/" className="footer-link" style={{textDecoration: 'none', fontSize: '0.9rem'}}>חזרה לדף הבית</Link>
                </div>

            </motion.div>
        </div>
    );
};

// --- רכיבי עזר מעוצבים ---

const InputSlider = ({ label, value, setValue, min, max, step = 1, suffix, accentColor }) => (
    <div style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
            <label style={{ color: '#4A5568', fontWeight: '600', fontSize: '1rem' }}>{label}</label>
            <div style={{
                background: 'white', border: `1px solid ${accentColor}`, color: accentColor,
                padding: '2px 10px', borderRadius: '8px', fontWeight: 'bold', minWidth: '80px', textAlign: 'center'
            }}>
                {value} <span style={{ fontSize: '0.8em', opacity: 0.8 }}>{suffix}</span>
            </div>
        </div>
        <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                style={{
                    width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '10px',
                    accentColor: accentColor, outline: 'none', cursor: 'pointer', zIndex: 2
                }}
            />
        </div>
    </div>
);

const FeatureRow = ({ icon, text, color, bold }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#4A5568' }}>
        <div style={{
            background: bold ? '#F0FFF4' : 'transparent',
            borderRadius: '50%', padding: '2px', display: 'flex',
            color: color,
            flexShrink: 0 // מונע מהאייקון להתכווץ במובייל
        }}>
            {icon}
        </div>
        <span style={{ fontSize: '0.95rem', fontWeight: bold ? '600' : '400', color: bold ? '#276749' : 'inherit', lineHeight: '1.4' }}>
            {text}
        </span>
    </div>
);

export default EnterpriseCostCalculator;