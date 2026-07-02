import { useState, useRef, useEffect } from 'react';
import { Phone, Database, CheckCircle, Play, Pause, Mail, MessageSquare, Star, Zap, Users, BarChart3, Clock, Menu, X, ClipboardCheck, DraftingCompass, FlaskConical, Rocket, Sparkles, Activity, Smartphone, Volume2, TrendingUp, DollarSign, ShieldCheck, ArrowLeft, RefreshCw } from 'lucide-react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import AccessibilityButton from './AccessibilityButton';
import CookiePopup from './Cookies';

// Import audio files
import gefenUrl from './gefen_record2.mp3?url';
import law_office from './law_office.mp3?url';
import pizza from './pizza_miami.mp3?url';
import jobRecruit from './Job_Recruit.mp3?url';
import course_agent from './course_agent.mp3?url';
import politic from './politic_survey.mp3?url';
import doritgilad from './dorit_gilad.mp3?url';
import riski from './riski.mp3?url';
//Import Images
import updatedLogo from './updated_logo.png?url';
import power from './power.png';
import how_it from './how_it.png'
import record_image from './recored_image.png'
import other_logo from './other_logo.png'
import qa_logo from './qa.png'
import prices_logo from './prices.png'
import leaveDetailes from './leave_details.png'
import bshvilLogo from './bshvilLogo.png'
import dashboardPreview from './dashboardPreview.png'
import crmIntegrations from './crmIntegrations.png'
import heroBg from './hero_tech_bg.png'
import duritLogo from './dorit_gilad_logo.png'
import gefenLogo from './gefen_logo.png'
import diallogo from './dial_logo.jpeg'
import openailogo from './openai.png'
import migdalLogo from './migdal.png'
import scenarioDiagram from './scenario_1.png'
import scenarioDiagram2 from './scenario_2.png'
import scenarioDiagram3 from './scenario_3.png'
import scenarioDiagram4 from './scenario_4.png'

