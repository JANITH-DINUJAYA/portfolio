import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';

import SplashScreen from './pages/SplashScreen'; // 👈 add this
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <div className="App">

        {/* Splash Screen */}
        {showSplash && (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        )}

        {/* Main App */}
        {!showSplash && (
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}

      </div>
    </Router>
  );
}

export default App;