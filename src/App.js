import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Music from './pages/Music';
import About from './pages/About';

import './css/App.css';

function App() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    if(e.target.className === "home") {
      navigate('/')
    } else if(e.target.className === "music") {
      navigate('/music')
    } else if(e.target.className === "about") {
      navigate('/about')
    }
  }

  return (
    <div className="App">
        <div>
          <nav>
            <h3 className="home" onClick={handleClick}>Home</h3>
            <h3 className="music" onClick={handleClick}>Music</h3>
            <h3 className="about" onClick={handleClick}>About</h3>
          </nav>
        </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
