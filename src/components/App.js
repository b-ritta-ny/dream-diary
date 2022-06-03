import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import NavBar from './NavBar';
import DreamPage from './DreamPage'
import Resources from './Resources';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/DreamPage">Dream Diary</Link>
          </div>
          <div>
            <Link to="/Resources">Resources</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/DreamPage" element={<DreamPage />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
