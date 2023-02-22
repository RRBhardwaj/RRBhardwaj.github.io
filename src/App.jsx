import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Github from "./components/Github";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import React, { useState, useEffect } from 'react';
import { CircularProgress } from "react-loading-indicators";
import "./App.css";

function App() {
  const [showIndicator, setShowIndicator] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicator(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    showIndicator===false ? (
      <div className="loading-indicator">
        <CircularProgress className="spinner"/>
      </div>
    ) : (<div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Github/>
        <Contacts/>
        <Footer/>
        <SocialLinks/>
    </div>
    )
  );
}

export default App;
