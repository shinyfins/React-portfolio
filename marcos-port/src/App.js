import React, { useState } from 'react';

import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';




function App() {
  return (
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" exact element={<About/>} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/resume" exact element={<Resume/>} />
      <Route path="/contact" exact element={<Contact/>} />
      <Route path="/portfolio" exact element={<Portfolio/>} />
    </Routes>
  </Router>
  );
}


export default App
