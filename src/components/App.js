import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home'
import Header from './Header';
import NavBar from './NavBar';
import DreamPage from './DreamPage'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className='homelink'>
              <Link to="/" style={{ 
                textDecoration: 'none',
                color: '#040738',  
                }}>HOME</Link>
          </div>
          <div className='dreamlink'>
              <Link to="/DreamPage" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>DREAM DIARY</Link>
          </div>
          <div className='resourcelink'>
              <Link to="/Resources" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>RESOURCES</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/DreamPage" element={<DreamPage />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}
