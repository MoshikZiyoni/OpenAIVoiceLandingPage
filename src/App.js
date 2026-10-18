import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import VoiceBotLanding from './Main';
import Accessiblilty from './Accessibility';
import MissedCallCalculator from './MissedCall';
import BlogPage from './Blog';
import EnterpriseCostCalculator from './SalarySavingsCalculator';
import ContactForm from './Contact';
import AccessibilityButton from './AccessibilityButton';
import CookiePopup from './Cookies';
import SocialProofToast from './SocialProofToast';
import ExitIntentModal from './ExitIntentModal';

// Dedicated Landing Pages
import VirtualSecretary from './pages/VirtualSecretary';
import InsuranceFinance from './pages/InsuranceFinance';
import RealEstate from './pages/RealEstate';
import ClinicsLawyers from './pages/ClinicsLawyers';
import OutboundSales from './pages/OutboundSales';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <div style={{ display: 'none' }}>AI-Voice-Bot-Israel, AI voice</div>

        <Router>
          <Routes>
            <Route path="/" element={<VoiceBotLanding />} />
            <Route path="/virtual-secretary" element={<VirtualSecretary />} />
            <Route path="/insurance-finance" element={<InsuranceFinance />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/clinics-lawyers" element={<ClinicsLawyers />} />
            <Route path="/outbound-sales" element={<OutboundSales />} />
            <Route path="/accessibility" element={<Accessiblilty />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/roi-calculator" element={<MissedCallCalculator />} />
            <Route path="/cost-calculator" element={<EnterpriseCostCalculator />} />
            <Route path="/contactform" element={<ContactForm />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<VoiceBotLanding />} />
          </Routes>
          <AccessibilityButton />
          <CookiePopup />
          <SocialProofToast />
          <ExitIntentModal />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;