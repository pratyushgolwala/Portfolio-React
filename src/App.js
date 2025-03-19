import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import "@fortawesome/fontawesome-free/css/all.min.css";




function App() {
  return (
    <Router>

      <Navbar /> {/* Navbar stays visible on all pages */}
      <Routes>
        <Route path="/" element={<Home/>} />  {/* Home Page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
      </Routes>
    </Router>
  );
}

export default App;
