import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../home/Home';
import Header from '../common/header/Header';
import About from '../about/About';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Footer from '../common/footer/Footer';

const Pages = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
