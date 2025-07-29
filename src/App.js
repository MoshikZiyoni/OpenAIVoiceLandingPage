import './App.css';
import VoiceBotLanding from './Main';
import Accessiblilty from './Accessibility';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogPage from './Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VoiceBotLanding />} />
          <Route path="/accessibility" element={<Accessiblilty></Accessiblilty>} />
          <Route path="/blog" element={<BlogPage></BlogPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;