import { useState, useRef, useEffect } from 'react';
import { Phone, Database, CheckCircle, Play, Pause, Mail, MessageSquare, Star, Zap, Users, BarChart3, Clock, Menu, X, ClipboardCheck, DraftingCompass, FlaskConical, Rocket, Sparkles, Activity } from 'lucide-react';
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

//Import Images
import updatedLogo from './updated_logo.png?url';
import power from './power.png';
import how_it from './how_it.png'
import record_image from './recored_image.png'
import other_logo from './other_logo.png'
import qa_logo from './qa.png'
import prices_logo from './prices.png'
import leaveDetailes from './leave_details.png'

// Custom styles component
const CustomStyles = () => (
  <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&display=swap');
    
    :root {
      --primary: #1c7895;
      --primary-dark: #16627a;
      --accent: #f9bb2b;
      --light: #fefef9;
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
      background: var(--primary);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* Shimmer Effect for Buttons */
    @keyframes shimmer {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }

    .btn-shimmer {
      background: linear-gradient(110deg, #f9bb2b 8%, #ffeeba 18%, #f9bb2b 33%);
      background-size: 200% 100%;
      animation: 3.5s shimmer linear infinite;
    }

    /* Glassmorphism Card */
    .glass-card {
      background: rgba(254, 254, 249, 0.95);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
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
      from {
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInFromRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes logoSlide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .main-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 15px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      direction: ltr;
    }

    .main-header.scrolled {
      background-color: rgba(7, 69, 92, 0.9);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
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
      gap: 30px;
      list-style: none;
      direction: rtl;
    }

    .nav-links a {
      color: #fefef9;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f9bb2b;
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: #f9bb2b;
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
    
    .hero-section {
      background: linear-gradient(135deg, #1c7895, #155e75);
      background-size: 200% 200%;
      animation: waveAnimation 15s ease infinite;
      color: #fefef9;
      padding: 140px 20px 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 40px;
      align-items: center;
      text-align: right;
    }

    .hero-text-content {
      opacity: 0;
      animation: slideInFromRight 1s ease-out 0.3s forwards;
    }

    .hero-mascot {
      opacity: 0;
      animation: slideInFromLeft 1s ease-out 0.5s forwards;
      justify-self: center;
      position: relative;
    }
    
    /* Glow effect behind mascot */
    .hero-mascot::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(249, 187, 43, 0.4) 0%, rgba(255,255,255,0) 70%);
        z-index: -1;
        animation: pulse 3s infinite ease-in-out;
    }

    .mascot-image {
      max-width: 320px;
      height: auto;
      animation: float 4s ease-in-out infinite;
      filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.4));
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
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 800;
      margin-bottom: 24px;
      background: linear-gradient(45deg, #fefef9, #f9bb2b); 
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 4px 20px rgba(0,0,0,0.15); 
      line-height: 1.1;
    }
    
    .subtitle {
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      margin-bottom: 35px;
      max-width: 750px;
      line-height: 1.6;
      text-shadow: 0 1px 5px rgba(0,0,0,0.2);
      color: rgba(254, 254, 249, 0.9);
    }

    .hero-buttons-container {
      display: flex;
      gap: 20px;
      margin-top: 40px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    @media (min-width: 768px) {
      .hero-buttons-container {
        flex-direction: row; 
        justify-content: flex-start; /* Aligned right (start in RTL) */
      }
    }
    
    .cta-button, .cta-button-secondary {
      padding: 16px 32px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1.1rem;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    
    .cta-button {
      /* Uses shimmer class animation */
      color: #1c7895;
      box-shadow: 0 10px 30px rgba(249, 187, 43, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 15px 40px rgba(249, 187, 43, 0.4);
    }

    .cta-button-secondary {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      color: #fefef9;
      border: 2px solid #f9bb2b;
    }

    .cta-button-secondary:hover {
      background: #f9bb2b;
      color: #1c7895;
      transform: translateY(-3px) scale(1.03);
    }
    
    .section {
      padding: 100px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-full-width {
      padding: 100px 0;
      width: 100%;
    }

    .section-full-width .section-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .section-title {
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
      color: #1c7895;
      line-height: 1.2;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }
    
    .feature-card {
      /* Glassmorphism applied via class */
      padding: 40px;
      border-radius: 24px;
      transition: all 0.3s ease;
      opacity: 0; 
      animation: scaleIn 0.7s ease-out forwards; 
    }
    
    .feature-card:hover {
      transform: translateY(-10px); 
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.1);
      border-color: #f9bb2b;
    }
    
    .feature-icon {
      width: 70px;
      height: 70px;
      background: #f9bb2b;
      color: #1c7895;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
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
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: #1c7895;
    }
    
    .feature-description {
      color: #4a5568;
      line-height: 1.6;
      font-size: 1.1rem;
    }

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

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
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
      background: #ffffff;
      border-radius: 30px;
      padding: 50px;
      position: relative;
      transition: all 0.4s ease;
      border: 1px solid #e2e8f0;
      opacity: 0; 
      animation: fadeInUp 0.7s ease-out forwards; 
      text-align: right;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    }
    
    .pricing-card.featured {
      border: 2px solid #f9bb2b;
      transform: scale(1.05); 
      box-shadow: 0 30px 60px rgba(249, 187, 43, 0.15);
      z-index: 10;
    }
    
    .pricing-card.featured::before {
      content: 'הכי משתלם 🏆';
      position: absolute;
      top: -18px;
      left: 50%;
      transform: translateX(-50%);
      background: #f9bb2b;
      color: #1c7895;
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 800;
      box-shadow: 0 5px 15px rgba(249, 187, 43, 0.4);
    }
    .pricing-card.featured:hover { 
      transform: translateY(-5px) scale(1.07); 
    }
    
    .pricing-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
      border-color: #f9bb2b;
    }
    
    .pricing-title {
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 20px;
      color: #1c7895;
    }
    
    .pricing-price {
      font-size: 3.5rem;
      font-weight: 900;
      color: #f9bb2b;
      margin-bottom: 30px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.05);
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
      color: #4a5568;
      font-size: 1.05rem;
      border-bottom: 1px dashed #f0f0f0;
    }
    .pricing-features li:last-child { border-bottom: none; }
    
    .recordings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }
    
    .pricing-section-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1c7895;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    .pricing-suitable-for {
      color: #64748b;
      margin-bottom: 20px;
      font-size: 1rem;
      line-height: 1.5;
      background: #f8fafc;
      padding: 15px;
      border-radius: 12px;
    }
    
    .pricing-card .cta-button {
        /* Shimmer here too */
        margin-top: auto;
        padding: 18px 32px;
        font-size: 1.2rem;
        justify-content: center;
        width: 100%;
    }

    .recording-card {
      background: #fff;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      opacity: 0; 
      animation: scaleIn 0.7s ease-out forwards; 
      border: 1px solid #f0f0f0;
    }
    
    .recording-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
      border-color: #f9bb2b;
    }
    
    .recording-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: #1c7895;
    }
    
    .recording-description {
      color: #64748b;
      font-size: 0.95rem;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    
    .audio-player-container {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 16px;
      margin-top: 20px;
    }
    
    .play-button {
      background: #f9bb2b;
      border: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      color: #1c7895;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(249, 187, 43, 0.3);
    }
    
    .play-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 18px rgba(249, 187, 43, 0.5);
    }
    
    .audio-controls {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .audio-progress-container {
      position: relative;
      height: 6px;
      background: #cbd5e1;
      border-radius: 10px;
      cursor: pointer;
      overflow: hidden;
    }
    
    .audio-progress-bar {
      height: 100%;
      background: #1c7d95;
      border-radius: 10px;
      transition: width 0.1s linear;
    }
    
    .audio-time-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #64748b;
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
      background: #e2e8f0;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    
    .wave-bar.active {
      background: #f9bb2b;
    }
    
    .contact-form-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 60px;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .contact-form {
      background: #fff;
      border-radius: 30px;
      padding: 50px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
      opacity: 0; 
      animation: fadeIn 1s ease-out 0.5s forwards; 
    }
    
    .form-group {
      margin-bottom: 24px;
    }
    
    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 700;
      color: #1c7895;
      font-size: 0.95rem;
    }
    
    .form-input {
      width: 100%;
      padding: 16px 20px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: 'Assistant', sans-serif;
      background-color: #f8fafc;
      color: #1e293b;
    }
    
    .form-input:focus {
      border-color: #f9bb2b;
      background-color: #fff;
      outline: none;
      box-shadow: 0 0 0 4px rgba(249, 187, 43, 0.15); 
    }
    
    .form-textarea {
      min-height: 120px;
      resize: vertical;
    }
    
    .submit-button {
      /* shimmer effect */
      border: none;
      padding: 16px 32px;
      border-radius: 12px;
      color: #1c7895;
      font-size: 1.1rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      box-shadow: 0 10px 25px rgba(249, 187, 43, 0.25);
    }
    
    .submit-button:hover {
      transform: translateY(-3px); 
      box-shadow: 0 15px 35px rgba(249, 187, 43, 0.35);
    }
    
    .keywords-section {
      background: #fff;
      border-radius: 30px;
      padding: 60px;
      text-align: center;
      margin-bottom: 60px;
      opacity: 0; 
      animation: fadeIn 1s ease-out forwards; 
      box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    }
    
    .keywords-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: 35px;
    }
    
    .keyword-tag {
      background: #f1f5f9;
      color: #1c7895;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      opacity: 0; 
      animation: scaleIn 0.6s ease-out forwards; 
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .keyword-tag:hover {
      transform: translateY(-3px); 
      background: #fff;
      border-color: #f9bb2b;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      color: #1c7895;
    }

    .footer-logo {
      height: 70px;
      margin-bottom: 25px;
    }

    .who-is-it-for-section {
        background-color: #fefef9;
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
        width: 100px;
        height: 100px;
        color: #1c7d95;
    }

    .who-is-it-for-section .description {
        font-size: 1.4rem;
        line-height: 1.7;
        color: #334155;
        font-weight: 500;
    }

    .how-it-works-section {
        background-color: #ffffff;
    }
    
    .how-it-works-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 50px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .how-it-works-card {
        background: #f8fafc;
        padding: 45px 35px;
        border-radius: 25px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        transition: all 0.3s ease-out;
        opacity: 0;
        animation: fadeInUp 0.8s ease-out forwards;
        border: 1px solid #e2e8f0;
    }

    .how-it-works-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        border-color: #f9bb2b;
    }
    
    .how-it-works-icon-wrapper {
        position: relative;
        display: inline-block;
        margin-bottom: 25px;
    }

    .how-it-works-icon {
        width: 80px;
        height: 80px;
        padding: 20px;
        background: #f9bb2b;
        color: #1c7895;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px rgba(249, 187, 43, 0.3);
    }

    .how-it-works-step-number {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #1c7895;
        color: #fefef9;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 1.1rem;
        border: 3px solid #fefef9;
    }

    .how-it-works-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1c7895;
        margin-bottom: 15px;
    }

    .how-it-works-description {
        font-size: 1.1rem;
        color: #64748b;
        line-height: 1.6;
    }

    /* FAQ Section Styles */
    .faq-section {
      background-color: #fefef9;
    }
    .faq-container {
      max-width: 900px;
      margin: 0 auto;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.4s forwards;
    }
      .highlight {
      font-weight: 800;
      color: #1c7895;
    }

    /* MUI Accordion RTL styling */
    .MuiAccordion-root {
      margin-bottom: 20px !important;
      border-radius: 16px !important;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03) !important;
      direction: rtl;
      background-color: #ffffff !important;
      border: 1px solid #f1f5f9;
    }
    .MuiAccordion-root:before {
        display: none !important;
    }

    .MuiAccordionSummary-root {
      padding: 16px 24px !important;
      background-color: #ffffff !important;
      border-radius: 16px !important;
    }
    
    .MuiAccordion-root.Mui-expanded .MuiAccordionSummary-root {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-bottom: 1px solid #f1f5f9;
    }

    .MuiAccordionSummary-content {
      font-family: 'Assistant', sans-serif !important;
      font-size: 1.15rem !important;
      font-weight: 700 !important;
      color: #1c7895 !important;
    }

    .MuiAccordionDetails-root {
      padding: 24px !important;
      font-family: 'Assistant', sans-serif !important;
      font-size: 1.05rem !important;
      line-height: 1.7 !important;
      color: #4a5568 !important;
      opacity: 1;
      text-align: right;
    }

    .MuiSvgIcon-root {
      color: #f9bb2b !important;
      font-size: 1.8rem !important;
    }

    .footer {
        background: #104252; /* Darker shade */
        color: #fefef9;
        padding: 80px 20px 40px;
        text-align: center;
        opacity: 0;
        animation: fadeIn 1s ease-out 0.5s forwards;
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
      color: #cbd5e1;
      margin-bottom: 40px;
    }
    
    .footer .founders-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin: 30px 0;
    }

    .footer .founder-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 30px;
      text-align: right;
      transition: transform 0.3s ease;
      animation: none;
      opacity: 1;
    }

    .footer .founder-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
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
      color: #e2e8f0;
    }

    .footer .mission-text {
      font-size: 1.3rem;
      font-weight: 600;
      color: #fefef9;
      line-height: 1.7;
      margin: 50px 0;
      padding: 40px;
      background: linear-gradient(to left, rgba(28, 120, 149, 0.5), transparent);
      border-radius: 20px;
      border-right: 5px solid #f9bb2b;
      animation: none;
      opacity: 1;
    }

    .clients-section {
      padding: 80px 0;
      background-color: #fefef9;
      overflow: hidden;
    }

    .logo-slider-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: 40px 0;
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
      background: linear-gradient(to right, #fefef9, transparent);
    }

    .logo-slider-container::after {
      right: 0;
      background: linear-gradient(to left, #fefef9, transparent);
    }

    .logo-slider-track {
      display: flex;
      animation: logoSlide 25s linear infinite;
      width: calc(200% + 40px);
    }

    .logo-item {
      flex-shrink: 0;
      height: 100px;
      margin: 0 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
      padding: 20px 40px;
      transition: transform 0.3s ease;
      min-width: 220px;
      border: 1px solid #f1f5f9;
    }

    .logo-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .logo-item-text {
      font-size: 1.3rem;
      font-weight: 700;
      color: #94a3b8;
      text-align: center;
      white-space: nowrap;
      transition: color 0.3s;
    }
    .logo-item:hover .logo-item-text {
        color: #1c7895;
    }
    
    @media (max-width: 992px) {
        .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 280px;
            background-color: #1c7895;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.77,0,0.175,1);
            padding-top: 60px;
            box-shadow: -10px 0 30px rgba(0,0,0,0.2);
        }
        
        .nav-links.open {
            transform: translateX(0);
        }
        
        .nav-links li {
            width: 100%;
            text-align: center;
            padding: 20px 0;
        }

        .menu-toggle {
            display: block;
            z-index: 1001;
        }
    }

    @media (max-width: 768px) {
    .main-header {
        padding: 10px 15px; /* Mobile Padding Fix */
      }
      
    .nav-links {
      gap:1px;
    }
    
      .hero-section {
        padding: 100px 20px 60px;
      }
      .how-it-works-grid {
          grid-template-columns: 1fr; /* 1 per row on mobile */
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
        padding: 60px 20px;
      }

      .section-full-width {
        padding: 60px 0;
      }

      .section-full-width .section-content {
        max-width: none;
        padding: 0 20px;
      }
      
      .pricing-grid {
        grid-template-columns: 1fr;
        gap: 30px;
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
        <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '10px', textAlign: 'center', color: '#1c7895' }}>
          בואו נתחיל לעבוד יחד
        </h3>
        <p style={{textAlign: 'center', marginBottom: '30px', color: '#64748b'}}>מלאו את הפרטים ונציג (אנושי!) יחזור אליכם</p>

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
            placeholder="שם העסק (אופציונלי)"
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

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: "גפן ביטוחים", id: "gefen" },
    { name: "Samsung", id: "samsung" },
    { name: "Apple", id: "apple" },
    { name: "OpenAI", id: "openai" },
    { name: "מגדל חברה לביטוח", id: "migdal" },
    { name: "אלקטרה מוצרי צריכה", id: "electra" },
  ];
  const duplicatedClientLogos = [...clientLogos, ...clientLogos];


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
      title: "סוכנות ביטוח - גפן ביטוחים",
      description: "בירור בדיקת תיק ביטוחים",
      audioSrc: gefenUrl
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
    {
      title: "סקר פוליטי",
      description: "סקר פוליטי שבודק שביעות רצון",
      audioSrc: politic
    }

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

  return (
    <div style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>
      <div style={{ display: 'none' }}>
        Bot 10 הוא סוכן קולי AI בעברית המסנן לידים, מתאם פגישות ומעניק שירות לקוחות 24/7
        למשרדי נדל״ן, קליניקות, חברות SaaS וכל עסק שמקבל שיחות.
        AI-Voice-Bot-Israel, AI voice
      </div>
      <CustomStyles />
      <AccessibilityButton />
      <CookiePopup />

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
            
            <img src={updatedLogo} alt="Bot 10 - סוכן קולי AI חכם בעברית למכירות ושירות 24/7" className="logo-image" />
            <h1 className="main-title">הכירו את Bot 10 </h1>
            <p className="subtitle">
              אם אתה רוצה שליטה מלאה בשיחות - גם כשאתה עסוק, בחו"ל או ישן,
              זה הזמן להכיר את <strong>BOT10</strong>.
              <br/>
              העוזר הקולי שמדבר כמו בן אדם, עובד 24/7, וסוגר לך פינות.
            </p>
            <div className="hero-buttons-container">
              <a href="#contact" className="cta-button btn-shimmer">
                <Sparkles size={20} />
                בואו נתחיל לעבוד
              </a>
              <a href="#recordings" className="cta-button-secondary">
                שמעו דוגמאות
                <Play size={18} />
              </a>
            </div>
          </div>

          <div className="hero-mascot">
            <img
              src={other_logo}
              alt="Bot 10 – בוט טלפוני בעברית שמנהל שיחות עסקיות אוטומטיות"
              className="mascot-image"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section - Glassmorphism */}
      <section id="features" className="section" style={{ backgroundColor: '#fefef9' }}>
        <h2 className="section-title">למה Bot 10?</h2>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
             <img src={power} alt="למה לבחור ב-Bot 10? יתרונות העוזר הקולי שלנו" className='logo-image' style={{maxHeight: '120px'}} />
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
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

      <section id="who-is-it-for" className="section who-is-it-for-section">
        <div className="content-wrapper">
          <h2 className="section-title" style={{ marginBottom: '30px' }}>סרטון לדוגמא</h2>
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
                src="https://youtube.com/embed/_G0T0kF9NOA"
                title="Bot 10 AI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section id="who-is-it-for" className="section who-is-it-for-section">
        <div className="content-wrapper">
          <h2 className="section-title" style={{ marginBottom: '30px' }}>למי זה מתאים?</h2>
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

      {/* How it works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <h2 className="section-title">איך זה עובד? שותפות להצלחה</h2>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
             <img src={how_it} alt="תהליך העבודה" className="logo-image" style={{maxHeight: '100px'}} />
        </div>
        <div className="how-it-works-grid">
          {howItWorksSteps.map((step, index) => (
            <div className="how-it-works-card" key={index} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
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
        <h2 className="section-title">שותפים לדרך ולקוחות מובילים</h2>
        <div className="logo-slider-container">
          <div className="logo-slider-track">
            {duplicatedClientLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item">
                <span className="logo-item-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-full-width" style={{ background: '#f8fafc' }}>
        <div className="section-content">
          <h2 className="section-title">החבילות שלנו </h2>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
             <img src={prices_logo} alt="חבילות מחיר לבוט קולי" className="logo-image" style={{maxHeight: '80px'}} />
          </div>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <h3 className="pricing-title">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                </div>

                <span style={{ fontSize: '1rem', fontWeight: '500', color: '#64748b', marginBottom: '20px', display:'block' }}>
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
                      color: '#1c7895',
                      textDecoration: 'none',
                      borderBottom: '2px solid #f9bb2b'
                    }}
                  >
                    🤔 חושב שזה יקר? בוא למחשבון
                  </Link>
                </div>
              </div>

            ))}
          </div>

          {/* Services Grid (Keeping similar structure but updated styling) */}
          <div style={{
            background: '#fff',
            borderRadius: '30px',
            padding: '60px 40px',
            margin: '60px auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f1f5f9',
            maxWidth: '1200px'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#1c7895'
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
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1e293b' }}>
                  הצעת מכירה / סינון לידים
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
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
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1e293b' }}>
                  מזכירה קולית
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
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
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1e293b' }}>
                  טיפול בהזמנות
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
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
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1e293b' }}>
                    איסוף דאטה
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
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
        </div>
      </section>

      {/* Recordings Section */}
      <section id="recordings" className="section" style={{ backgroundColor: '#fefef9' }}>
        <h2 className="section-title">שמעו את הבוט שלנו בפעולה</h2>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
             <img src={record_image} alt="דוגמאות הקלטות" className="logo-image" style={{maxHeight: '100px'}} />
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
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
        <h2 className="section-title"> שאלות ותשובות </h2>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
             <img src={qa_logo} alt="שאלות נפוצות" className="logo-image" style={{maxHeight: '80px'}} />
        </div>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant="h6" style={{fontFamily: 'Assistant', fontWeight: 'bold'}}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Keywords Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="keywords-section">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#1c7895' }}>
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
          <h2 className="section-title">הסיפור שלנו</h2>

          <div className="about-story">
            <p>
              אנחנו ערן ומושיק, שני חברים שהכירו לגמרי במקרה בטיול אחרי צבא, התחברנו בזכות האהבה לחדשנות ורצון אחד פשוט - לעזור לבעלי עסקים להצליח!
            </p>
          </div>

          <div className="founders-section">
            <div className="founder-card">
              <h3 className="founder-name">ערן</h3>
              <p className="founder-description">
                מהנדס תעשייה וניהול עם ניסיון חוצה ארגונים בשיפור תהליכים והובלת פרויקטים, מנהל חברת שיווק שמלווה וחושפת עסקים בדיגיטל.
              </p>
            </div>

            <div className="founder-card">
              <h3 className="founder-name">מושיק</h3>
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
      <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, #1c7895, #155e75)' }}>
        <ContactForm />
      </section>

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
            <p>© 2025 Bot 10. כל הזכויות שמורות. | <Link to="/accessibility" style={{ color: '#fefef9', textDecoration: 'underline' }}>הצהרת נגישות</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}