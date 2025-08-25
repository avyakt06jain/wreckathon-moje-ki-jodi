import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Matchmaking from './pages/Matchmaking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cream-50 to-yellow-50">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/matchmaking" element={<Matchmaking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;