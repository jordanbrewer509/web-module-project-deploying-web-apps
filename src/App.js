import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Homepage from './Homepage';
import Music from './Music';

import './App.css';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/music" element={<Music />} />
      </Routes>
        <div>
          <nav>
            <h3 onClick={navigate('/')}>Home</h3>
            <h3 onClick={navigate('/music')}>Music</h3>
            {/* {<h3 onClick={navigate('/about')}>About</h3>} */}
          </nav>
        </div>
    </div>
  );
}

export default App;