// Custom styles component
const CustomStyles = () => (
  <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&display=swap');
    
    :root {
      --primary: #1c7895;
      --primary-dark: #0e4f66;
      --accent: #f9bb2b;
      --accent-glow: rgba(249, 187, 43, 0.15);
      --light: #fefef9;
      --bg-deep: #080C16;
      --bg-surface: rgba(12, 18, 36, 0.65);
      --bg-card: rgba(15, 22, 42, 0.55);
      --border-glass: rgba(255, 255, 255, 0.06);
      --border-glass-hover: rgba(249, 187, 43, 0.35);
      --text-secondary: #94a3b8;
      --text-body: #c8d3e6;
      --glow-blue: rgba(28, 120, 149, 0.18);
      --glow-yellow: rgba(249, 187, 43, 0.12);
      
      --emerald: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.15);
      --indigo: #6366f1;
      --indigo-glow: rgba(99, 102, 241, 0.12);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Assistant', sans-serif;
      direction: rtl;
      background: #020408;
      min-height: 100vh;
      overflow-x: hidden;
      color: #fefef9;
      position: relative;
    }

    /* ========================================
       KEYFRAME ANIMATIONS
       ======================================== */

    @keyframes shimmer {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.92); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes waveAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes waveAnimationInner {
      0%, 100% { transform: scaleY(0.5); }
      50% { transform: scaleY(1.5); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes pulse-green {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    @keyframes slideInFromLeft {
      from { opacity: 0; transform: translateX(-80px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInFromRight {
      from { opacity: 0; transform: translateX(80px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes logoSlide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes glowPulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }

    @keyframes borderGlow {
      0%, 100% { border-color: rgba(249, 187, 43, 0.2); }
      50% { border-color: rgba(249, 187, 43, 0.5); }
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* ========================================
       SCROLL-TRIGGERED ANIMATION SYSTEM
       ======================================== */
    .scroll-reveal {
      opacity: 0;
      transform: translateY(50px) rotateX(8deg);
      perspective: 1000px;
      transform-style: preserve-3d;
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .scroll-reveal.visible {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }

    .scroll-reveal-scale {
      opacity: 0;
      transform: scale(0.92) translateZ(-30px) rotateX(6deg);
      perspective: 1000px;
      transform-style: preserve-3d;
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .scroll-reveal-scale.visible {
      opacity: 1;
      transform: scale(1) translateZ(0) rotateX(0deg);
    }

    /* ========================================
       SHIMMER BUTTON
       ======================================== */
    .btn-shimmer {
      background: linear-gradient(110deg, #f9bb2b 8%, #ffe082 18%, #f9bb2b 33%) !important;
      background-size: 200% 100% !important;
      color: #030712 !important;
      border: none !important;
      animation: 3s shimmer linear infinite;
    }

    /* ========================================
       GLASSMORPHISM CARD (PREMIUM)
       ======================================== */
    .glass-card {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-glass);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .glass-card:hover {
      border-color: var(--border-glass-hover);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px var(--accent-glow), inset 0 1px 0 rgba(255, 255, 255, 0.06);
      transform: translateY(-6px) scale(1.02);
    }

    /* ========================================
       NAVBAR (PREMIUM GLASSMORPHISM)
       ======================================== */
    .main-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 16px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      direction: ltr;
      border-bottom: 1px solid transparent;
    }

    .main-header.scrolled {
      background: rgba(8, 12, 22, 0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding: 10px 40px;
    }
    
    .header-logo {
      height: 50px;
      transition: transform 0.3s ease;
    }
    .header-logo:hover {
      transform: scale(1.05);
    }

    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
      direction: rtl;
    }

    .nav-links a {
      color: rgba(254, 254, 249, 0.7);
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      position: relative;
      transition: color 0.3s ease;
      letter-spacing: -0.01em;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(90deg, #f9bb2b, #ffd54f);
      transition: width 0.3s ease;
      border-radius: 2px;
    }

    .nav-links a:hover {
      color: #fefef9;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      color: #fefef9;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* ========================================
       HERO SECTION (PREMIUM + GLOWS)
       ======================================== */
    .hero-section {
      color: #fefef9;
      padding: 160px 20px 100px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    /* Ambient radial glow behind hero */
    .hero-section::before {
      content: '';
      position: absolute;
      top: -20%;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 900px;
      background: radial-gradient(circle, rgba(28, 120, 149, 0.2) 0%, rgba(249, 187, 43, 0.06) 40%, transparent 70%);
      z-index: 0;
      pointer-events: none;
      animation: glowPulse 6s ease-in-out infinite;
    }

    /* Second smaller glow */
    .hero-section::after {
      content: '';
      position: absolute;
      bottom: -10%;
      right: 10%;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(249, 187, 43, 0.1) 0%, transparent 60%);
      z-index: 0;
      pointer-events: none;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 60px;
      align-items: center;
      text-align: right;
    }

    .hero-text-content {
      opacity: 0;
      animation: slideInFromRight 1s ease-out 0.3s forwards;
    }

    /* Hero Pill Badge */
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px;
      background: rgba(249, 187, 43, 0.1);
      border: 1px solid rgba(249, 187, 43, 0.25);
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #f9bb2b;
      margin-bottom: 24px;
      backdrop-filter: blur(10px);
      animation: borderGlow 3s ease-in-out infinite;
    }

    .hero-mascot {
      opacity: 0;
      animation: slideInFromLeft 1s ease-out 0.5s forwards;
      justify-self: center;
      position: relative;
    }
    
    .hero-mascot::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 350px;
        background: radial-gradient(circle, rgba(249, 187, 43, 0.3) 0%, rgba(28, 120, 149, 0.1) 50%, transparent 70%);
        z-index: -1;
        animation: pulse 4s infinite ease-in-out;
    }

    .mascot-image {
      max-width: 320px;
      height: auto;
      animation: float 5s ease-in-out infinite;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
    }

    .mascot-image:hover {
      animation: float 3s ease-in-out infinite, pulse 2s ease-in-out infinite;
    }

    .logo-image {
      max-height: 180px;
      margin-bottom: 4px;
      animation-delay: 0.2s !important;
    }
    
    .main-title {
      font-size: clamp(3rem, 8vw, 4.5rem);
      font-weight: 800;
      margin-bottom: 24px;
      background: linear-gradient(135deg, #fefef9 30%, #f9bb2b 100%); 
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    
    .subtitle {
      font-size: clamp(1.15rem, 3.5vw, 1.35rem);
      margin-bottom: 35px;
      max-width: 700px;
      line-height: 1.7;
      color: var(--text-body);
    }

    .hero-buttons-container {
      display: flex;
      gap: 16px;
      margin-top: 40px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    @media (min-width: 768px) {
      .hero-buttons-container {
        flex-direction: row; 
        justify-content: flex-start;
      }
    }
    
    /* ========================================
       CTA BUTTONS (PREMIUM)
       ======================================== */
    .cta-button, .cta-button-secondary {
      padding: 14px 28px;
      border-radius: 14px;
      font-weight: 700;
      font-size: 1.05rem;
      border: none;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    
    .cta-button {
      background: rgba(9, 14, 24, 0.85);
      color: #fefef9;
      border: 1.5px solid rgba(28, 120, 149, 0.6);
      box-shadow: 0 4px 15px rgba(28, 120, 149, 0.25), 0 0 20px rgba(99, 102, 241, 0.12);
    }

    .cta-button:hover {
      background: rgba(28, 120, 149, 0.15);
      border-color: #f9bb2b;
      box-shadow: 0 10px 30px rgba(249, 187, 43, 0.3), 0 0 25px rgba(28, 120, 149, 0.25);
      transform: translateY(-3px) scale(1.02);
    }

    .cta-button-secondary {
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(10px);
      color: #fefef9;
      border: 1px solid rgba(249, 187, 43, 0.3);
    }

    .cta-button-secondary:hover {
      background: rgba(249, 187, 43, 0.15);
      border-color: #f9bb2b;
      transform: translateY(-3px);
      box-shadow: 0 10px 30px var(--accent-glow);
    }

    /* ========================================
       SECTIONS
       ======================================== */
    .section {
      padding: 120px 20px;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
    }

    .section-full-width {
      padding: 120px 0;
      width: 100%;
      position: relative;
    }

    .section-full-width .section-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Section glow dividers */
    .section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(28, 120, 149, 0.3), rgba(249, 187, 43, 0.2), rgba(28, 120, 149, 0.3), transparent);
    }
    
    .section-title {
      font-size: clamp(2.2rem, 5vw, 3.2rem);
      font-weight: 800;
      text-align: center;
      margin-bottom: 20px;
      color: #fefef9;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.15rem;
      color: var(--text-body);
      max-width: 650px;
      margin: 0 auto 50px;
      line-height: 1.6;
    }
    
    /* ========================================
       FEATURE CARDS
       ======================================== */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 24px;
      margin-bottom: 60px;
    }
    
    .feature-card {
      padding: 40px 32px;
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .feature-card:hover {
      transform: translateY(-6px) scale(1.02); 
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px var(--accent-glow);
      border-color: var(--border-glass-hover);
    }
    
    .feature-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #f9bb2b, #ffd54f);
      color: var(--bg-deep);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 20px rgba(249, 187, 43, 0.25);
    }

    .feature-card:hover .feature-icon {
      transform: rotate(-10deg) scale(1.1); 
    }
    
    .service-icon-hover {
      transition: transform 0.3s;
    }
    .service-icon-hover:hover {
      transform: rotate(-15deg) scale(1.1);
    }

    .feature-title {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 14px;
      color: #fefef9;
    }
    
    .feature-description {
      color: var(--text-body);
      line-height: 1.7;
      font-size: 1.05rem;
    }

    /* ========================================
       WHATSAPP FLOAT
       ======================================== */
    .whatsapp-float {
      bottom: 25px;
      right: 25px;
      background-color: #25d366;
      border-radius: 50%;
      padding: 14px;
      z-index: 9999;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      transition: transform 0.3s ease;
      animation: whatsappPulse 2s infinite;
    }
    @keyframes whatsappPulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
      70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    .whatsapp-float:hover {
      transform: scale(1.1) rotate(10deg);
    }

    .whatsapp-icon {
      width: 35px;
      height: 35px;
      display: block;
    }

    /* ========================================
       PRICING CARDS (PREMIUM)
       ======================================== */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 24px;
      margin-bottom: 60px;
      align-items: stretch;
    }

    .leave-details-img {
      width: 300px;
      height: 300px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      .leave-details-img {
        width: 90vw;
        max-width: 220px;
        height: auto;
      }
    }
    
    .pricing-card {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 24px;
      padding: 48px 40px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid var(--border-glass);
      text-align: right;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }
    
    .pricing-card.featured {
      border: 2px solid rgba(249, 187, 43, 0.4);
      transform: scale(1.03); 
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px var(--accent-glow);
      z-index: 10;
      background: linear-gradient(160deg, rgba(15, 22, 42, 0.8), rgba(249, 187, 43, 0.03));
    }
    
    .pricing-card.featured::before {
      content: 'הכי משתלם 🏆';
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #f9bb2b, #ffd54f);
      color: var(--bg-deep);
      padding: 8px 24px;
      border-radius: 50px;
      font-size: 0.95rem;
      font-weight: 800;
      box-shadow: 0 8px 20px rgba(249, 187, 43, 0.3);
      white-space: nowrap;
    }
    .pricing-card.featured:hover { 
      transform: translateY(-5px) scale(1.05); 
    }
    
    .pricing-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4), 0 0 30px var(--accent-glow);
      border-color: var(--border-glass-hover);
    }
    
    .pricing-title {
      font-size: 1.7rem;
      font-weight: 800;
      margin-bottom: 20px;
      color: #f9bb2b;
    }
    
    .pricing-price {
      font-size: 3.2rem;
      font-weight: 900;
      color: #fefef9;
      margin-bottom: 30px;
      position: relative;
      line-height: 1;
    }
    
    .pricing-features, .pricing-sub-features {
      list-style: none;
      padding: 0;
      margin-bottom: 25px;
    }
    
    .pricing-features li, .pricing-sub-features li {
      padding: 12px 0;
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--text-body);
      font-size: 1.02rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .pricing-features li:last-child { border-bottom: none; }
    
    .pricing-section-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #f9bb2b;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    .pricing-suitable-for {
      color: var(--text-body);
      margin-bottom: 20px;
      font-size: 1rem;
      line-height: 1.5;
      background: rgba(255, 255, 255, 0.03);
      padding: 15px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .pricing-card .cta-button {
        margin-top: auto;
        padding: 16px 28px;
        font-size: 1.15rem;
        justify-content: center;
        width: 100%;
        border-radius: 14px;
    }

    /* ========================================
       RECORDING CARDS
       ======================================== */
    .recordings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 60px;
    }

    .recording-card {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid var(--border-glass);
    }
    
    .recording-card:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-glow);
      border-color: var(--border-glass-hover);
    }
    
    .recording-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: #f9bb2b;
    }
    
    .recording-description {
      color: var(--text-body);
      font-size: 0.95rem;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .audio-player-container {
      display: flex;
      align-items: center;
      gap: 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 14px;
      padding: 16px;
      margin-top: 20px;
    }
    
    .play-button {
      background: linear-gradient(135deg, #f9bb2b, #ffd54f);
      border: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      color: var(--bg-deep);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 4px 15px rgba(249, 187, 43, 0.3);
    }
    
    .play-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(249, 187, 43, 0.45);
    }
    
    .audio-controls {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .audio-progress-container {
      position: relative;
      height: 5px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      cursor: pointer;
      overflow: hidden;
    }
    
    .audio-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #1c7895, #2196f3);
      border-radius: 10px;
      transition: width 0.1s linear;
    }
    
    .audio-time-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-weight: 500;
    }
    
    .audio-wave-visualization {
      display: flex;
      align-items: center;
      gap: 1px;
      height: 25px;
      flex: 1;
    }
    
    .wave-bar {
      width: 4px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    
    .wave-bar.active {
      background: #f9bb2b;
    }
    
    /* ========================================
       CONTACT FORM (DARK INPUTS)
       ======================================== */
    .contact-form-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 60px;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .contact-form {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-glass);
      border-radius: 24px;
      padding: 50px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
    }
    
    .form-group {
      margin-bottom: 22px;
    }
    
    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 700;
      color: rgba(254, 254, 249, 0.85);
      font-size: 0.95rem;
    }
    
    .form-input {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: 'Assistant', sans-serif;
      background: rgba(255, 255, 255, 0.04);
      color: #fefef9;
    }

    .form-input::placeholder {
      color: rgba(255, 255, 255, 0.25);
    }
    
    .form-input:focus {
      border-color: rgba(249, 187, 43, 0.5);
      background: rgba(255, 255, 255, 0.06);
      outline: none;
      box-shadow: 0 0 0 3px rgba(249, 187, 43, 0.1), 0 0 20px rgba(249, 187, 43, 0.08);
    }
    
    .form-textarea {
      min-height: 120px;
      resize: vertical;
    }
    
    .submit-button {
      padding: 14px 28px;
      border-radius: 12px;
      background: rgba(9, 14, 24, 0.85);
      border: 1.5px solid rgba(249, 187, 43, 0.6);
      color: #fefef9;
      font-size: 1.1rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      width: 100%;
      box-shadow: 0 4px 15px rgba(249, 187, 43, 0.15);
    }
    
    .submit-button:hover {
      background: rgba(249, 187, 43, 0.15);
      border-color: #f9bb2b;
      transform: translateY(-3px); 
      box-shadow: 0 12px 30px rgba(249, 187, 43, 0.4);
    }
    
    /* ========================================
       KEYWORDS SECTION
       ======================================== */
    .keywords-section {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 24px;
      padding: 60px;
      text-align: center;
      margin-bottom: 60px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border-glass);
    }
    
    .keywords-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-top: 35px;
    }
    
    .keyword-tag {
      background: rgba(255, 255, 255, 0.06);
      color: var(--text-body);
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 0.95rem;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .keyword-tag:hover {
      transform: translateY(-3px); 
      background: rgba(249, 187, 43, 0.1);
      border-color: rgba(249, 187, 43, 0.3);
      color: #f9bb2b;
      box-shadow: 0 5px 20px rgba(249, 187, 43, 0.1);
    }

    .footer-logo {
      height: 70px;
      margin-bottom: 25px;
    }

    /* ========================================
       WHO IS IT FOR / HOW IT WORKS
       ======================================== */
    .who-is-it-for-section {
        background-color: transparent;
        text-align: center;
    }

    .who-is-it-for-section .content-wrapper {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    .who-is-it-for-section .section-icon {
        width: 80px;
        height: 80px;
        color: #f9bb2b;
    }

    .who-is-it-for-section .description {
        font-size: 1.35rem;
        line-height: 1.7;
        color: var(--text-body);
        font-weight: 500;
    }

    .how-it-works-section {
        background-color: transparent;
    }
    
    .how-it-works-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 24px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .how-it-works-card {
        background: var(--bg-card);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        padding: 45px 35px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid var(--border-glass);
    }

    .how-it-works-card:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-glow);
        border-color: var(--border-glass-hover);
    }
    
    .how-it-works-icon-wrapper {
        position: relative;
        display: inline-block;
        margin-bottom: 25px;
    }

    .how-it-works-icon {
        width: 72px;
        height: 72px;
        padding: 18px;
        background: linear-gradient(135deg, #f9bb2b, #ffd54f);
        color: var(--bg-deep);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 25px rgba(249, 187, 43, 0.25);
    }

    .how-it-works-step-number {
        position: absolute;
        top: -5px;
        right: -5px;
        background: linear-gradient(135deg, #1c7895, #2196f3);
        color: #fefef9;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 1rem;
        border: 2px solid var(--bg-deep);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .how-it-works-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fefef9;
        margin-bottom: 15px;
    }

    .how-it-works-description {
        font-size: 1.05rem;
        color: var(--text-body);
        line-height: 1.7;
    }

    /* ========================================
       FAQ SECTION
       ======================================== */
    .faq-section {
      background-color: transparent;
    }
    .faq-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .highlight {
      font-weight: 800;
      color: #f9bb2b;
    }

    .MuiAccordion-root {
      margin-bottom: 12px !important;
      border-radius: 16px !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
      direction: rtl;
      background: var(--bg-card) !important;
      backdrop-filter: blur(16px) !important;
      border: 1px solid var(--border-glass) !important;
      transition: all 0.3s ease !important;
    }
    .MuiAccordion-root:hover {
      border-color: rgba(249, 187, 43, 0.2) !important;
    }
    .MuiAccordion-root:before {
        display: none !important;
    }

    .MuiAccordionSummary-root {
      padding: 16px 24px !important;
      background-color: transparent !important;
      border-radius: 16px !important;
    }
    
    .MuiAccordion-root.Mui-expanded .MuiAccordionSummary-root {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .MuiAccordionSummary-content {
      font-family: 'Assistant', sans-serif !important;
      font-size: 1.15rem !important;
      font-weight: 700 !important;
      color: #fefef9 !important;
    }

    .MuiAccordionDetails-root {
      padding: 24px !important;
      font-family: 'Assistant', sans-serif !important;
      font-size: 1.05rem !important;
      line-height: 1.7 !important;
      color: var(--text-body) !important;
      opacity: 1;
      text-align: right;
    }

    .MuiSvgIcon-root {
      color: #f9bb2b !important;
      font-size: 1.8rem !important;
    }

    /* ========================================
       FOOTER (DEEP DARK)
       ======================================== */
    .footer {
        background: rgba(6, 9, 18, 0.95);
        color: #fefef9;
        padding: 80px 20px 40px;
        text-align: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .footer .about-content {
      max-width: 1000px;
      margin: 0 auto 60px;
      text-align: center;
    }
    
    .footer .section-title {
        color: #fefef9;
    }

    .footer .about-story {
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-body);
      margin-bottom: 40px;
    }
    
    .footer .founders-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin: 30px 0;
    }

    .footer .founder-card {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      border-radius: 20px;
      padding: 30px;
      text-align: right;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 1;
    }

    .footer .founder-card:hover {
      transform: translateY(-5px);
      border-color: var(--border-glass-hover);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 20px var(--accent-glow);
    }

    .footer .founder-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f9bb2b;
      margin-bottom: 10px;
    }

    .footer .founder-description {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--text-body);
    }

    .footer .mission-text {
      font-size: 1.3rem;
      font-weight: 600;
      color: #fefef9;
      line-height: 1.7;
      margin: 50px 0;
      padding: 40px;
      background: linear-gradient(to left, rgba(28, 120, 149, 0.2), rgba(249, 187, 43, 0.04));
      border-radius: 20px;
      border-right: 4px solid #f9bb2b;
      opacity: 1;
      border: 1px solid var(--border-glass);
      border-right: 4px solid #f9bb2b;
    }

    /* ========================================
       CLIENT LOGO SLIDER
       ======================================== */
    .clients-section {
      padding: 100px 20px;
      overflow: hidden;
    }

    .logo-slider-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: 40px 0;
      display: flex;
      direction: ltr;
    }

    .logo-slider-container::before,
    .logo-slider-container::after {
      content: '';
      position: absolute;
      top: 0;
      width: 150px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    .logo-slider-container::before {
      left: 0;
      background: linear-gradient(to right, var(--bg-deep), transparent);
    }

    .logo-slider-container::after {
      right: 0;
      background: linear-gradient(to left, var(--bg-deep), transparent);
    }

    .logo-slider-track {
      display: flex;
      flex-shrink: 0;
      min-width: 100%;
      animation: logoSlide 40s linear infinite;
      direction: ltr; 
    }

    .logo-item {
      flex-shrink: 0;
      height: 120px;
      margin: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-card);
      border-radius: 18px;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
      padding: 20px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      min-width: 240px;
      border: 1px solid var(--border-glass);
      direction: rtl;
    }
    
    @media (max-width: 768px) {
      .logo-slider-container {
        padding: 10px 0;
      }
      .logo-slider-container::before,
      .logo-slider-container::after {
        display: none;
      }
      .logo-slider-track {
        width: 100%;
        animation: none;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        padding: 0 10px;
      }
      .logo-item {
        margin: 0 !important;
        min-width: 140px;
        width: calc(50% - 20px);
        height: auto;
        min-height: 140px;
        padding: 15px 10px;
        flex-direction: column;
        justify-content: space-between;
      }
      .logo-item > div {
        width: 100% !important;
        height: 80px !important;
        margin-bottom: 10px !important;
      }
      .logo-item-text {
        font-size: 0.9rem !important;
        white-space: normal !important;
        line-height: 1.2;
      }
      .logo-item:nth-child(n+6) {
        display: none;
      }
    }

    .logo-item:hover {
      transform: translateY(-5px) scale(1.03);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 20px var(--accent-glow);
      border-color: var(--border-glass-hover);
    }

    .logo-item-text {
      font-size: 1.2rem;
      font-weight: 700;
      color: rgba(254, 254, 249, 0.8);
      text-align: center;
      white-space: nowrap;
      transition: color 0.3s;
    }
    .logo-item:hover .logo-item-text {
        color: #f9bb2b;
    }
    
    /* ========================================
       COMPARISON TABLE
       ======================================== */
    .comparison-section { padding: 80px 20px; }
    .comparison-table-container { 
      overflow-x: auto; max-width: 900px; margin: 0 auto; 
      border-radius: 20px; 
      box-shadow: 0 10px 40px rgba(0,0,0,0.3); 
      background: var(--bg-card); 
      backdrop-filter: blur(16px); 
      border: 1px solid var(--border-glass); 
    }
    .comparison-table { width: 100%; border-collapse: collapse; text-align: right; }
    .comparison-table th, .comparison-table td { padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 1.1rem; }
    .comparison-table th { background: rgba(255,255,255,0.03); color: #fefef9; font-weight: 700; }
    .comparison-table tr:last-child td { border-bottom: none; }
    .comparison-table .bot-cell { color: #f9bb2b; font-weight: 700; background: rgba(249, 187, 43, 0.06); }
    .comparison-table .human-cell { color: var(--text-body); }
    
    /* Integrations */
    .integrations-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; max-width: 1000px; margin: 40px auto; align-items: center; justify-items: center; }
    .integration-item { 
      font-size: 1.1rem; font-weight: 700; color: var(--text-body); 
      padding: 15px 30px; border: 1px solid var(--border-glass); 
      border-radius: 14px; transition: all 0.3s; 
      background: var(--bg-card); 
    }
    .integration-item:hover { 
      border-color: var(--border-glass-hover); 
      color: #f9bb2b; 
      transform: translateY(-5px); 
      box-shadow: 0 10px 25px rgba(0,0,0,0.3), 0 0 15px var(--accent-glow); 
    }

    /* Testimonials */
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 50px; }
    .testimonial-card { 
      background: var(--bg-card); backdrop-filter: blur(16px); 
      padding: 40px; border-radius: 20px; 
      box-shadow: 0 10px 30px rgba(0,0,0,0.3); 
      border: 1px solid var(--border-glass); text-align: center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .testimonial-card:hover {
      transform: translateY(-5px) scale(1.01);
      border-color: var(--border-glass-hover);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow);
    }
    .testimonial-text { font-size: 1.1rem; line-height: 1.6; color: var(--text-body); margin-bottom: 20px; font-style: italic; }
    .testimonial-author { font-weight: 700; color: #f9bb2b; }
    .testimonial-role { font-size: 0.9rem; color: var(--text-secondary); }

    .description {
      color: var(--text-body);
      font-size: 1.2rem;
      line-height: 1.6;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    .section-icon {
      color: #f9bb2b;
      display: block;
      margin: 0 auto 20px;
    }
    .highlight {
      color: #f9bb2b;
      font-weight: 700;
      text-shadow: 0 0 15px rgba(249, 187, 43, 0.25);
    }

    /* ========================================
       MOBILE NAV / RESPONSIVE
       ======================================== */
    @media (max-width: 992px) {
        .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 280px;
            background: rgba(8, 12, 22, 0.97);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.77,0,0.175,1);
            padding-top: 60px;
            box-shadow: -10px 0 40px rgba(0,0,0,0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .nav-links.open {
            transform: translateX(0);
        }
        
        .nav-links li {
            width: 100%;
            text-align: center;
            padding: 18px 0;
        }

        .nav-links.open a {
            color: rgba(254, 254, 249, 0.85);
            font-size: 1.1rem;
        }

        .menu-toggle {
            display: block;
            z-index: 1001;
        }
    }

    @media (max-width: 768px) {
      .main-header {
        padding: 10px 15px;
      }
      
      .nav-links {
        gap: 1px;
      }
    
      .hero-section {
        padding: 120px 20px 60px;
      }

      .hero-section::before {
        width: 400px;
        height: 400px;
      }

      .how-it-works-grid {
          grid-template-columns: 1fr;
      }
      
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 30px;
      }

      .hero-text-content {
        order: 2;
      }

      .hero-mascot {
        order: 1;
      }
      
      .hero-mascot::before {
        width: 200px;
        height: 200px;
      }

      .mascot-image {
        max-width: 240px;
      }

      .hero-buttons-container {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
      }
      .cta-button, .cta-button-secondary {
          width: 100%;
          justify-content: center;
      }
      
      .logo-image {
        max-height: 90px;
      }
      
      .section {
        padding: 70px 20px;
      }

      .section-full-width {
        padding: 70px 0;
      }

      .section-full-width .section-content {
        max-width: none;
        padding: 0 20px;
      }
      
      .pricing-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .pricing-card {
        padding: 30px;
      }
      
      .pricing-card.featured {
        transform: none; 
      }
      .pricing-card.featured:hover {
        transform: translateY(-5px) scale(1.02); 
      }
      
      .contact-form-container {
        grid-template-columns: 1fr !important;
        text-align: center;
        gap: 30px;
      }
      
      .contact-form-container img {
        order: 1;
        max-width: 200px !important;
        margin: 0 auto 30px;
      }
      
      .contact-form {
        order: 2;
        padding: 30px;
      }

    }

    /* ========================================
       LIVE STATUS TICKER
       ======================================== */
    .live-status-ticker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 18px;
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #34d399;
      margin-bottom: 20px;
      backdrop-filter: blur(10px);
    }
    
    .live-pulse-dot {
      width: 8px;
      height: 8px;
      background-color: var(--emerald);
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      animation: pulse-green 2s infinite;
    }

    /* ========================================
       INTERACTIVE PHONE SIMULATOR
       ======================================== */
    .simulator-section {
      position: relative;
      overflow: hidden;
      padding: 100px 20px;
    }
    
    .simulator-section::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 10%;
      width: 450px;
      height: 450px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%);
      z-index: 0;
      pointer-events: none;
    }

    .simulator-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .simulator-info {
      text-align: right;
    }

    .simulator-info .highlight-box {
      background: rgba(99, 102, 241, 0.06);
      border-right: 4px solid var(--indigo);
      padding: 20px;
      border-radius: 0 12px 12px 0;
      margin: 25px 0;
      color: var(--text-body);
      font-size: 1.05rem;
      line-height: 1.6;
    }

    .scenario-buttons {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 30px;
    }

    .scenario-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      color: var(--text-body);
      padding: 14px 20px;
      border-radius: 14px;
      cursor: pointer;
      font-weight: 700;
      font-size: 1.05rem;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      direction: rtl;
    }

    .scenario-btn:hover, .scenario-btn.active {
      background: rgba(99, 102, 241, 0.08);
      border-color: rgba(99, 102, 241, 0.5);
      color: #fefef9;
      transform: translateX(-4px);
    }
    
    .scenario-btn.active {
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
      border-color: var(--indigo);
    }

    .scenario-icon-tag {
      background: rgba(255, 255, 255, 0.05);
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f9bb2b;
      margin-left: 12px;
    }

    .scenario-btn.active .scenario-icon-tag {
      background: rgba(99, 102, 241, 0.2);
      color: #fff;
    }

    /* PHONE FRAME MOCKUP */
    .phone-mockup-wrapper {
      justify-self: center;
      width: 100%;
      max-width: 340px;
    }

    .phone-mockup {
      background: #090e18;
      border: 10px solid #1e293b;
      border-radius: 45px;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.05);
      height: 600px;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .phone-notch {
      background: #1e293b;
      height: 25px;
      width: 130px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-left-radius: 18px;
      border-bottom-right-radius: 18px;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .phone-camera {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #020617;
      margin-right: 15px;
    }
    
    .phone-speaker {
      width: 40px;
      height: 4px;
      border-radius: 2px;
      background: #334155;
    }

    .phone-screen {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      background: linear-gradient(180deg, #090e1b 0%, #030712 100%);
      padding-top: 25px;
    }

    .phone-header {
      padding: 16px 20px;
      background: rgba(15, 23, 42, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;
      direction: rtl;
    }

    .phone-header-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .phone-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1c7895, #f9bb2b);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #fff;
      font-size: 0.9rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .phone-status {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
    }
    
    .phone-status-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #fefef9;
    }

    .phone-status-subtitle {
      font-size: 0.75rem;
      color: var(--emerald);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .phone-chat-body {
      flex: 1;
      padding: 20px 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      scroll-behavior: smooth;
    }
    
    /* Hide scrollbar */
    .phone-chat-body::-webkit-scrollbar {
      display: none;
    }

    .msg-bubble {
      max-width: 80%;
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 0.92rem;
      line-height: 1.45;
      position: relative;
      animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .msg-bubble.bot {
      background: rgba(28, 120, 149, 0.2);
      border: 1px solid rgba(28, 120, 149, 0.3);
      color: #fefef9;
      align-self: flex-start;
      border-top-left-radius: 4px;
      text-align: right;
    }

    .msg-bubble.user {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #e2e8f0;
      align-self: flex-end;
      border-top-right-radius: 4px;
      text-align: right;
    }

    .phone-footer {
      padding: 16px 20px;
      background: rgba(15, 23, 42, 0.9);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .phone-action-btn {
      width: 100%;
      background: linear-gradient(135deg, #1c7895, #0e4f66);
      border: none;
      color: #fff;
      padding: 12px 20px;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.3s;
    }

    .phone-action-btn:hover {
      transform: scale(1.02);
      box-shadow: 0 0 15px rgba(28, 120, 149, 0.4);
    }
    
    .phone-action-btn.active {
      background: linear-gradient(135deg, #ef4444, #b91c1c);
    }

    .phone-wave-visualization {
      display: flex;
      align-items: center;
      gap: 3px;
      height: 30px;
      justify-content: center;
      margin-top: 5px;
    }

    .phone-wave-bar {
      width: 3px;
      height: 6px;
      background: #f9bb2b;
      border-radius: 3px;
      transition: height 0.15s ease;
    }

    .phone-wave-bar.active {
      animation: phoneWave 0.6s ease-in-out infinite alternate;
    }
    
    @keyframes phoneWave {
      0% { height: 6px; }
      100% { height: 28px; }
    }

    /* ========================================
       INLINE ROI CALCULATOR
       ======================================== */
    .roi-section {
      padding: 100px 20px;
      position: relative;
    }
    
    .roi-section::before {
      content: '';
      position: absolute;
      top: 20%;
      right: 5%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
      z-index: 0;
      pointer-events: none;
    }

    .roi-card-widget {
      max-width: 1050px;
      margin: 0 auto;
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 28px;
      border: 1px solid var(--border-glass);
      padding: 40px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 50px;
      position: relative;
      z-index: 1;
    }

    .roi-inputs {
      display: flex;
      flex-direction: column;
      gap: 30px;
      text-align: right;
    }

    .roi-input-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .roi-label-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .roi-slider-val {
      color: #f9bb2b;
      font-size: 1.2rem;
      background: rgba(249, 187, 43, 0.1);
      padding: 4px 14px;
      border-radius: 8px;
      border: 1px solid rgba(249, 187, 43, 0.2);
    }

    .roi-range-slider {
      -webkit-appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      outline: none;
      transition: background 0.3s;
    }

    .roi-range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #f9bb2b;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(249, 187, 43, 0.5);
      transition: transform 0.2s;
    }

    .roi-range-slider::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }
    
    .roi-range-slider::-moz-range-thumb {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #f9bb2b;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(249, 187, 43, 0.5);
      transition: transform 0.2s;
      border: none;
    }

    .roi-results {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 25px;
    }

    .roi-result-metric {
      text-align: center;
      padding: 15px 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .roi-result-metric:last-child {
      border-bottom: none;
    }

    .roi-result-title {
      font-size: 1rem;
      color: var(--text-secondary);
      margin-bottom: 8px;
      font-weight: 600;
    }

    .roi-result-num {
      font-size: 2.8rem;
      font-weight: 900;
      color: #fefef9;
      line-height: 1;
    }

    .roi-result-num.highlight-green {
      color: var(--emerald);
      text-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
    }

    /* RESPONSIVE DESIGN FOR WIDGETS */
    @media (max-width: 900px) {
      .simulator-container {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .simulator-info {
        order: 2;
      }
      
      .phone-mockup-wrapper {
        order: 1;
      }

      .roi-card-widget {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 25px;
      }
    }
    
    @keyframes logoSlide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    /* ========================================
       AMBIENT GLOWING BACKGROUND (PREMIUM)
       ======================================== */
    .ambient-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      overflow: hidden;
      background: linear-gradient(180deg, #020408 0%, #030818 40%, #061130 80%, #0a1945 100%);
      pointer-events: none;
    }

    .bg-stars {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
      background-size: 550px 550px, 350px 350px, 250px 250px;
      background-position: 0 0, 40px 60px, 130px 270px;
      opacity: 0.22;
      mix-blend-mode: screen;
    }

    .bg-ray-left {
      position: absolute;
      bottom: 0;
      left: -5%;
      width: 45%;
      height: 100%;
      background: linear-gradient(90deg, rgba(249, 187, 43, 0.16) 0%, rgba(249, 187, 43, 0.05) 20%, transparent 70%);
      transform-origin: bottom left;
      transform: skewX(-12deg);
      filter: blur(50px);
    }

    .bg-ray-right {
      position: absolute;
      bottom: 0;
      right: -5%;
      width: 45%;
      height: 100%;
      background: linear-gradient(270deg, rgba(28, 120, 149, 0.2) 0%, rgba(28, 120, 149, 0.06) 20%, transparent 70%);
      transform-origin: bottom right;
      transform: skewX(12deg);
      filter: blur(50px);
    }

    .bg-blob-1 {
      position: absolute;
      bottom: -15%;
      left: -10%;
      width: 60%;
      height: 60%;
      background: radial-gradient(circle, rgba(249, 187, 43, 0.45) 0%, rgba(244, 63, 94, 0.1) 50%, transparent 80%);
      filter: blur(100px);
      animation: float-blob-1 22s ease-in-out infinite;
    }

    .bg-blob-2 {
      position: absolute;
      bottom: -15%;
      right: -10%;
      width: 60%;
      height: 60%;
      background: radial-gradient(circle, rgba(28, 120, 149, 0.48) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 80%);
      filter: blur(100px);
      animation: float-blob-2 26s ease-in-out infinite;
    }

    .bg-blob-3 {
      position: absolute;
      top: -10%;
      left: 25%;
      width: 50%;
      height: 50%;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(28, 120, 149, 0.08) 50%, transparent 80%);
      filter: blur(90px);
      animation: float-blob-1 30s ease-in-out infinite alternate;
    }

    .bg-horizon-glow {
      position: absolute;
      bottom: -120px;
      left: 0;
      width: 100%;
      height: 280px;
      background: radial-gradient(ellipse at 50% 100%, rgba(28, 120, 149, 0.5) 0%, rgba(249, 187, 43, 0.28) 40%, transparent 75%);
      filter: blur(35px);
    }

    @keyframes float-blob-1 {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(40px, -60px) scale(1.1); }
      66% { transform: translate(-30px, 30px) scale(0.95); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    @keyframes float-blob-2 {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(-50px, 50px) scale(1.12); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    /* ========================================
       3D TRANSFORMS & FLOATING ANIMATIONS
       ======================================== */
    .feature-card, .pricing-card, .recording-card, .how-it-works-card, .testimonial-card, .founder-card, .roi-card-widget, .diagram-container-3d {
      perspective: 1200px;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease, border-color 0.4s ease !important;
    }

    .feature-card:active, .pricing-card:active, .recording-card:active, .how-it-works-card:active, .testimonial-card:active, .founder-card:active, .roi-card-widget:active, .diagram-container-3d:active {
      transform: scale(0.97) rotateX(2deg) rotateY(-2deg) translateZ(2px) !important;
      transition: transform 0.15s ease !important;
    }

    .feature-card:hover, .recording-card:hover, .how-it-works-card:hover, .testimonial-card:hover, .founder-card:hover {
      transform: translateY(-8px) rotateX(5deg) rotateY(-4deg) translateZ(10px) !important;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(28, 120, 149, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
    }

    .pricing-card:hover {
      transform: translateY(-12px) rotateX(4deg) rotateY(-3deg) translateZ(12px) scale(1.02) !important;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(249, 187, 43, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
    }

    .roi-card-widget:hover {
      transform: translateY(-6px) rotateX(2deg) rotateY(-2deg) translateZ(8px) !important;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06) !important;
    }

    .diagram-container-3d:hover {
      transform: translateY(-5px) rotateX(3deg) rotateY(-2deg) scale(1.01) !important;
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(28, 120, 149, 0.3) !important;
    }

    .hero-mascot {
      perspective: 1000px;
      transform-style: preserve-3d;
    }

    .mascot-image {
      animation: float3D 6s ease-in-out infinite;
      transform-style: preserve-3d;
    }

    .phone-mockup {
      perspective: 1200px;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      animation: float3DPhone 8s ease-in-out infinite;
    }
    
    .phone-mockup:hover {
      transform: rotateX(6deg) rotateY(12deg) rotateZ(-1deg) scale(1.03) !important;
      animation-play-state: paused;
    }

    @keyframes float3D {
      0% {
        transform: translateY(0px) rotateX(0deg) rotateY(0deg);
      }
      25% {
        transform: translateY(-6px) rotateX(2deg) rotateY(-2deg);
      }
      50% {
        transform: translateY(-12px) rotateX(-1deg) rotateY(3deg);
      }
      75% {
        transform: translateY(-6px) rotateX(1deg) rotateY(-1deg);
      }
      100% {
        transform: translateY(0px) rotateX(0deg) rotateY(0deg);
      }
    }

    @keyframes float3DPhone {
      0% {
        transform: translateY(0px) rotateX(2deg) rotateY(5deg);
      }
      50% {
        transform: translateY(-10px) rotateX(-2deg) rotateY(8deg);
      }
      100% {
        transform: translateY(0px) rotateX(2deg) rotateY(5deg);
      }
    }
  `}</style>
);

// Enhanced Audio player component without volume control
const AudioPlayer = ({ title, description, audioSrc, style }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  const waveBars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    height: Math.random() * 20 + 5
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    const newTime = clickRatio * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  useEffect(() => {
    document.title =
      "Bot 10 - סוכן קולי AI בעברית | בוט טלפוני למכירות, שירות וסינון לידים 24/7";
  }, []);
  return (
    <div className="recording-card" style={style}>
      <h3 className="recording-title">{title}</h3>
      <p className="recording-description">{description}</p>

      <div className="audio-player-container">
        <button className="play-button" onClick={togglePlay} disabled={isLoading}>
          {isLoading ? (
            <div style={{ width: '20px', height: '20px', border: '2px solid #1c7895', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          ) : isPlaying ? (
            <Pause size={22} />
          ) : (
            <Play size={22} style={{ marginLeft: '4px' }} />
          )}
        </button>

        <div className="audio-controls">
          <div className="audio-wave-visualization">
            {waveBars.map((bar, index) => {
              const isActive = isPlaying && (index / waveBars.length) * 100 < progressPercentage;
              return (
                <div
                  key={bar.id}
                  className={`wave-bar ${isActive ? 'active' : ''}`}
                  style={{
                    height: `${bar.height}px`,
                    animation: isPlaying ? `waveAnimationInner ${Math.random() * 2 + 1}s ease-in-out infinite alternate` : 'none'
                  }}
                />
              );
            })}
          </div>

          <div className="audio-progress-container" onClick={handleProgressClick}>
            <div
              className="audio-progress-bar"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="audio-time-info">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  );
};

// Contact form component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      } else {
        alert('אירעה שגיאה בשליחת הטופס');
      }
    } catch (error) {
      alert('אירעה שגיאה בשליחת הטופס. נסה שוב או פנה אלינו ישירות.');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '10px', textAlign: 'center', color: '#fefef9' }}>
          בואו נתחיל לעבוד יחד
        </h3>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#94a3b8' }}>מלאו את הפרטים ונציג (אנושי!) יחזור אליכם</p>

        <div className="form-group">
          <label className="form-label">שם מלא</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="ישראל ישראלי"
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
            placeholder="israel@gmail.com"
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
            placeholder="050-0000000"
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
            required
            placeholder="שם העסק"
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

        <button type="submit" className="submit-button btn-shimmer">
          שלח פנייה
        </button>
      </form>

      <div style={{ justifySelf: 'center' }}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/528e0dac3_WhatsAppImage2025-06-19at175252.jpeg"
          alt="צור קשר עם צוות Bot 10 להטמעת עוזר קולי AI בעסק שלך"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            animation: 'float 4s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  );
};

// ============================================================================
// NEW COMPONENT: INTERACTIVE PHONE SIMULATOR (CONVERSION WIDGET)
// ============================================================================
const InteractivePhoneSimulator = () => {
  const [activeScenario, setActiveScenario] = useState('pizza');
  const [isPlaying, setIsPlaying] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const timerRefs = useRef([]);

  const scenarios = {
    pizza: {
      name: 'הזמנת פיצה 🍕',
      avatar: '🍕',
      script: [
        { sender: 'bot', text: 'שלום, הגעת לפיצה דונלד! איזה מגש נוכל להכין לך היום?' },
        { sender: 'user', text: 'היי, רציתי להזמין פיצה משפחתית עם זיתים ובצל.' },
        { sender: 'bot', text: 'בטח! משפחתית עם זיתים ובצל. תרצה להוסיף שתייה או תוספת נוספת?' },
        { sender: 'user', text: 'כן, בקבוק קולה גדול וזהו.' },
        { sender: 'bot', text: 'מצוין, בקבוק קולה ופיצה משפחתית עם זיתים ובצל. ההזמנה התקבלה ונשלחה להכנה! תרצה לשלם באשראי כעת?' },
        { sender: 'user', text: 'כן, תודה רבה!' }
      ]
    },
    realestate: {
      name: 'סינון לידים לנדל"ן 🏢',
      avatar: '🏢',
      script: [
        { sender: 'bot', text: 'היי! הגעת לנציג ה-AI של סוכנות נדל״ן טופ. מחפש דירה לקנייה או להשכרה?' },
        { sender: 'user', text: 'אהלן, אני מחפש לקנות דירת 4 חדרים באזור גבעתיים.' },
        { sender: 'bot', text: 'גבעתיים זה אזור מעולה! מה התקציב המשוער שלך לרכישה?' },
        { sender: 'user', text: 'בסביבות ה-3.2 מיליון שקלים.' },
        { sender: 'bot', text: 'מצוין. יש לנו 2 נכסים שעונים בדיוק על ההגדרות האלו! נוח לך שנציג מומחה יחזור אליך מחר בבוקר לתיאום סיור?' },
        { sender: 'user', text: 'כן, מעולה. בשעה 10:00 זה מצוין.' }
      ]
    },
    clinic: {
      name: 'תור למרפאת שיניים 🩺',
      avatar: '🩺',
      script: [
        { sender: 'bot', text: 'שלום, כאן עוזר ה-AI של מרפאת שיניים דוקטור גל. איך אוכל לעזור לך היום?' },
        { sender: 'user', text: 'היי, אני צריך לקבוע תור דחוף לבדיקה או שיננית השבוע.' },
        { sender: 'bot', text: 'אשמח לעזור. יש לי תור פנוי לשיננית ביום רביעי הקרוב ב-16:00, או ביום חמישי ב-09:30 בבוקר. מה עדיף לך?' },
        { sender: 'user', text: 'יום רביעי ב-16:00 מתאים לי מאוד.' },
        { sender: 'bot', text: 'רשמתי! התור נקבע ליום רביעי ב-16:00. תשלח לי הודעת אישור ב-SMS כעת. נתראה במרפאה!' }
      ]
    }
  };

  const clearAllTimers = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
  };

  const startSimulation = (scenarioId) => {
    clearAllTimers();
    setIsPlaying(true);
    setMessages([]);
    setIsTyping(false);

    const script = scenarios[scenarioId].script;
    let accumulatedDelay = 500;

    script.forEach((msg, idx) => {
      // Typing indicator delay
      const typeTimer = setTimeout(() => {
        setIsTyping(true);
      }, accumulatedDelay);
      timerRefs.current.push(typeTimer);

      accumulatedDelay += 1200 + msg.text.length * 20;

      // Add message delay
      const msgTimer = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, msg]);
      }, accumulatedDelay);
      timerRefs.current.push(msgTimer);

      accumulatedDelay += 800;
    });

    const endTimer = setTimeout(() => {
      setIsPlaying(false);
    }, accumulatedDelay);
    timerRefs.current.push(endTimer);
  };

  const stopSimulation = () => {
    clearAllTimers();
    setIsPlaying(false);
    setMessages([]);
    setIsTyping(false);
  };

  useEffect(() => {
    // Scroll to bottom of chat screen
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    stopSimulation();
    return () => clearAllTimers();
  }, [activeScenario]);

  return (
    <section className="section simulator-section scroll-reveal">
      <div className="simulator-container">

        {/* Info Content */}
        <div className="simulator-info">
          <div className="live-status-ticker">
            <span className="live-pulse-dot"></span>
            <span>סוכן קולי AI בפעולה בזמן אמת</span>
          </div>
          <h2 className="section-title" style={{ textAlign: 'right', marginBottom: '15px' }}>
            נסו את הבוט בפעולה
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '20px' }}>
            בחרו אחד מהתרחישים הנפוצים למטה, ולחצו על כפתור ההפעלה בטלפון כדי לראות כיצד סוכן ה-AI מתנהל מול הלקוח בצורה אנושית וזורמת לחלוטין.
          </p>

          <div className="highlight-box">
            שימו לב להבנת השפה הטבעית (NLP), זיהוי כוונות וביצוע משימות קצה (הזמנות, קביעת פגישות, סינון ראשוני) במקביל!
          </div>

          <div className="scenario-buttons">
            {Object.keys(scenarios).map((key) => (
              <button
                key={key}
                className={`scenario-btn ${activeScenario === key ? 'active' : ''}`}
                onClick={() => setActiveScenario(key)}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="scenario-icon-tag">{scenarios[key].avatar}</span>
                  {scenarios[key].name}
                </span>
                <ArrowLeft size={18} style={{ opacity: activeScenario === key ? 1 : 0.4, transform: 'rotate(180deg)' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="phone-mockup-wrapper">
          <div className="phone-mockup">
            <div className="phone-notch">
              <div className="phone-speaker"></div>
              <div className="phone-camera"></div>
            </div>

            <div className="phone-screen">
              {/* Header */}
              <div className="phone-header">
                <Volume2 size={20} color="#f9bb2b" style={{ opacity: isPlaying && !isTyping && messages[messages.length - 1]?.sender === 'bot' ? 1 : 0.3 }} />
                <div className="phone-header-info">
                  <div className="phone-status">
                    <span className="phone-status-title">סוכן קולי Bot 10</span>
                    <span className="phone-status-subtitle">
                      <span className="live-pulse-dot" style={{ width: '6px', height: '6px' }}></span>
                      מחובר | פעיל
                    </span>
                  </div>
                  <div className="phone-avatar">
                    {scenarios[activeScenario].avatar}
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="phone-chat-body">
                {messages.length === 0 && !isTyping && (
                  <div style={{ textAlign: 'center', margin: 'auto', color: 'var(--text-secondary)', padding: '0 20px', fontSize: '0.95rem' }}>
                    <Smartphone size={40} style={{ margin: '0 auto 15px', color: 'rgba(255,255,255,0.1)' }} />
                    לחצו על הכפתור למטה כדי להתחיל הדמיית שיחה קולית
                  </div>
                )}

                {messages.map((msg, i) => (
                  <div key={i} className={`msg-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}

                {isTyping && (
                  <div className="msg-bubble bot" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '10px 14px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', animation: 'pulse 1s infinite' }} />
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', animation: 'pulse 1s infinite 0.2s' }} />
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', animation: 'pulse 1s infinite 0.4s' }} />
                  </div>
                )}

                <div ref={chatEndRef}></div>
              </div>

              {/* Footer */}
              <div className="phone-footer">
                {isPlaying && (
                  <div className="phone-wave-visualization">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="phone-wave-bar active"
                        style={{
                          animationDelay: `${i * 0.05}s`,
                          background: isTyping ? 'rgba(255,255,255,0.2)' : '#f9bb2b'
                        }}
                      />
                    ))}
                  </div>
                )}

                {!isPlaying ? (
                  <button className="phone-action-btn" onClick={() => startSimulation(activeScenario)}>
                    <Play size={16} />
                    הפעל הדמיית שיחה
                  </button>
                ) : (
                  <button className="phone-action-btn active" onClick={stopSimulation}>
                    <Pause size={16} />
                    עצור שיחה
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// NEW COMPONENT: INLINE ROI CALCULATOR (CONVERSION WIDGET)
// ============================================================================
const InlineRoiCalculator = () => {
  const [leads, setLeads] = useState(800);
  const [hourlyWage, setHourlyWage] = useState(50);

  // ROI calculations
  const hoursSaved = Math.round(leads * 4 / 60); // 4 minutes per lead
  const moneySaved = Math.round(leads * 0.08 * hourlyWage * 30); // Multi-factor labor saving estimation
  const meetingsAdded = Math.round(leads * 0.28); // 28% of leads qualified that would be missed or delayed

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section id="roi-calculator" className="roi-section scroll-reveal">
      <div style={{ maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
        <h2 className="section-title">מחשבון ROI - כמה תחסכו בחודש?</h2>
        <p style={{ color: 'var(--text-body)', fontSize: '1.2rem', lineHeight: '1.6' }}>
          הקלידו את נתוני העסק שלכם וראו מיידית את כמות השעות, הכסף והפגישות שהבוט הקולי החכם יחסוך ויניב לכם בכל חודש.
        </p>
      </div>

      <div className="roi-card-widget">

        {/* Sliders Inputs */}
        <div className="roi-inputs">
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px', color: '#fefef9' }}>הגדרות העסק</h3>

          {/* Leads input */}
          <div className="roi-input-group">
            <div className="roi-label-container">
              <span className="roi-slider-val">{formatNumber(leads)} שיחות</span>
              <span>שיחות/לידים בחודש:</span>
            </div>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={leads}
              onChange={(e) => setLeads(parseInt(e.target.value))}
              className="roi-range-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>5,000+</span>
              <span>100</span>
            </div>
          </div>

          {/* Cost input */}
          <div className="roi-input-group" style={{ marginTop: '10px' }}>
            <div className="roi-label-container">
              <span className="roi-slider-val">₪{hourlyWage} לשעה</span>
              <span>עלות לשעת עבודת נציג:</span>
            </div>
            <input
              type="range"
              min="35"
              max="150"
              step="5"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(parseInt(e.target.value))}
              className="roi-range-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>₪150</span>
              <span>₪35</span>
            </div>
          </div>

          <div style={{ marginTop: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#10b981" />
            <span>החישוב מבוסס על שכר ממוצע, עלויות סוציאליות ואחוז שיחות שלא נענו.</span>
          </div>
        </div>

        {/* Dynamic Calculations display */}
        <div className="roi-results">

          <div className="roi-result-metric">
            <div className="roi-result-title">חיסכון חודשי מוערך 💰</div>
            <div className="roi-result-num highlight-green">
              ₪{formatNumber(moneySaved)}
            </div>
          </div>

          <div className="roi-result-metric">
            <div className="roi-result-title">שעות עבודה שנחסכו ⏱️</div>
            <div className="roi-result-num">
              {formatNumber(hoursSaved)} שעות
            </div>
          </div>

          <div className="roi-result-metric">
            <div className="roi-result-title">פגישות/מכירות שנוספו 🚀</div>
            <div className="roi-result-num" style={{ color: '#f9bb2b' }}>
              +{formatNumber(meetingsAdded)}
            </div>
          </div>

          <a href="#contact" className="cta-button btn-shimmer" style={{ width: '100%', justifyContent: 'center', padding: '16px 0', fontSize: '1.1rem' }}>
            אני רוצה לחסוך ₪{formatNumber(moneySaved)} בחודש
          </a>
        </div>

      </div>
    </section>
  );
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCalls, setActiveCalls] = useState(48);
  const [activeDiagram, setActiveDiagram] = useState('scenario1');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mascotTilt, setMascotTilt] = useState({});

  const handleMascotMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const xNorm = x / (rect.width / 2);
    const yNorm = y / (rect.height / 2);
    const rotateX = -yNorm * 12; // max 12 degrees
    const rotateY = xNorm * 12;  // max 12 degrees
    setMascotTilt({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.05)`,
      transition: 'transform 0.1s ease',
      transformStyle: 'preserve-3d'
    });
  };

  const handleMascotMouseLeave = () => {
    setMascotTilt({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  useEffect(() => {
    // Check if it's a mobile device
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    if (!isMobile) return;

    const handleOrientation = (event) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;
      
      // Limit rotation angles for visual appeal
      const rotY = Math.max(-15, Math.min(15, gamma / 2.5));
      const rotX = Math.max(-15, Math.min(15, (beta - 50) / 2.5)); // center viewing angle around 50 degrees
      
      setMascotTilt({
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(12px) scale(1.03)`,
        transition: 'transform 0.25s ease-out',
        transformStyle: 'preserve-3d'
      });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  const handleDiagramChange = (tab) => {
    if (activeDiagram === tab || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveDiagram(tab);
      setIsTransitioning(false);
    }, 250);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
        const next = prev + change;
        if (next < 35) return 35;
        if (next > 55) return 55;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered animations via IntersectionObserver
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add stagger delay based on data attribute
            const delay = entry.target.dataset.delay || '0';
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Set document title for SEO
  useEffect(() => {
    document.title = 'Bot 10 - סוכן AI קולי לשיחות מכירה ושירות 24/7';
  }, []);

  const features = [
    {
      icon: Clock,
      title: "זמינות 24/7 ומענה מיידי",
      description: "הלקוחות שלכם יקבלו שירות בכל שעה, ללא זמני המתנה כלל, באמצעות מענה קולי אנושי וזורם"
    },
    {
      icon: Users,
      title: "סינון לידים אוטומטי וחסכון",
      description: "המערכת תסנן עבורכם לידים נכנסים באופן אוטומטי, ובכך תחסכו זמן יקר לנציגים אנושיים ותצמצמו עלויות"
    },
    {
      icon: Zap,
      title: "השעיר לעזאזל ללידים קרים",
      description: "העוזר הקולי עושה בשבילכם את העבודה הקשה – מתקשר ללידים קרים וסופג ניתוקים. אתם מקבלים רק את הלידים החמים."
    },
    {
      icon: MessageSquare,
      title: "בוט AI חכם שמתמודד עם כל אתגר",
      description: "הבוט מתמודד ביעילות עם שאלות לא צפויות, מתנסח בחופשיות, פונה לשני המינים בכל טון וגוון קול נדרש"
    },
    {
      icon: Star,
      title: "יכולות שירות ומכירה ברמה גבוהה",
      description: "הבוט מסוגל לנהל שיחות שירות ומכירה מתקדמות ביעילות של 1:10 לעומת נציג אנושי הוא לא מתעייף וזמן הטיפול מתקצר!"
    },
    {
      icon: BarChart3,
      title: "דוחות ואנליטיקה",
      description: "קבלו דוחות מפורטים כולל סיכומים על ביצועי הבוט, רמת ההצלחה בשיחות ותובנות חשובות לשיפור המכירות"
    }
  ];

  const howItWorksSteps = [
    {
      icon: ClipboardCheck,
      title: "אפיון והבנה",
      description: "התהליך מתחיל באפיון מעמיק על ידי צוות מקצועי עם רקע טכני והנדסי ב-AI, להבנת הצרכים העסקיים."
    },
    {
      icon: DraftingCompass,
      title: "תכנון וסקיצה",
      description: "לאחר מכן, תקבלו סקיצה מפורטת של תסריט השיחה והתהליכים המתוכננים לאישורכם."
    },
    {
      icon: FlaskConical,
      title: "בדיקות והטמעה",
      description: "עם קבלת האישור, נעבור לסביבת טסטים איכותית כדי להבטיח שהפתרון יעלה לאוויר באופן מושלם."
    },
    {
      icon: Rocket,
      title: "ליווי וצמיחה",
      description: "לאחר ההטמעה, תיהנו מליווי מלא ומתמשך, הכולל לא רק מענה טכני אלא גם ייעוץ אסטרטגי לצמיחה."
    }
  ];

  const clientLogos = [
    { name: "גפן ביטוחים", id: "gefen", src: gefenLogo },
    { name: "בשביל הזהב", id: "bshvil", src: bshvilLogo },
    { name: "דורית גלעד פיננסים", id: "durit", src: duritLogo },
    { name: "OpenAI", id: "openai", src: openailogo },
    { name: "מגדל חברה לביטוח", id: "migdal", src: migdalLogo },
  ];
  // Create a massive duplication (4 sets) to ensure the track is wide enough
  // We need enough content to fill the screen width at least once per track.
  const sliderLogos = [
    ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos
  ];


  const pricingPlans = [
    {
      name: "Basic – כולל 1,000 דקות מתנה לחודש הראשון",
      price: "₪3,000",
      period: " (חד פעמי בחודש הראשון)",
      features: [
        "כולל הקמה, תסריט מותאם והטמעה",
        "מספר וירטואלי ייעודי",
        "תמלול שיחות ודוחות בסיסיים",
        "תמיכה טכנית",
        "החל מהחודש השני: ₪1,000 לחודש עבור 600 דקות",
        "₪1.5 לכל דקה נוספת מעבר למכסה",
      ],
      suitableFor: "מתאים לעסקים קטנים או התחלתיים שרוצים לבחון את הפלטפורמה.",
      serviceOptionsTitle: "באיזה אופן? (בחר שירות אחד)",
      serviceOptions: [
        "הצעת מכירה / סינון לידים",
        "מזכירה קולית",
        "טיפול בהזמנות",
        "איסוף מידע בסיסי",
      ],
    },
    {
      name: "Pro (מותאם אישית)",
      price: "צור קשר",
      period: "",
      featured: true,
      features: [
        "עוזר קולי חכם ומותאם אישית",
        "ניהול תסריטים מתקדמים ודינמיים",
        "מספר וירטואלי ייעודי",
        "דשבורד מפורט ודוחות מתקדמים",
        "תמיכה מלאה",
        "חיבור למערכות CRM ואינטגרציות",
      ],
      suitableFor: "לעסקים עם זרם לידים קבוע שדורשים אוטומציה מלאה.",
      serviceOptionsTitle: "כל השירותים כלולים",
      serviceOptions: [
        "הצעת מכירה / סינון לידים",
        "מזכירה קולית",
        "טיפול בהזמנות",
        "איסוף מידע מורחב",
      ],
    },
    {
      name: "Enterprise (מותאם לארגונים)",
      price: "צור קשר",
      period: "",
      features: [
        "תמיכה במעל 5,000 דקות שיחה בחודש",
        "מספר עוזרים קוליים במקביל",
        "התאמה אישית מלאה למערכות קיימות",
        "בינה מלאכותית מותאמת לפי תחום ושפה",
        "מערכת בקרת איכות ודוחות עומק",
        "תמיכה והטמעה צמודה",
      ],
      suitableFor: "לחברות וארגונים עם היקף פעילות גדול או ריבוי צוותים.",
      serviceOptionsTitle: "כל השירותים כלולים",
      serviceOptions: [
        "הצעת מכירה / סינון לידים",
        "מזכירה קולית",
        "טיפול בהזמנות",
        "שירותים מותאמים אישית",
      ],
    },
  ];

  const recordings = [
    {
      title: " סוכנות ביטוח (סיפור הצלחה🏆)",
      description: "אימות לקוח באמצעות תעודת זהות+תאריך לידה ולאחר מכן מסירת פרטי הפוליסה",
      audioSrc: riski
    },

    {
      title: 'תיאום פגישת ייעוץ עו"ד',
      description: "פנייה ללקוח, בדיקת השירות הנדרש והעברת הבקשה לעורך דין שיחזור אליו",
      audioSrc: law_office
    },
    {
      title: "רואת חשבון",
      description: "הצעת שירותי ראיית חשבון",
      audioSrc: doritgilad
    },
    {
      title: "סוכנות ביטוח - גפן ביטוחים",
      description: "סוכנות גפן דיווחה על עלייה של 35% בסגירת פוליסות הודות למענה מיידי ללידים שהגיעו מחוץ לשעות הפעילות.",
      audioSrc: gefenUrl
    },

    {
      title: "סקר פוליטי",
      description: "סקר פוליטי שבודק שביעות רצון",
      audioSrc: politic
    },
    {
      title: "הזמנת פיצה",
      description: "קבלת הזמנה מלקוח, פירוט התפריט והצעת מכירה",
      audioSrc: pizza
    },
    {
      title: "גיוס עובדים",
      description: "בירור רלוונטיות המשרה עם המגויס ותיאום פגישה עם מגייס",
      audioSrc: jobRecruit
    },
    {
      title: "מכירת קורס",
      description: "הסבר על הקורס וקביעת שיחה עם יועץ",
      audioSrc: course_agent
    },


  ];

  const keywords = [
    "בוט קולי", "עוזר קולי",
    "מוקדן וירטואלי", "שירות לקוחות דיגיטלי", "שיחות יוצאות אוטומטי",
    "שיחות נכנסות", "סיכום פגישות", "סינון לידים", "מזכירה קולית",
    "מענה טלפוני 24/7", "צ'אטבוט קולי", "מענה אוטומטי לשיחות",
    "עוזר טלפוני", "רובוט טלפוני", "AI", "בינה מלאכותית",
    "עיבוד שפה טבעית", "למידת מכונה", "קריינות", "דיבור בעברית", "חיסכון בזמן", "אוטומציה", "פיתרון דיגיטלי", "סוכן AI",
    "AI-Voice-Bot-Israel", "AI voice"
  ];

  const faqData = [
    {
      question: "איך הבוט יודע לענות על העסק הספציפי שלי?",
      answer: "אנו מבצעים אפיון מעמיק ומלמדים את הבוט על העסק שלכם ואת המטרה שלכם. הבוט יכול להתחבר למאגרי מידע שלכם, כך שהוא עונה מתוך מידע אמיתי של העסק."
    },
    {
      question: "מה קורה אם הלקוח מבקש לדבר עם נציג אמיתי?",
      answer: "כחלק מהשירות, הבוט יאומן לתאם שיחה חוזרת עם הליד שלכם. המטרה היא לעבוד בשילוב, לא להחליף לגמרי את האנשים."
    },
    {
      question: "תוך כמה זמן אפשר להפעיל את העוזר הקולי?",
      answer: "תהליך ההטמעה משתנה בהתאם למורכבות הבוט ולמשך זמן סביבת הטסטים. ככל שנרצה שהוא יעבוד באופן 'מושלם' יותר, משך ההטמעה יהיה ארוך יותר. ברוב המקרים, שבועיים הטמעה ואתם באוויר!"
    },
    {
      question: "האם אתם מתחברים ל-CRM?",
      answer: "כמובן, נוכל להתחבר לבסיסי מידע ומערכות ניהול לקוחות אשר יש להן יכולות התממשקות."
    },
    {
      question: "האם ניתן לשנות חבילה במהלך השירות?",
      answer: "וודאי, נתאם אתכם פגישת אפיון וכל ההתאמות הנדרשות יבוצעו כנדרש."
    },
    {
      question: "האם ניתן לרכוש דקות שיחה נוספות?",
      answer: "אכן כן! במידה ונגמרו לכם דקות השיחה ניתן לרכוש דקות בתוספת תשלום יחסית למספר הדקות."
    },
    {
      question: "האם ניתן לרכוש מספר נוסף כדי ששיחות יתבצעו במקביל?",
      answer: "בהחלט. ניתן לרכוש כמות מספרים כנדרש ולחברה אל אותו הבוט שכבר הטמענו."
    },
    {
      question: "במידה ואני עסק של אדם אחד, איזה סוג חבילה הכי מתאימה לי?",
      answer: "בהתאם לכך, מומלץ להתחיל מהחבילה הבסיסית וללמוד ממנה את קצב גדילת הלידים ויכולת התפוקה שלך לעמוד בהם. במידה ותצטרך, תמיד נוכל לשנות עבורך חבילה."
    }
  ];

  const comparisonData = [
    { feature: "זמינות", human: "9:00 - 17:00 (8 שעות)", bot: "24/7 (24 שעות)" },
    { feature: "ימי מחלה/חופש", human: "כן", bot: "לעולם לא" },
    { feature: "שיחות במקביל", human: "1 כל פעם", bot: "ללא הגבלה" },
    { feature: "עלות חודשית", human: "₪8,000+", bot: "משלמים לפי שימוש" },
    { feature: "זמן תגובה לליד", human: "דקות עד שעות", bot: "מיידי (שניות)" },
  ];

  const testimonials = [
    { name: "דורון מאירי", role: "מנכ״ל סוכנות ביטוח", text: "הבוט חסך לנו שעתיים ביום של סינון לידים. פשוט תענוג." },
    { name: "ענת שקד", role: "בעלת משרד תיווך", text: "הלקוחות לא מאמינים שהם דיברו עם בוט. זה סגר לי עסקאות שהייתי מפספסת בגלל עומס." },
    { name: "ירון פלד", role: "מנהל מכירות", text: "השירות הכי טוב שעשיתי לעסק. הלידים מגיעים חמים ומוכנים לסגירה." }
  ];

  const integrations = [
    "Monday.com", "HubSpot", "Salesforce", "Pipedrive", "Google Sheets", "Priority", "Zapier", "Make"
  ];


  return (
    <div style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl', position: 'relative' }}>

      <CustomStyles />
      <AccessibilityButton />
      <CookiePopup />

      {/* Modern, Eye-catching Ambient Glow Background with Starfield */}
      <div className="ambient-bg">
        <div className="bg-stars"></div>
        <div className="bg-ray-left"></div>
        <div className="bg-ray-right"></div>
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
        <div className="bg-horizon-glow"></div>
      </div>

      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <a
            href="https://wa.me/972526134734?text=%D7%94%D7%99%D7%99%20%D7%A6%D7%95%D7%95%D7%AA%20Bot10%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%97%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Bot 10 WhatsApp"
              className="whatsapp-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/bot10.agent/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#E1306C',
              borderRadius: '50%',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.28.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61579199033129"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#1877F2',
              borderRadius: '50%',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
            <li><a href="#features">הבוט שלנו</a></li>
            <li><a href="#who-is-it-for">מי הקהל?</a></li>
            <li><a href="#how-it-works">איך זה עובד?</a></li>
            <li><a href="#pricing">מחירים</a></li>
            <li><a href="#recordings">דוגמאות</a></li>
            <li><a href="#faq">שאלות ותשובות</a></li>
            <li><a href="#about">מי אנחנו</a></li>
            <li><a href="/blog" target="_blank">בלוג</a></li>
            <li><Link to="/roi-calculator">מחשבון המרה</Link></li>
            <li><Link to="/cost-calculator"> מחשבון הוצאות</Link></li>
            <li><a href="#contact">צור קשר <Mail size={18} /></a></li>

          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text-content">

            <div className="live-status-ticker">
              <span className="live-pulse-dot"></span>
              <span>{activeCalls} שיחות מנוהלות כעת בזמן אמת | 99.4% מענה מוצלח החודש</span>
            </div>
            <img src={updatedLogo} alt="Bot 10 - סוכן קולי AI חכם בעברית למכירות ושירות 24/7 בוט קולי AI (Voice Agent) לעסקים: הנציג שלא מפספס אף ליד" className="logo-image" />
            <h1 className="main-title">Bot 10: הנציג שלא מפספס אף ליד</h1>
            <p className="subtitle">
              סגירת פגישות אוטומטית בשיחה קולית וטקסטואלית, 24/7.
              <br />
              העוזר הקולי שמדבר כמו בן אדם, חוסך זמן יקר ומגדיל מכירות.
            </p>
            <div className="hero-buttons-container">
              <a href="#contact" className="cta-button btn-shimmer">
                <Sparkles size={20} />
                דברו איתנו עכשיו
              </a>
              <a href="#recordings" className="cta-button-secondary">
                שמעו דוגמאות
                <Play size={18} />
              </a>
            </div>
          </div>

          <div 
            className="hero-mascot"
            onMouseMove={handleMascotMouseMove}
            onMouseLeave={handleMascotMouseLeave}
            style={mascotTilt}
          >
            <img
              src={other_logo}
              alt="Bot 10 – בוט טלפוני בעברית שמנהל שיחות עסקיות אוטומטיות"
              className="mascot-image"
            />
          </div>
        </div>
      </section>



      {/* Features Section - Glassmorphism */}
      <section id="features" className="section">
        <h2 className="section-title scroll-reveal">למה Bot 10?</h2>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={power} alt="למה לבחור ב-Bot 10? יתרונות העוזר הקולי שלנו" className='logo-image' style={{ maxHeight: '120px' }} />
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card scroll-reveal-scale"
              data-delay={`${index * 0.1}`}
            >
              <div className="feature-icon">
                <feature.icon size={36} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Section - NEW */}
      <section className="section" style={{ padding: '60px 20px', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title scroll-reveal">שליטה מלאה בידיים שלכם</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.2rem', color: '#cbd5e1' }}>
            דשבורד ניהול מתקדם המאפשר לכם לעקוב אחרי כל השיחות, לראות אנליטיקות בזמן אמת, ולהבין בדיוק מה קורה בעסק שלכם.
          </p>
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <img src={dashboardPreview} alt="דשבורד ניהול Bot 10" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

      </section >

      {/* Comparison Section */}
      {/* Comparison Section */}
      <section className="section comparison-section">
        <h2 className="section-title scroll-reveal">למה לעבור ל-Bot 10?</h2>
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>

                <th style={{ color: '#fefef9' }}>פרמטר</th>
                <th style={{ background: 'rgba(255,255,255,0.1)', color: '#cbd5e1' }}>נציג אנושי</th>
                <th style={{ background: 'rgba(249, 187, 43, 0.2)', color: '#f9bb2b', border: '1px solid #f9bb2b' }}>Bot 10 🏆</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td style={{ color: '#fefef9' }}>{row.feature}</td>
                  <td className="human-cell" style={{ color: '#cbd5e1', background: 'rgba(255,255,255,0.05)' }}>{row.human}</td>
                  <td className="bot-cell" style={{ color: '#fefef9', background: 'rgba(255,255,255,0.1)' }}>{row.bot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: 'center', margin: '40px 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
          נסו את המחשבון שלנו

          <Link
            to="/cost-calculator"
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: '#f9bb2b',
              textDecoration: 'none',
              borderBottom: '2px solid #f9bb2b'
            }}
          >
            🤔 חישוב ROI - כמה תחסכו בחודש?
          </Link>
        </div>
      </section >

      <section id="who-is-it-for" className="section who-is-it-for-section">
        <div className="content-wrapper">
          <h2 className="section-title scroll-reveal" style={{ marginBottom: '30px' }}>סרטון לדוגמא</h2>
          <div style={{ textAlign: 'center', margin: '40px 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              border: '4px solid #fff',
              maxWidth: '360px',
              width: '100%'
            }}>
              <iframe
                width="100%"
                height="640"
                src="https://youtube.com/embed/NUAomkQIMPI"
                title="Bot 10 AI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section >

      {/* Interactive Savings / ROI Calculator Widget */}
      <InlineRoiCalculator />

      {/* Who is it for Section */}
      <section id="who-is-it-for" className="section who-is-it-for-section">
        <div className="content-wrapper">
          <h2 className="section-title scroll-reveal" style={{ marginBottom: '30px' }}>למי זה מתאים?</h2>
          <Users size={80} className="section-icon" />
          <p className="description">
            הפתרון שלנו מתאים לכל עסק המקבל <span className="highlight">פניות רבות</span>,
            מעסקים קטנים כמו משרדי נדל"ן ו<span className="highlight">נותני שירות </span> מקצועי
            ועד לחברות ענק עם <span className="highlight">אלפי לידים</span>.
            הוא מייעל את תהליכי המכירה והשירות,
            <span className="highlight"> חוסך משאבים</span> ומבטיח שאף<span className="highlight"> לקוח פוטנציאלי </span>לא ילך לאיבוד.
          </p>
        </div>
      </section>

      {/* Scenario Flow Diagram Section */}
      <section className="section scroll-reveal" style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">איך זה עובד בפועל? תרשים זרימה</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.2rem', color: '#cbd5e1' }}>
            הנה תיאור גרפי של תהליך ניהול השיחה והאינטגרציה של Bot 10 עם המערכות שלכם:
          </p>

          {/* Interactive tabs to choose scenario */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(15, 22, 42, 0.6)',
            padding: '6px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '35px',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => handleDiagramChange('scenario1')}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: activeDiagram === 'scenario1' ? '#1c7895' : 'transparent',
                color: activeDiagram === 'scenario1' ? '#fefef9' : '#94a3b8',
                boxShadow: activeDiagram === 'scenario1' ? '0 4px 15px rgba(28, 120, 149, 0.4)' : 'none',
              }}
            >
              תרחיש 1: שיחה נכנסת וטיפול בלידים
            </button>
            <button
              onClick={() => handleDiagramChange('scenario2')}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: activeDiagram === 'scenario2' ? '#1c7895' : 'transparent',
                color: activeDiagram === 'scenario2' ? '#fefef9' : '#94a3b8',
                boxShadow: activeDiagram === 'scenario2' ? '0 4px 15px rgba(28, 120, 149, 0.4)' : 'none',
              }}
            >
              תרחיש 2: מעקב ושיחות יוצאות (Follow-up)
            </button>
            <button
              onClick={() => handleDiagramChange('scenario3')}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: activeDiagram === 'scenario3' ? '#1c7895' : 'transparent',
                color: activeDiagram === 'scenario3' ? '#fefef9' : '#94a3b8',
                boxShadow: activeDiagram === 'scenario3' ? '0 4px 15px rgba(28, 120, 149, 0.4)' : 'none',
              }}
            >
              תרחיש 3: תיאום פגישות אוטומטי מ-CRM
            </button>
            <button
              onClick={() => handleDiagramChange('scenario4')}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: activeDiagram === 'scenario4' ? '#1c7895' : 'transparent',
                color: activeDiagram === 'scenario4' ? '#fefef9' : '#94a3b8',
                boxShadow: activeDiagram === 'scenario4' ? '0 4px 15px rgba(28, 120, 149, 0.4)' : 'none',
              }}
            >
              תרחיש 4: ניתוב ומענה במרכזייה (IVR)
            </button>
          </div>

          <div 
            className="diagram-container-3d"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(15, 22, 42, 0.4)',
              padding: '20px'
            }}
          >
            <img
              src={
                activeDiagram === 'scenario1' ? scenarioDiagram :
                  activeDiagram === 'scenario2' ? scenarioDiagram2 :
                    activeDiagram === 'scenario3' ? scenarioDiagram3 :
                      scenarioDiagram4
              }
              alt={
                activeDiagram === 'scenario1' ? "תרשים זרימת שיחה של Bot 10 - שיחה נכנסת וטיפול בלידים" :
                  activeDiagram === 'scenario2' ? "תרשים זרימת שיחה של Bot 10 - מעקב ושיחות יוצאות (Follow-up)" :
                    activeDiagram === 'scenario3' ? "תרשים זרימת שיחה של Bot 10 - תיאום פגישות אוטומטי מלידים" :
                      "תרשים זרימת שיחה של Bot 10 - ניתוב שיחות ומענה במרכזייה"
              }
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '14px',
                transition: 'opacity 0.25s ease-in-out, transform 0.25s ease-in-out',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'scale(0.98)' : 'scale(1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <h2 className="section-title scroll-reveal">איך זה עובד? שותפות להצלחה</h2>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={how_it} alt="תהליך העבודה" className="logo-image" style={{ maxHeight: '100px' }} />
        </div>
        <div className="how-it-works-grid">
          {howItWorksSteps.map((step, index) => (
            <div className="how-it-works-card scroll-reveal" key={index} data-delay={`${index * 0.12}`}>
              <div className="how-it-works-icon-wrapper">
                <step.icon size={30} className="how-it-works-icon" />
                <span className="how-it-works-step-number">{index + 1}</span>
              </div>
              <h3 className="how-it-works-title">{step.title}</h3>
              <p className="how-it-works-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section id="clients" className="clients-section">
        <h2 className="section-title scroll-reveal">שותפים לדרך ולקוחות מובילים</h2>
        <div className="logo-slider-container">
          {/* First Track */}
          <div className="logo-slider-track">
            {sliderLogos.map((logo, index) => (
              <div key={`track1-${logo.id}-${index}`} className="logo-item" style={{ gap: '10px' }}>
                <div style={{
                  width: '200px',
                  height: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '5px'
                }}>
                  {logo.src && (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      style={{
                        maxWidth: '100%',
                        // maxHeight: '100%',
                        objectFit: 'contain',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  )}
                </div>
                <span className="logo-item-text" style={{ fontSize: '1rem', color: '#fefef9', fontWeight: '600' }}>{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Second Track (Identical Duplicate) */}
          <div className="logo-slider-track">
            {sliderLogos.map((logo, index) => (
              <div key={`track2-${logo.id}-${index}`} className="logo-item" style={{ gap: '10px' }}>
                <div style={{
                  width: '200px',
                  height: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '5px'
                }}>
                  {logo.src && (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      style={{
                        maxWidth: '100%',
                        // maxHeight: '100%',
                        objectFit: 'contain',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  )}
                </div>
                <span className="logo-item-text" style={{ fontSize: '1rem', color: '#fefef9', fontWeight: '600' }}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Moved above Pricing) */}
      <section id="services" className="section">
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '30px',
          padding: '60px 40px',
          margin: '0 auto 60px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '1200px'
        }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#fefef9'
          }}>
            השירותים שלנו
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center', padding: '10px' }}>
              <div className="service-icon-hover" style={{
                width: '80px', height: '80px', background: '#fef3c7', color: '#d97706',
                borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
              }}>
                <Star size={40} />
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#fefef9' }}>
                הצעת מכירה / סינון לידים
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                הבוט יבצע שיחות מכירה מקצועיות ויסנן לידים באיכות גבוהה עבורכם
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '10px' }}>
              <div className="service-icon-hover" style={{
                width: '80px', height: '80px', background: '#dbeafe', color: '#2563eb',
                borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
              }}>
                <Phone size={40} />
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#fefef9' }}>
                מזכירה קולית
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                קביעת פגישות, העברת הודעות וטיפול בפניות בסיסיות של לקוחות
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '10px' }}>
              <div className="service-icon-hover" style={{
                width: '80px', height: '80px', background: '#dcfce7', color: '#16a34a',
                borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
              }}>
                <MessageSquare size={40} />
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#fefef9' }}>
                טיפול בהזמנות
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                קבלת הזמנות מלקוחות, רישום פרטים והעברה למערכות הרלוונטיות
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '10px' }}>
              <div className="service-icon-hover" style={{
                width: '80px', height: '80px', background: '#f3e8ff', color: '#9333ea',
                borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
              }}>
                <Database size={40} />
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#fefef9' }}>
                איסוף דאטה
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                איסוף נתונים מלקוחות לפי הצרכים שלכם - מבסיסי ועד מפורט
              </p>
            </div>

            <div>
              <a href='#contact' >
                <img src={leaveDetailes} alt="השאר פרטים" className="leave-details-img" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section">
        <h2 className="section-title scroll-reveal" style={{ fontSize: '2.5rem' }}>מתממשק לכלים שאתם אוהבים</h2>
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '0 20px' }}>
          <img
            src={crmIntegrations}
            alt="אינטגרציות CRM - Monday, HubSpot, Salesforce, Zapier..."
            style={{ width: '100%', maxWidth: '1200px', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <h2 className="section-title scroll-reveal">מה הלקוחות אומרים?</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div style={{ color: '#f9bb2b', fontSize: '2rem', marginBottom: '10px' }}>★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-full-width">
        <div className="section-content">
          <h2 className="section-title scroll-reveal">החבילות שלנו </h2>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img src={prices_logo} alt="חבילות מחיר לבוט קולי" className="logo-image" style={{ maxHeight: '80px' }} />
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card scroll-reveal ${plan.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <h3 className="pricing-title">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                </div>

                <span style={{ fontSize: '1rem', fontWeight: '500', color: '#64748b', marginBottom: '20px', display: 'block' }}>
                  {plan.period}
                </span>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={20} style={{ color: '#10B981', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="pricing-section-title">למי זה מתאים?</h4>
                <p className="pricing-suitable-for">{plan.suitableFor}</p>

                <h4 className="pricing-section-title">{plan.serviceOptionsTitle}</h4>
                <ul className="pricing-sub-features">
                  {plan.serviceOptions.map((option, idx) => (
                    <li key={idx}>
                      <CheckCircle size={20} style={{ color: '#10B981', flexShrink: 0 }} />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>

                <a href='#contact' className="cta-button btn-shimmer" >
                  בחר חבילה זו
                </a>

                <div style={{ marginBottom: '10px', marginTop: '25px', textAlign: 'center' }}>
                  <Link
                    to="/cost-calculator"
                    style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#f9bb2b',
                      textDecoration: 'none',
                      borderBottom: '2px solid #f9bb2b'
                    }}
                  >
                    🤔 חישוב ROI - כמה תחסכו בחודש?
                  </Link>
                </div>
              </div>

            ))}
          </div>

        </div>
      </section>

      {/* Recordings Section */}
      <section id="recordings" className="section">
        <h2 className="section-title scroll-reveal">שמעו את הבוט שלנו בפעולה</h2>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={record_image} alt="דוגמאות הקלטות" className="logo-image" style={{ maxHeight: '100px' }} />
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
          הקלטות אמיתיות במגוון קולות שהבוט שלנו מבצע. שימו לב לטבעיות ולמקצועיות.
        </p>
        <div className="recordings-grid">
          {recordings.map((recording, index) => (
            <AudioPlayer
              key={index}
              title={recording.title}
              description={recording.description}
              audioSrc={recording.audioSrc}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq-section">
        <h2 className="section-title scroll-reveal"> שאלות ותשובות </h2>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={qa_logo} alt="שאלות נפוצות" className="logo-image" style={{ maxHeight: '80px' }} />
        </div>
        <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqData.map((item, index) => (
            <Accordion key={index} style={{ background: '#1e293b', color: '#fefef9', marginBottom: '10px', borderRadius: '10px', border: '1px solid #334155' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#f9bb2b' }} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant="h6" style={{ fontFamily: 'Assistant', fontWeight: 'bold' }}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ background: 'transparent', color: '#cbd5e1' }}>
                <Typography>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Keywords Section */}
      <section className="section">
        <div className="keywords-section">
          <h2 className="section-title scroll-reveal" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            הטכנולוגיה המובילה בישראל
          </h2>
          <div className="keywords-grid">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="keyword-tag"
                style={{ animationDelay: `${index * 0.05 + 0.4}s` }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className='footer'>
        <div id="about" className="about-content">
          <h2 className="section-title scroll-reveal">הסיפור שלנו</h2>

          <div className="about-story">
            <p>
              אנחנו ערן ומושיק, שני חברים שהכירו לגמרי במקרה בטיול אחרי צבא, התחברנו בזכות האהבה לחדשנות ורצון אחד פשוט - לעזור לבעלי עסקים להצליח!
            </p>
          </div>

          <div className="founders-section">
            <div className="founder-card">
              <h3 className="founder-name">ערן ציפל</h3>
              <p className="founder-description">
                מהנדס תעשייה וניהול עם ניסיון חוצה ארגונים בשיפור תהליכים והובלת פרויקטים, מנהל חברת שיווק שמלווה וחושפת עסקים בדיגיטל.
              </p>
            </div>

            <div className="founder-card">
              <h3 className="founder-name">מושיק ציוני</h3>
              <p className="founder-description">
                מפתח תוכנה ומומחה לאוטומציות. מפתח Full-Stack ומומחה NLP שבנה מערכות AI לחברות Fortune-500.
              </p>
            </div>
          </div>

          <div className="about-story">
            <p>
              במהלך הליווי השיווקי לעסקים הבנו את הכאב שחוזר שוב ושוב - לידים נופלים בין הכיסאות, לקוחות מאוכזבים לא זוכים למענה, זמן שווה כסף - והכול מתבזבז על משאבים לא יעילים.
              <strong> ככה נולד BOT10.</strong>
            </p>
          </div>

          <div className="mission-text">
            אנחנו מאמינים שהעתיד שייך למי שמאמין בשינוי ומוכן לאמץ אותו.
            <br />
            <strong>בואו נדבר, ונראה איך גם העסק שלכם יכול לגדול עם העוזר הקולי החכם שלנו</strong>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="section">
        <ContactForm />
      </section>

      {/* Floating Sticky CTA */}
      {/* Floating Sticky CTA with Logo */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        {/* Dial Logo */}
        {/* <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid #f9bb2b',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          marginTop: '-40px',
          marginBottom: '5px',
          zIndex: 1001
        }}>
          <img
            src={diallogo}
            alt="Bot 10"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div> */}

        <a
          href="tel:+972526134734"
          className="floating-cta-sticky"
          style={{
            background: '#f9bb2b',
            color: '#1c7895',
            padding: '12px 25px',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            fontWeight: '700',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Phone size={24} />
          <span>דברו איתנו</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <img src={updatedLogo} alt="לוגו Bot 10" className="footer-logo" />
          <p style={{ fontSize: '1.1rem', opacity: '0.8', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            המהפכה בתקשורת עסקית מתחילה כאן. סוכן AI קולי שמבין עברית ומספק שירות ברמה אנושית מלאה
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={20} color="#f9bb2b" />
              <a href="mailto:bot10.info@gmail.com" style={{ textDecoration: 'none', color: '#fefef9' }}>
                bot10.info@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={20} color="#f9bb2b" />
              <a href="tel:+972526134734" style={{ textDecoration: 'none', color: '#fefef9' }}>
                052-6134734
              </a>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(254, 254, 249, 0.1)',
            paddingTop: '30px',
            opacity: '0.6'
          }}>
            <p>© 2026 Bot 10. כל הזכויות שמורות. | <Link to="/accessibility" style={{ color: '#fefef9', textDecoration: 'underline' }}>הצהרת נגישות</Link></p>
          </div>
        </div>
      </footer>
    </div >
  );
}