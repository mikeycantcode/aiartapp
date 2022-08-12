import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//navbar
import Navbar from "./components/navBar"
//about
import About from "./pages/About"
//home
import Home from "./pages/Home"
//myvibegraph
import MyVibeGraph from './pages/MyVibeGraph'
//login Page (may not use)
import LoginPage from './pages/LoginPage'
//login component


function App() {


  //returns the navbar
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myVibeGraph' element={<MyVibeGraph />} />
        <Route path='/about' element={<About />} />
        <Route path='/loginPage' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

//and there we have the app!!!
export default App;