
import React, { useState, useRef, useEffect } from 'react';
import { Phone, Upload, Database, CheckCircle, Play, Pause, Mail, MessageSquare, Star, Zap, Globe, Users, BarChart3, Clock, Menu, X, ClipboardCheck, DraftingCompass, FlaskConical, Rocket } from 'lucide-react'; // Add new icons
import gefenUrl from './gefen_record.mp3?url';
import law_office from './law_office.mp3?url';
import pizza from './pizza_miami.mp3?url';
import jobRecruit from './Job_Recruit.mp3?url';
import course_agent from './course_agent.mp3?url';
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
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      overflow-x: hidden; /* Prevent horizontal scroll during animations */
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
      direction: ltr; /* Header direction is LTR for correct flex layout */
    }

    .main-header.scrolled {
      background-color: rgba(26, 35, 51, 0.8);
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
      direction: rtl; /* Set direction for links content within LTR container */
    }

    .nav-links a {
      color: white;
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
      background-color: #10b981;
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: #10b981;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
    }
    
    .hero-section {
      background: linear-gradient(135deg, #667eea, #764ba2, #8A2BE2, #4B0082); /* Darker, more vibrant purple wave */
      background-size: 300% 300%; /* Increased size for smoother wave */
      animation: waveAnimation 15s ease infinite; /* Slower, smoother wave */
      color: white;
      padding: 120px 20px 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); /* Reduced grain opacity */
      opacity: 0.1; /* Further reduced opacity */
      z-index: 0; /* Ensure grain is behind content */
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-content > * { /* Apply to direct children of hero-content */
      opacity: 0; /* Initial state for animation */
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .logo-image {
      max-height: 120px;
      margin-bottom: 24px;
      animation-delay: 0.2s !important;
    }
    
    .main-title {
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 800;
      margin-bottom: 24px;
      background: linear-gradient(45deg, #ffffff, #f0f2ff); 
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2); 
      line-height: 1.2;
      animation-delay: 0.2s !important; 
    }
    
    .subtitle {
      font-size: clamp(1.25rem, 4vw, 1.5rem);
      margin-bottom: 40px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      text-shadow: 0 1px 5px rgba(0,0,0,0.15); 
      animation-delay: 0.4s !important;
    }

    .hero-buttons-container {
      display: flex;
      flex-direction: column; /* Stack buttons on mobile */
      align-items: center;
      gap: 20px; /* Space between buttons */
      margin-top: 40px;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.6s forwards; 
    }

    @media (min-width: 768px) {
      .hero-buttons-container {
        flex-direction: row; /* Side-by-side on larger screens */
        justify-content: center;
      }
    }
    
    .cta-button {
      background: linear-gradient(45deg, #10b981, #059669);
      border: none;
      padding: 20px 40px;
      border-radius: 50px;
      color: white;
      font-size: 1.25rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    .cta-button-secondary {
      background: transparent;
      border: 2px solid white; /* White border */
      padding: 18px 38px; /* Slightly adjusted padding for border */
      border-radius: 50px;
      color: white;
      font-size: 1.15rem; /* Slightly smaller */
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 20px rgba(255, 255, 255, 0.1);
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    
    .cta-button:hover {
      transform: translateY(-3px) scale(1.03); 
      box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
    }

    .cta-button-secondary:hover {
      background: rgba(255, 255, 255, 0.1); /* Subtle background on hover */
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
    }

    /* Styling for clients/partners logo slider */
    .clients-section {
      background-color: #ffffff; /* White background for this section */
      padding: 80px 0; /* More vertical padding, no horizontal for full-width effect */
    }

    .clients-section .section-title {
        margin-bottom: 40px; /* Reduced bottom margin for title */
    }
    
    .logo-slider-container {
      width: 100%;
      overflow: hidden;
      position: relative; /* For pseudo-elements if needed for fade */
    }

    .logo-slider-container::before,
    .logo-slider-container::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px; /* Width of the fade effect */
      z-index: 2;
    }

    .logo-slider-container::before {
      left: 0;
      background: linear-gradient(to right, white, rgba(255,255,255,0));
    }

    .logo-slider-container::after {
      right: 0;
      background: linear-gradient(to left, white, rgba(255,255,255,0));
    }
    
    .logo-slider-track {
      display: flex;
      align-items: center; /* Vertically align logos if they have different heights */
      width: fit-content; /* Let the track be as wide as its content */
      animation: scrollLogos 40s linear infinite; /* Adjust duration as needed */
    }
    
    .logo-item {
      height: 70px; /* Adjust height as needed */
      margin: 0 40px; /* Space between logos */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px; /* Padding for text-based logos */
      opacity: 0.7; /* Slightly faded logos */
      transition: opacity 0.3s ease;
    }

    .logo-item:hover {
        opacity: 1; /* Full opacity on hover */
    }
    
    .logo-item img {
      max-height: 100%;
      max-width: 150px; /* Max width for image logos */
      object-fit: contain;
      filter: grayscale(100%); /* Grayscale logos for uniformity */
    }

    /* Text fallback for logos if images are not available */
    .logo-item-text {
      font-size: 1.3rem;
      font-weight: 600;
      color: #555; /* Dark gray for text logos */
      text-align: center;
      white-space: nowrap; /* Prevent text wrapping */
    }
    
    @keyframes scrollLogos {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%); /* Scroll by half the total track width (since logos are duplicated) */
      }
    }
    
    .section {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-full-width {
      padding: 80px 0; /* No horizontal padding for full width */
      width: 100%;
    }

    .section-full-width .section-content {
      max-width: 1400px; /* Wider container for pricing */
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .section-title {
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 700;
      text-align: center;
      margin-bottom: 60px;
      color: #1e293b;
      line-height: 1.2;
      opacity: 0; /* Initial state for animation */
      animation: fadeInUp 0.8s ease-out 0.2s forwards; /* Added 0.2s delay */
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }
    
    .feature-card {
      background: white;
      padding: 40px;
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
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
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      color: white;
      transition: transform 0.3s ease-out; 
    }

    .feature-card:hover .feature-icon {
      transform: rotate(-15deg) scale(1.1); 
    }
    
    .feature-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: #1e293b;
    }
    
    .feature-description {
      color: #64748b;
      line-height: 1.6;
      font-size: 1.1rem;
    }
    
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); /* Wider cards */
      gap: 40px; /* More space between cards */
      margin-bottom: 60px;
      align-items: stretch; /* Make cards same height */
    }
    
    .pricing-card {
      background: white;
      border-radius: 24px;
      padding: 50px; /* More padding */
      position: relative;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      opacity: 0; 
      animation: fadeInUp 0.7s ease-out forwards; 
      text-align: right; /* Align text to the right */
      display: flex;
      flex-direction: column; /* Align content vertically */
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1); /* Enhanced shadow */
    }
    
    .pricing-card.featured {
      border: 2px solid #667eea;
      transform: scale(1.05); 
      box-shadow: 0 30px 80px rgba(102, 126, 234, 0.2); /* Enhanced shadow for featured */
    }
     .pricing-card.featured:hover { 
      transform: translateY(-5px) scale(1.07); 
    }
    
    .pricing-card:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    }
    
    .pricing-badge {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      padding: 10px 28px; /* Slightly larger */
      border-radius: 50px;
      font-size: 1rem; /* Slightly larger font */
      font-weight: 600;
      margin-bottom: 24px;
      display: inline-block;
      align-self: flex-start;
    }
    
    .pricing-title {
      font-size: 1.8rem; /* Larger title */
      font-weight: 700;
      margin-bottom: 20px; /* More spacing */
      color: #1e293b;
    }
    
    .pricing-price {
      font-size: 3.2rem; /* Larger price */
      font-weight: 800;
      color: #3b82f6; /* Blue price */
      margin-bottom: 30px; /* More spacing */
    }
    
    .pricing-features, .pricing-sub-features {
      list-style: none;
      padding: 0;
      margin-bottom: 25px; /* More spacing */
    }
    
    .pricing-features li, .pricing-sub-features li {
      padding: 10px 0; /* More vertical padding */
      display: flex;
      align-items: center;
      gap: 15px; /* More space between icon and text */
      color: #334155;
      font-size: 1.05rem; /* Slightly larger text */
    }
    
    .recordings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }
    
    .pricing-section-title {
      font-size: 1.3rem; /* Slightly larger */
      font-weight: 700;
      color: #1e293b;
      margin-top: 30px; /* More spacing */
      margin-bottom: 15px; /* More spacing */
    }

    .pricing-suitable-for {
      color: #64748b;
      margin-bottom: 20px; /* More spacing */
      font-size: 1.05rem; /* Slightly larger text */
      line-height: 1.6;
    }
    
    /* Green button for pricing cards */
    .pricing-card .cta-button {
        background: linear-gradient(45deg, #10b981, #059669);
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        margin-top: auto; /* Push button to the bottom */
        padding: 18px 32px; /* Larger button */
        font-size: 1.2rem; /* Larger text */
    }

    .pricing-card .cta-button:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
    }

    .recording-card {
      background: white;
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
      color: #1e293b;
    }
    
    .recording-description {
      color: #64748b;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .play-button {
      background: linear-gradient(45deg, #667eea, #764ba2);
      border: none;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .play-button:hover {
      transform: scale(1.15); 
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); 
    }
    
    .contact-form {
      background: white;
      border-radius: 24px;
      padding: 50px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 0 auto;
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
      color: #1e293b;
    }
    
    .form-input {
      width: 100%;
      padding: 16px 20px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: 'Assistant', sans-serif;
    }
    
    .form-input:focus {
      border-color: #667eea;
      outline: none;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2); 
    }
    
    .form-textarea {
      min-height: 120px;
      resize: vertical;
    }
    
    .submit-button {
      background: linear-gradient(45deg, #667eea, #764ba2);
      border: none;
      padding: 16px 32px;
      border-radius: 12px;
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }
    
    .submit-button:hover {
      transform: translateY(-2px) scale(1.01); 
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    }
    
    .keywords-section {
      background: #f8fafc;
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
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
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
      background: linear-gradient(45deg, #764ba2, #667eea); 
    }

    .footer-logo {
      height: 60px;
      margin-bottom: 20px;
    }

    .who-is-it-for-section {
        background-color: #ffffff;
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
        color: #667eea;
    }

    .who-is-it-for-section .description {
        font-size: 1.3rem;
        line-height: 1.7;
        color: #334155;
    }

    /* How It Works Section */
    .how-it-works-section {
        background-color: #f8fafc; /* Light gray background */
    }
    
    .how-it-works-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .how-it-works-card {
        background: white;
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
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .how-it-works-step-number {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #10b981;
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1rem;
        border: 2px solid white;
    }

    .how-it-works-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 15px;
    }

    .how-it-works-description {
        font-size: 1.05rem;
        color: #64748b;
        line-height: 1.6;
    }
    
    @media (max-width: 992px) { /* Changed breakpoint for menu */
        .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 280px;
            background-color: #1a2333;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
            padding-top: 60px; /* Space for close button */
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
            z-index: 1001; /* Above nav links */
        }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 20px 60px;
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
       .clients-section {
        padding: 60px 0; /* Adjust padding for mobile */
      }
      .logo-slider-container::before,
      .logo-slider-container::after {
        width: 50px; /* Smaller fade effect on mobile */
      }
      .logo-item {
        height: 50px; /* Smaller logos on mobile */
        margin: 0 20px;
      }
       .logo-item-text {
        font-size: 1rem;
      }
      
      .pricing-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .pricing-card {
        padding: 30px; /* Less padding on mobile */
      }
      
      .pricing-card.featured {
        transform: none; 
      }
       .pricing-card.featured:hover {
        transform: translateY(-5px) scale(1.02); 
      }
      
      .contact-form {
        padding: 30px;
        margin: 0 20px;
      }
    }
  `}</style>
);

// Audio player component
const AudioPlayer = ({ title, description, audioSrc, style }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="recording-card" style={style}>
      <h3 className="recording-title">{title}</h3>
      <p className="recording-description">{description}</p>
      <button className="play-button" onClick={togglePlay}>
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('תודה על פנייתך! נחזור אליך בהקדם');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px', textAlign: 'center', color: '#1e293b' }}>
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
  );
};

export default function LandingPage() {
  const [activeRecording, setActiveRecording] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      title: "האצת תהליכי מכירה וקיצור זמני טיפול",
      description: "תהליכי המכירה יואצו באופן ניכר, וזמן הטיפול בלקוח יתקצר מ-20 דקות ל-3 דקות בלבד, מה שיוביל ליעילות מוגברת וסיפוק לקוחות מהיר יותר"
    },
    {
      icon: MessageSquare,
      title: "בוט AI חכם שמתמודד עם כל אתגר",
      description: "הפתרון שלנו הוא בוט AI מתקדם שמבין דיבור חופשי ומתמודד ביעילות גם עם תשובות לא צפויות מהלקוח, בניגוד לבוטים 'טיפשים'"
    },
    {
      icon: Star,
      title: "יכולות שירות ומכירה גבוהות מאוד",
      description: "הבוט שלנו כבר מוכשר ביכולות שירות ומכירה מתקדמות, ופועל ללא לאות או עייפות, מה שמבטיח שירות אחיד ואיכותי לכל לקוח"
    },
    { 
      icon: BarChart3, 
      title: "דוחות ואנליטיקה", 
      description: "קבלו דוחות מפורטים על ביצועי הבוט, רמת ההצלחה בשיחות ותובנות חשובות לשיפור המכירות" 
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

  // Placeholder logos. Replace with actual image URLs or SVGs if available.
  // For demonstration, using text.
  const clientLogos = [
    { name: "גפן ביטוחים", id: "gefen" },
    { name: "Samsung", id: "samsung" },
    { name: "Apple", id: "apple" },
    { name: "OpenAI", id: "openai" },
    { name: "מגדל חברה לביטוח", id: "migdal" },
    { name: "אלקטרה מוצרי צריכה", id: "electra" },
  ];
  // Duplicate logos for seamless infinite scroll
  const duplicatedClientLogos = [...clientLogos, ...clientLogos];


  const pricingPlans = [
    {
      name: "חבילת התחלה",
      price: "₪499",
      period: "/חודש",
      badge: "מומלץ לעסקים קטנים",
      features: [
        "עד 500 שיחות חודשיות",
        "דוחות בסיסיים",
        "תמיכה טכנית"
      ],
      suitableFor: "מתאים לעסקים קטנים ולפיילוטים.",
      serviceOptionsTitle: "באיזה אופן? (בחירת שירות אחד)",
      serviceOptions: [
        "הצעת מכירה / סינון לידים",
        "מזכירה קולית",
        "טיפול בהזמנות",
        "איסוף מידע בסיסי"
      ],
    },
    {
      name: "חבילה מקצועית",
      price: "₪999",
      period: "/חודש",
      badge: "הכי פופולרית",
      featured: true,
      features: [
        "עד 1,500 שיחות חודשיות",
        "חיבור לכלל מערכות CRM",
        "בוט מותאם אישית",
        "דוחות מתקדמים",
        "תמיכה מלאה 24/7",
        "אינטגרציות נוספות"
      ],
      suitableFor: "לעסקים שרוצים אוטומציה מלאה וצמיחה מהירה.",
      serviceOptionsTitle: "באיזה אופן? (כל השירותים כלולים)",
      serviceOptions: [
        "הצעת מכירה / סינון לידים",
        "מזכירה קולית",
        "טיפול בהזמנות",
        "איסוף מידע מורחב"
      ],
    },
    {
      name: "Pay as you go",
      price: "₪1.5",
      period: "/שיחה",
      badge: "גמישות מקסימלית",
      features: [
        "תשלום לפי שימוש (ללא התחייבות)",
        "כל התכונות כלולות",
        "ניתן לעצור בכל עת"
      ],
      suitableFor: "לקמפיינים ממוקדים, בדיקות ועסקים עונתיים.",
      serviceOptionsTitle: "באיזה אופן? (כל השירותים כלולים)",
      serviceOptions: [
        "הצעת מכירה / סינון לידים",
        "מזכירה קולית",
        "טיפול בהזמנות"
      ],
    }
  ];

  const recordings = [
    {
      title: "סוכנות ביטוח-גפן ביטוחים",
      description: "בירור בדיקת תיק ביטוחים",
      audioSrc: gefenUrl
    },
    {
      title: 'תיאום פגישת ייעוץ עו"ד',
      description: "טיפול בפנייה של לקוח עם בעיה טכנית, כולל פתרון המקרה בסבלנות ומקצועיות",
      audioSrc: law_office
    },
    {
      title: "הזמנת פיצה",
      description: "הזמנת פיצה ללקוח וקביעת מועד לפיצה נוספת במידת הצורך",
      audioSrc: pizza
    },
    {
      title: "גיוס עובדים",
      description: "גיוס עובדים וקביעת מועד לגיוס נוסף במידת הצורך",
      audioSrc: jobRecruit
    },
    {
      title: "מכירת קורס ",
      description: "מכירת קורס וקביעת מועד למכירה נוספת במידת הצורך",
      audioSrc: course_agent
    }
  ];

  const keywords = [
    "בוט שיחות", "סוכן AI קולי", "אוטומציה שיחות", "בינה מלאכותית קולית",
    "שירות לקוחות אוטומטי", "מוקד טלפוני חכם", "שיחות יוצאות", "שיחות נכנסות",
    "CRM אוטומטי", "גוגל שיטס בוט", "מכירות אוטומטיות", "ליד גנרציה",
    "בוט עברית", "שיחות בעברית", "AI ישראלי", "אוטומציה עסקית",
    "תוכנה ישראלית", "סטארטאפ ישראלי", "טכנולוגיה קולית", "זיהוי דיבור עברית"
  ];

  return (
    <div style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>
      <CustomStyles />
      
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#hero">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4793081b2_WhatsAppImage2025-06-17at135344.jpg" alt="Bot 10 Logo" className="header-logo" />
        </a>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
            <li><a href="#features">תכונות</a></li>
            <li><a href="#who-is-it-for">למי זה מתאים?</a></li>
            <li><a href="#how-it-works">איך זה עובד?</a></li>
            <li><a href="#clients">לקוחות</a></li>
            <li><a href="#pricing">מחירים</a></li>
            <li><a href="#recordings">הקלטות</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4793081b2_WhatsAppImage2025-06-17at135344.jpg" alt="Bot 10 Logo" className="logo-image" />
          <p className="subtitle">
            הסוכן הקולי הראשון בישראל שמדבר בעברית טבעית ומטפל בשיחות המכירות והשירות שלכם 
            24 שעות ביממה ברמה של סוכן אנושי מקצועי
          </p>
          <div className="hero-buttons-container">
            <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <MessageSquare size={24} />
              בואו נתחיל לעבוד
            </button>
            <button className="cta-button-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <CheckCircle size={20} />
              בדיקת התאמה ופרטים נוספים
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2 className="section-title">למה Bot 10?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }} /* Staggered animation, starts after section title */
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

      {/* Who is it for Section - NEW */}
      <section id="who-is-it-for" className="section who-is-it-for-section">
        <div className="content-wrapper">
            <h2 className="section-title" style={{marginBottom: '30px'}}>למי זה מתאים?</h2>
            <Users size={80} className="section-icon" />
            <p className="description">
                הפתרון שלנו מתאים לכל עסק המקבל פניות רבות, מעסקים קטנים כמו משרדי נדל"ן ונותני שירות מקצועי ועד לחברות ענק עם אלפי לידים. הוא מייעל את תהליכי המכירה והשירות, חוסך משאבים ומבטיח שאף לקוח פוטנציאלי לא ילך לאיבוד, בזכות מענה מיידי וחכם בכל עת.
            </p>
        </div>
      </section>

      {/* How it works Section - NEW */}
      <section id="how-it-works" className="section how-it-works-section">
          <h2 className="section-title">איך זה עובד? שותפות להצלחה</h2>
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

      {/* Clients/Partners Section - NEW */}
      <section id="clients" className="clients-section">
        <h2 className="section-title">שותפים לדרך ולקוחות מובילים</h2>
        <div className="logo-slider-container">
          <div className="logo-slider-track">
            {duplicatedClientLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item">
                {/* Placeholder for actual logo image. Using text for now. */}
                {/* <img src={`/logos/${logo.id}.png`} alt={logo.name} /> */}
                <span className="logo-item-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Pricing Section - Full Width */}
      <section id="pricing" className="section-full-width" style={{ background: '#f8fafc' }}>
        <div className="section-content">
          <h2 className="section-title">החבילות שלנו</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="pricing-badge">{plan.badge}</div>
                <h3 className="pricing-title">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                  <span style={{ fontSize: '1.1rem', fontWeight: '400', color: '#64748b' }}>
                    {plan.period}
                  </span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={22} style={{ color: '#10b981', flexShrink: 0 }} />
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
                      <CheckCircle size={22} style={{ color: '#10b981', flexShrink: 0 }} />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="cta-button" style={{ width: '100%' }}>
                  בחר חבילה זו
                </button>
              </div>
            ))}
          </div>
          
          {/* Services explanation section */}
          <div style={{ 
            background: 'white', 
            borderRadius: '24px', 
            padding: '50px', /* More padding */
            margin: '40px 0', 
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
          }}>
            <h3 style={{ 
              fontSize: '2.2rem', /* Larger title */
              fontWeight: '700', 
              textAlign: 'center', 
              marginBottom: '40px', /* More spacing */
              color: '#1e293b' 
            }}>
              השירותים שלנו
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', /* Wider cards */
              gap: '40px' /* More space */
            }}>
              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div style={{ 
                  width: '70px', /* Larger icon container */
                  height: '70px', 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  borderRadius: '18px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px', /* More spacing */
                  color: 'white' 
                }}>
                  <Star size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1e293b' }}>
                  הצעת מכירה / סינון לידים
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  הבוט יבצע שיחות מכירה מקצועיות ויסנן לידים באיכות גבוהה עבורכם
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  borderRadius: '18px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px', 
                  color: 'white' 
                }}>
                  <Phone size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1e293b' }}>
                  מזכירה קולית
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  קביעת פגישות, העברת הודעות וטיפול בפניות בסיסיות של לקוחות
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  borderRadius: '18px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px', 
                  color: 'white' 
                }}>
                  <MessageSquare size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1e293b' }}>
                  טיפול בהזמנות
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  קבלת הזמנות מלקוחות, רישום פרטים והעברה למערכות הרלוונטיות
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '25px' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  borderRadius: '18px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px', 
                  color: 'white' 
                }}>
                  <Database size={35} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#1e293b' }}>
                  איסוף מידע בסיסי/מורחב
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  איסוף נתונים מלקוחות לפי הצרכים שלכם - מבסיסי ועד מפורט
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recordings Section */}
      <section id="recordings" className="section">
        <h2 className="section-title">שמעו את הבוט שלנו בפעולה</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px', opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
          הקלטות אמיתיות של השיחות שהבוט שלנו מבצע. שימו לב לטבעיות, המקצועיות והיכולת להתמודד עם מצבים שונים
        </p>
        <div className="recordings-grid">
          {recordings.map((recording, index) => (
            <AudioPlayer
              key={index}
              title={recording.title}
              description={recording.description}
              audioSrc={recording.audioSrc}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }} /* Staggered animation for AudioPlayer cards */
            />
          ))}
        </div>
      </section>

      {/* Keywords Section */}
      <section className="section">
        <div className="keywords-section"> {/* Animation is on this div itself */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#1e293b' }}>
            אנחנו מובילים בתחום
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '30px' }}>
            המילות המפתח שמובילות לקוחות אלינו
          </p>
          <div className="keywords-grid">
            {keywords.map((keyword, index) => (
              <span 
                key={index} 
                className="keyword-tag"
                style={{ animationDelay: `${index * 0.05 + 0.4}s` }} /* Staggered animation for keywords */
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        {/* Animation for ContactForm is handled by its own class in CSS */}
        <ContactForm />
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#1e293b', 
        color: 'white', 
        padding: '60px 20px 40px',
        textAlign: 'center',
        opacity: 0, /* Initial state for animation */
        animation: 'fadeIn 1s ease-out 0.5s forwards' /* Fade in footer */
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4793081b2_WhatsAppImage2025-06-17at135344.jpg" alt="Bot 10 Logo" className="footer-logo" />
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={20} />
              <span>info@bot10.co.il</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={20} />
              <span>03-1234567</span>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '30px',
            opacity: '0.6'
          }}>
            <p>© 2024 Bot 10. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
