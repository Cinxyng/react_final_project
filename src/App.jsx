import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'
import Hero from './assets/components/Hero/Hero'
import AboutMe from './assets/components/AboutMe/AboutMe';
import Contact from './assets/components/Contact/Contact';
import Portfolio from './assets/components/Portfolio/Portfolio';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/react_final_project">
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;