import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from "./layout/Menu";
import Header from "./layout/Header";
import Footer from './layout/Footer';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import PortfolioPage from "./portfolio/PortfolioPage";
import './App.css';

function App() {
  return (
    <>
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
