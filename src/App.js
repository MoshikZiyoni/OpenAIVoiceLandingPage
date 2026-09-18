import './App.css';
import VoiceBotLanding from './Main';
import Accessiblilty from './Accessibility';
import MissedCallCalculator from './MissedCall';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './Blog';
import EnterpriseCostCalculator from './SalarySavingsCalculator';
import ContactForm from './Contact';
import AccessibilityButton from './AccessibilityButton';
import CookiePopup from './Cookies';
import SocialProofToast from './SocialProofToast';
import ExitIntentModal from './ExitIntentModal';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'none' }}>AI-Voice-Bot-Israel, AI voice</div>

      <Router>
        <Routes>
          <Route path="/" element={<VoiceBotLanding />} />
          <Route path="/accessibility" element={<Accessiblilty />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/roi-calculator" element={<MissedCallCalculator />} />
          <Route path="/cost-calculator" element={<EnterpriseCostCalculator />}/>
          <Route path="/contactform" element={<ContactForm />}/>
        </Routes>
        <AccessibilityButton />
        <CookiePopup />
        <SocialProofToast />
        <ExitIntentModal />
      </Router>
    </div>
  );
}

export default App;