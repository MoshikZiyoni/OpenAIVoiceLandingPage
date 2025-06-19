import logo from './logo.svg';
import './App.css';
import VoiceBotLanding from './Main';
import Accessiblilty from './Accessibility';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VoiceBotLanding />} />
          <Route path="/accessibility" element={<Accessiblilty></Accessiblilty>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;