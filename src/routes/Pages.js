import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/AudioPage';
import UrduTextComponent from '../components/UrduTextComponent';

const Pages = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Set the isLoggedIn state to true upon successful login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Set the isLoggedIn state to false upon logout
    setLoggedIn(false);
  };

  return (

      <div>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home handleLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/urdutext" element={isLoggedIn ? <UrduTextComponent handleLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />} />
        </Routes>
      </div>

  );
};

export default Pages;
