import { useState, useRef, useEffect } from 'react';
import { Phone, Database, CheckCircle, Play, Pause, Mail, MessageSquare, Star, Zap, Users, BarChart3, Clock, Menu, X, ClipboardCheck, DraftingCompass, FlaskConical, Rocket } from 'lucide-react';
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
      background: #1c7895;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* SEO Keywords - Hidden but crawlable */
    .seo-keywords {
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      overflow: hidden;
      color: transparent;
      font-size: 1px;
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
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
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
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
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
      background-color: rgba(7, 69, 92, 0.8);
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
      background: linear-gradient(135deg, #1c7895, #1c7d95);
      background-size: 200% 200%;
      animation: waveAnimation 15s ease infinite;
      color: #fefef9;
      padding: 120px 20px 80px;
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
    }

    .mascot-image {
      max-width: 300px;
      height: auto;
      animation: float 3s ease-in-out infinite;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
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
      text-shadow: 0 2px 10px rgba(0,0,0,0.2); 
      line-height: 1.2;
    }
    
    .subtitle {
      font-size: clamp(1.25rem, 4vw, 1.5rem);
      margin-bottom: 30px;
      max-width: 750px;
      line-height: 1.1;
      text-shadow: 0 1px 5px rgba(0,0,0,0.15);
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
        flex-direction: row; /* Side-by-side on larger screens */
        justify-content: center;
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
      background: #f9bb2b;
      color: #1c7895;
      box-shadow: 0 10px 30px rgba(249, 187, 43, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 15px 40px rgba(249, 187, 43, 0.4);
    }

    .cta-button-secondary {
      background: transparent;
      color: #fefef9;
      border: 2px solid #f9bb2b;
    }

    .cta-button-secondary:hover {
      background: #f9bb2b;
      color: #1c7895;
      transform: translateY(-3px) scale(1.03);
    }
    
    .section {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-full-width {
      padding: 80px 0;
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
      margin-bottom: 10px;
      color: #1c7895;
      line-height: 1.2;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }
    
    .feature-card {
      background: #fefef9;
      padding: 40px;
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid rgba(0,0,0, 0.05);
      opacity: 0; 
      animation: scaleIn 0.7s ease-out forwards; 
    }
    
    .feature-card:hover {
      transform: translateY(-10px) scale(1.02); 
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      background: #f9bb2b;
      color: #1c7895;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      transition: transform 0.3s ease-out; 
    }

    .feature-card:hover .feature-icon {
      transform: rotate(-15deg) scale(1.1); 
    }
    .service-icon-hover {
      transition: transform 0.3s;
    }
    .service-icon-hover:hover {
      transform: rotate(-15deg) scale(1.1);
    }
    .feature-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: #1c7895;
    }
    
    .feature-description {
      color: #1c7895;
      opacity: 0.8;
      line-height: 1.6;
      font-size: 1.1rem;
    }
    .whatsapp-float {
      bottom: 20px;
      right: 20px;
      background-color: #25d366;
      border-radius: 50%;
      padding: 12px;
      z-index: 9999;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      transition: transform 0.3s ease;
      animation: whatsappPulse 1.5s infinite;
    }
    @keyframes whatsappPulse {
      0%, 100% { transform: scale(1);}
      50% { transform: scale(1.18);}
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
    }

    .whatsapp-icon {
      width: 30px;
      height: 30px;
      display: block;
    }
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
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
      background: #fefef9;
      border-radius: 24px;
      padding: 50px;
      position: relative;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      opacity: 0; 
      animation: fadeInUp 0.7s ease-out forwards; 
      text-align: right;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }
    
    .pricing-card.featured {
      border: 2px solid #f9bb2b;
      transform: scale(1.05); 
      box-shadow: 0 30px 80px rgba(249, 187, 43, 0.2);
      position: relative;
    }
    .pricing-card.featured::before {
      content: '🏆';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #f9bb2b;
      color: #1c7895;
      padding: 10px 15px;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: 700;
      box-shadow: 0 5px 20px rgba(249, 187, 43, 0.3);
    }
    .pricing-card.featured:hover { 
      transform: translateY(-5px) scale(1.07); 
    }
    
    .pricing-card:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    }
    
    .pricing-badge {
      background: linear-gradient(45deg, #1c7895, #1c7d95);
      color: #fefef9;
      padding: 10px 28px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 24px;
      display: inline-block;
      align-self: flex-start;
    }
    
    .pricing-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #1c7895;
    }
    
    .pricing-price {
      font-size: 3.8rem;
      font-weight: 900;
      color: #f9bb2b;
      margin-bottom: 30px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      position: relative;
    }
    
    .pricing-features, .pricing-sub-features {
      list-style: none;
      padding: 0;
      margin-bottom: 25px;
    }
    
    .pricing-features li, .pricing-sub-features li {
      padding: 10px 0;
      display: flex;
      align-items: center;
      gap: 15px;
      color: #1c7895;
      font-size: 1.05rem;
    }
    
    .recordings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }
    
    .pricing-section-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1c7895;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    .pricing-suitable-for {
      color: #1c7895;
      opacity: 0.8;
      margin-bottom: 20px;
      font-size: 1.05rem;
      line-height: 1.6;
    }
    
    .pricing-card .cta-button {
        background: #f9bb2b;
        color: #1c7895;
        box-shadow: 0 10px 30px rgba(249, 187, 43, 0.3);
        margin-top: auto;
        padding: 18px 32px;
        font-size: 1.2rem;
    }

    .pricing-card .cta-button:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 20px 40px rgba(249, 187, 43, 0.4);
    }

    .recording-card {
      background: #fefef9;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      opacity: 0; 
      animation: scaleIn 0.7s ease-out forwards; 
    }
    
    .recording-card:hover {
      transform: translateY(-5px) scale(1.03);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    }
    
    .recording-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: #1c7895;
    }
    
    .recording-description {
      color: #1c7895;
      opacity: 0.8;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .audio-player-container {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #ffffff;
      border: 1px solid rgba(0,0,0,0.05);
      border-radius: 12px;
      padding: 15px;
      margin-top: 20px;
    }
    
    .play-button {
      background: #f9bb2b;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #1c7895;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .play-button:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 25px rgba(249, 187, 43, 0.4);
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
      background: #e2e8f0;
      border-radius: 3px;
      cursor: pointer;
    }
    
    .audio-progress-bar {
      height: 100%;
      background: #1c7d95;
      border-radius: 3px;
      transition: width 0.1s ease;
    }
    
    .audio-time-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: #1c7895;
      opacity: 0.7;
    }
    
    .audio-wave-visualization {
      display: flex;
      align-items: center;
      gap: 2px;
      height: 30px;
      flex: 1;
    }
    
    .wave-bar {
      width: 3px;
      background: #cbd5e1;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    
    .wave-bar.active {
      background: #1c7d95;
    }
    
    .contact-form-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 40px;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
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
    
    .keywords-section {
      background: #fefef9;
      border-radius: 24px;
      padding: 50px;
      text-align: center;
      margin-bottom: 60px;
      opacity: 0; 
      animation: fadeIn 1s ease-out forwards; 
    }
    
    .keywords-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-top: 30px;
    }
    
    .keyword-tag {
      background: #1c7d95;
      color: #fefef9;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      opacity: 0; 
      animation: scaleIn 0.6s ease-out forwards; 
      transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    }

    .keyword-tag:hover {
      transform: scale(1.1) rotate(2deg); 
      background: #f9bb2b;
      color: #1c7895;
    }

    .footer-logo {
      height: 60px;
      margin-bottom: 20px;
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
        font-size: 1.3rem;
        line-height: 1.7;
        color: #1c7895;
    }

    .how-it-works-section {
        background-color: #ffffff;
    }
    
    .how-it-works-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 40px;
        max-width: 980px;
        margin: 0 auto;
    }

    .how-it-works-card {
        background: #fefef9;
        padding: 40px 30px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease-out;
        opacity: 0;
        animation: fadeInUp 0.8s ease-out forwards;
    }

    .how-it-works-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
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
    }

    .how-it-works-step-number {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #1c7895;
        color: #fefef9;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1rem;
        border: 2px solid #fefef9;
    }

    .how-it-works-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1c7895;
        margin-bottom: 15px;
    }

    .how-it-works-description {
        font-size: 1.05rem;
        color: #1c7895;
        opacity: 0.8;
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
      font-weight: bold;
    }

    /* MUI Accordion RTL styling */
    .MuiAccordion-root {
      margin-bottom: 16px !important;
      border-radius: 12px !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
      direction: rtl;
      background-color: #ffffff !important;
    }

    .MuiAccordionSummary-root {
      padding: 20px 24px !important;
      background-color: #ffffff !important;
      border-radius: 12px !important;
    }
    
    .MuiAccordion-root.Mui-expanded .MuiAccordionSummary-root {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    .MuiAccordionSummary-content {
      font-family: 'Assistant', sans-serif !important;
      font-size: 1.1rem !important;
      font-weight: 600 !important;
      color: #1c7895 !important;
    }

    .MuiAccordionDetails-root {
      padding: 20px 24px !important;
      font-family: 'Assistant', sans-serif !important;
      font-size: 1rem !important;
      line-height: 1.6 !important;
      color: #1c7895 !important;
      opacity: 0.9;
      text-align: right;
    }

    .MuiSvgIcon-root {
      color: #1c7d95 !important;
    }

    .footer {
        background: #1c7895;
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
      font-size: 1.1rem;
      line-height: 1.8;
      color: #fefef9;
      opacity: 0.9;
      margin-bottom: 30px;
    }
    
    .footer .founders-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin: 30px 0;
    }

    .footer .founder-card {
      background: #1c7d95;
      border-radius: 20px;
      padding: 30px;
      text-align: right;
      transition: transform 0.3s ease;
      animation: none;
      opacity: 1;
    }

    .footer .founder-card:hover {
      transform: translateY(-5px);
    }

    .footer .founder-name {
      font-size: 1.4rem;
      font-weight: 700;
      color: #f9bb2b;
      margin-bottom: 10px;
    }

    .footer .founder-description {
      font-size: 1.05rem;
      line-height: 1.6;
      color: #fefef9;
      opacity: 0.9;
    }

    .footer .mission-text {
      font-size: 1.2rem;
      font-weight: 600;
      color: #fefef9;
      line-height: 1.7;
      margin: 30px 0;
      padding: 30px;
      background: #1c7d95;
      border-radius: 20px;
      border-right: 4px solid #f9bb2b;
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
      width: 100px;
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
      animation: logoSlide 20s linear infinite;
      width: calc(200% + 40px);
    }

    .logo-item {
      flex-shrink: 0;
      height: 80px;
      margin: 0 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      padding: 20px 30px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      min-width: 200px;
    }

    .logo-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }

    .logo-item-text {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1c7895;
      text-align: center;
      white-space: nowrap;
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
            transition: transform 0.4s ease-in-out;
            padding-top: 60px;
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
      .hero-section {
        padding: 80px 20px 60px;
      }
      .how-it-works-grid {
          grid-template-columns: 1fr; /* 1 per row on mobile */
      }
      
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 20px;
      }

      .hero-text-content {
        order: 2;
      }

      .hero-mascot {
        order: 1;
      }

      .mascot-image {
        max-width: 200px;
      }

      .hero-buttons-container {
        align-items: center;
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
            <Pause size={20} />
          ) : (
            <Play size={20} />
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

        <button type="submit" className="submit-button">
          שלח פנייה
        </button>
      </form>

      <div style={{ justifySelf: 'center' }}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/528e0dac3_WhatsAppImage2025-06-19at175252.jpeg"
          alt="צור קשר עם צוות Bot 10 להטמעת עוזר קולי AI בעסק שלך"
          style={{
            maxWidth: '300px',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            animation: 'float 3s ease-in-out infinite'
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
      title: "סינון לידים אוטומטי וחסכון בעלויות",
      description: "המערכת תסנן עבורכם לידים נכנסים באופן אוטומטי, ובכך תחסכו זמן יקר לנציגים אנושיים ותצמצמו משמעותית את עלויות מוקד השירות"
    },
    {
      icon: Zap,
      title: "השעיר לעזאזל שאתם צריכים כדי להשאר עם לידים חמים",
      description: "העוזר הקולי עושה בשבילכם את העבודה הקשה – מתקשר ללידים קרים, סופג ניתוקים ומסנן את הלא מתעניינים. אתם מקבלים רק את הלידים החמים, בלי בזבוז זמן ובלי לחץ על הצוות."
    },
    {
      icon: MessageSquare,
      title: "בוט AI חכם שמתמודד עם כל אתגר",
      description: "הבוט מתמודד ביעילות עם שאלות לא צפויות, מתנסח בחופשיות, פונה לשני המינים בכל טון וגוון קול נדרש"
    },
    {
      icon: Star,
      title: "יכולות שירות ומכירה ברמה גבוהה",
      description: "הבוט מסוגל לנהל שיחות שירות ומכירה מתקדמות ביעילות של 1:10 לעומת נציג אנושי הוא לא מתעייף וזמן הטיפול מתקצר משמעותית!"
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
      description: "התהליך מתחיל באפיון מעמיק על ידי צוות מקצועי עם רקע טכני והנדסי ב-AI, שיגיע אליכם להבנת כל הצרכים העסקיים שלכם."
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
      {/* <div className="seo-keywords">
        BOT10 בוט10 בוט 10 BOT10 עוזר קולי עוזר קולי BOT10 בוט שירות BOT10 שיחות יוצאות שיחות נכנסות תיאום פגישות קביעת פגישות סינון לידים טיפול אוטומטי בשיחות מענה אוטומטי לשיחות חזרה ללידים פספוס לידים לידים מפוספסים אין זמן לחזור לפניות לא מספיקים לענות שיחות שלא נענו אובדן לקוחות פוטנציאליים עלות מוקדנים גבוהה עומס שיחות במוקד מחסור בכוח אדם במוקד שחיקת נציגי שירות אין מענה אחרי שעות העבודה זמני המתנה ארוכים בוט קולי בוט טלפוני עוזר קולי עוזר טלפוני נציג וירטואלי מוקדן וירטואלי עוזר וירטואלי צאטבוט קולי צאט בוט קולי רובוט טלפוני מענה קולי אוטומטי מענה טלפוני אוטומטי נתב שיחות אוטומטי מוקד טלפוני אוטומטי שירות לקוחות אוטומטי מענה טלפוני 24/7 מזכירה וירטואלית מזכירה אוטומטית עוזרת קולית סוכן וירטואלי נציג אוטומטי עוזר קולי חכם בינה מלאכותית AI עיבוד שפה טבעית NLP זיהוי דיבור אוטומטי זיהוי קולי המרת טקסט לדיבור TTS למידת מכונה
      </div> */}

      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px', // Controls the space between icons
        }}>
          <a
            href="https://wa.me/972526134734?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%93%D7%A3%20%D7%94%D7%A0%D7%97%D7%99%D7%AA%D7%94%20%D7%A9%D7%9C%20BOT%2010%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%0A%D7%90%D7%99%D7%9A%20%D7%94%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA%20%D7%A2%D7%95%D7%91%D7%93%D7%AA%3F%20%D7%95%D7%90%D7%99%D7%96%D7%95%20%D7%97%D7%91%D7%99%D7%9C%D7%94%20%D7%94%D7%9B%D7%99%20%D7%9E%D7%AA%D7%90%D7%99%D7%9E%D7%94%20%D7%9C%D7%99%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Bot 10 - סוכן קולי AI חכם"
              className="whatsapp-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/bot10.agent/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            style={{
              backgroundColor: '#E1306C',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,.25)',
              pointerEvents: 'auto',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.28.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61579199033129"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            style={{
              backgroundColor: '#1877F2',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,.25)',
              pointerEvents: 'auto',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
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
              כמה לידים הלכו לאיבוד כי לא הספקת לענות?
              <br></br>
              כמה עסקאות נפלו כי לא חזרת בזמן?
              <br></br>
              וכמה כסף אתה מבזבז על מוקדנים או מזכירה שלא מספיקים לעמוד בקצב?
              <br></br>
              <br></br>
              אם אתה רוצה שליטה מלאה בשיחות - גם כשאתה עסוק, בחו"ל או ישן,
              <br></br>
              זה הזמן להכיר את  BOT10
              <br></br>
              העוזר הקולי מבוסס AI, זמין 24/7 ומדבר כמו סוכן אמיתי!
              <br></br>
              <br></br>
              תן לBOT10 לעבוד בשבילך - ואתה תתמקד בלסגור עסקאות.
            </p>
            <div className="hero-buttons-container">
              <a href="#contact" className="cta-button">
                <MessageSquare size={24} />
                בואו נתחיל לעבוד
              </a>
              <a href="#contact" className="cta-button-secondary">
                <CheckCircle size={20} />
                בדיקת התאמה ופרטים נוספים
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
      {/* Features Section */}
      <section id="features" className="section" style={{ backgroundColor: '#fefef9' }}>
        <h2 className="section-title">למה Bot 10?</h2>
        <img src={power} alt="למה לבחור ב-Bot 10? יתרונות העוזר הקולי שלנו" className='logo-image' />

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="feature-icon">
                <feature.icon size={40} />
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
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#4c51bf', fontWeight: 600 }}>
              צפו בדוגמה לסוכן קול AI מתקדם בפעולה:
            </p>
            <iframe
              width="360"
              height="640"
              src="https://youtube.com/embed/_G0T0kF9NOA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 10px 24px rgba(76,81,191,0.12)' }}
            ></iframe>
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
            <span className="highlight"> חוסך משאבים</span> ומבטיח שאף<span className="highlight"> לקוח פוטנציאלי </span>לא ילך לאיבוד,
            בזכות <span className="highlight">מענה מיידי וחכם בכל עת</span>.
          </p>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <h2 className="section-title">איך זה עובד? שותפות להצלחה</h2>
        <img src={how_it} alt="ארבעה שלבים להטמעת סוכן קולי AI בעסק שלכם" className="logo-image" />
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
      <section id="pricing" className="section-full-width" style={{ background: '#ffffff' }}>
        <div className="section-content">
          <h2 className="section-title">החבילות שלנו </h2>
          <img src={prices_logo} alt="חבילות מחיר לבוט קולי AI – Basic, Pro ו-Enterprise" className="logo-image" />
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

                <span style={{ fontSize: '1.1rem', fontWeight: '400', color: '#1c7895', opacity: 0.8 }}>
                  {plan.period}
                </span>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={22} style={{ color: '#1c7d95', flexShrink: 0 }} />
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
                      <CheckCircle size={22} style={{ color: '#1c7d95', flexShrink: 0 }} />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>

                <a href='#contact' className="cta-button" style={{ width: '100%' }} >
                  בחר חבילה זו
                </a>
                <div style={{ marginBottom: '20px', marginTop: '40px' }}>
                  <Link
                    to="/cost-calculator"
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1c7895',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    🤔 חושב שזה יקר? בוא למחשבון: בוט מול מזכירה
                  </Link>
                </div>
              </div>

            ))}
          </div>

          <div style={{
            background: '#fefef9',
            borderRadius: '24px',
            padding: '50px',
            margin: '40px 0',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
          }}>
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#1c7895'
            }}>
              השירותים שלנו
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div className="service-icon-hover" style={{
                  width: '70px',
                  height: '70px',
                  background: '#f9bb2b',
                  color: '#1c7895',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Star size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1c7895' }}>
                  הצעת מכירה / סינון לידים
                </h4>
                <p style={{ color: '#1c7895', opacity: 0.8, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  הבוט יבצע שיחות מכירה מקצועיות ויסנן לידים באיכות גבוהה עבורכם
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div className="service-icon-hover" style={{
                  width: '70px',
                  height: '70px',
                  background: '#f9bb2b',
                  color: '#1c7895',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Phone size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1c7895' }}>
                  מזכירה קולית
                </h4>
                <p style={{ color: '#1c7895', opacity: 0.8, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  קביעת פגישות, העברת הודעות וטיפול בפניות בסיסיות של לקוחות
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div className="service-icon-hover" style={{
                  width: '70px',
                  height: '70px',
                  background: '#f9bb2b',
                  color: '#1c7895',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <MessageSquare size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1c7895' }}>
                  טיפול בהזמנות
                </h4>
                <p style={{ color: '#1c7895', opacity: 0.8, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  קבלת הזמנות מלקוחות, רישום פרטים והעברה למערכות הרלוונטיות
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div className="service-icon-hover" style={{
                  width: '70px',
                  height: '70px',
                  background: '#f9bb2b',
                  color: '#1c7895',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Database size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1c7895' }}>
                  איסוף מידע בסיסי/מורחב
                </h4>
                <p style={{ color: '#1c7895', opacity: 0.8, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  איסוף נתונים מלקוחות לפי הצרכים שלכם - מבסיסי ועד מפורט
                </p>
              </div>
              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div className="service-icon-hover" style={{
                  width: '70px',
                  height: '70px',
                  background: '#f9bb2b',
                  color: '#1c7895',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Users size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1c7895' }}>
                  שירות מותאם אישית
                </h4>
                <p style={{ color: '#1c7895', opacity: 0.8, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  הבוט יודע את כל המידע על הלקוחות שלכם כמו נציג שירות על סטרואידים
                </p>
              </div>
              <div>
                <a href='#contact' >
                  <img src={leaveDetailes} alt="השאר פרטים לייעוץ חינם על בוט קולי AI בעברית" className="leave-details-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recordings Section */}
      <section id="recordings" className="section" style={{ backgroundColor: '#fefef9' }}>
        <h2 className="section-title">שמעו את הבוט שלנו בפעולה</h2>
        <img src={record_image} alt="דוגמאות הקלטות של בוט קולי AI מדבר עברית – גפן ביטוחים, עורך דין, פיצה ועוד" className="logo-image" />
        <p style={{ textAlign: 'center', fontSize: '1.19rem', color: '#1c7895', opacity: 0.8, marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px', opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
          הקלטות אמיתיות במגוון קולות שהבוט שלנו מבצע. שימו לב לטבעיות, המקצועיות והיכולת להתמודד עם מצבים שונים
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
        <img src={qa_logo} alt="שאלות נפוצות על בוט טלפוני בעברית – Bot 10" className="logo-image" />
        <div className="faq-container">
          {faqData.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography>{item.question}</Typography>
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
      <section className="section" style={{ backgroundColor: '#fefef9' }}>
        <div className="keywords-section">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#1c7895' }}>
            למה אנחנו מובילים בתחום?

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
                ניסיון של 8 שנים בליווי 400+ עסקים
              </p>
            </div>

            <div className="founder-card">
              <h3 className="founder-name">מושיק</h3>
              <p className="founder-description">
                מפתח תוכנה ומומחה לאוטומציות ששם לו למטרה לחסוך לבעלי עסקים עד 80% מהזמן והעלויות בעזרת פתרונות חכמים מותאמים אישית.
                מפתח Full-Stack ומומחה NLP שבנה מערכות AI לחברות Fortune-500.
              </p>
            </div>
          </div>

          <div className="about-story">
            <p>
              במהלך הליווי השיווקי לעסקים הבנו את הכאב שחוזר שוב ושוב - לידים נופלים בין הכיסאות, לקוחות מאוכזבים לא זוכים למענה, זמן שווה כסף - והכול מתבזבז על משאבים לא יעילים.
            </p>
            <br />
            <p>
              <strong>ככה נולד BOT10</strong> – העוזר הקולי החכם שמחליף את השיחה האנושית, אבל נשמע בדיוק כמוה.
            </p>
            <br />
            <p>
              הוא עונה, יוזם, מנהל שיחה, מתמלל שיחות - ועובד 24/7.
              ולא כמו פתרונות אחרים בשוק, הוא לא מדקלם תסריטים קבועים, אלא מנהל שיחה אמיתית, זורמת, מותאמת אישית לעסק שלך בטון, בשפה, ואפילו בגוון קול שונה. אתם חייבים לשמוע את הדוגמאות שלנו!
            </p>
          </div>

          <div className="mission-text">
            אנחנו מאמינים שהעתיד שייך למי שמאמין בשינוי ומוכן לאמץ אותו.
            <br />
            BOT10 לא רק חוסך זמן וכסף - הוא מחזיר שליטה לידיים שלך.
            <br /><br />
            <strong>בואו נדבר, ונראה איך גם העסק שלכם יכול לגדול עם העוזר הקולי החכם שלנו</strong>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, #1c7895, #1c7d95)' }}>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="footer">


        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <img src={updatedLogo} alt="לוגו Bot 10 – סוכן קולי AI חכם לעסקים בעברית" className="footer-logo" />
          <p style={{ fontSize: '1.1rem', opacity: '0.8', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            המהפכה בתקשורת עסקית מתחילה כאן. סוכן AI קולי שמבין עברית ומספק שירות ברמה אנושית מלאה
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={20} />
                <a href="mailto:bot10.info@gmail.com" style={{ textDecoration: 'none', color: '#fefef9' }}>
                  bot10.info@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={20} />
                <a href="tel:+972526134734" style={{ textDecoration: 'none', color: '#fefef9' }}>
                  052-6134734
                </a>
              </div>
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