import './App.css';
import VoiceBotLanding from './Main';
import Accessiblilty from './Accessibility';
import MissedCallCalculator from './MissedCall';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './Blog';
import EnterpriseCostCalculator from './SalarySavingsCalculator';
import ContactForm from './Contact';

function App() {
  return (
    <div className="App">
            <div style={{ display: 'none' }}>AI-Voice-Bot-Israel, AI voice</div>

      <Router>
        <Routes>
          <Route path="/" element={<VoiceBotLanding />} />
          <Route path="/accessibility" element={<Accessiblilty></Accessiblilty>} />
          <Route path="/blog" element={<BlogPage></BlogPage>} />
          <Route path="/roi-calculator" element={<MissedCallCalculator></MissedCallCalculator>} />
          <Route path="/cost-calculator" element={<EnterpriseCostCalculator></EnterpriseCostCalculator>}/>
          <Route path = "/contactform" element={<ContactForm></ContactForm>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;