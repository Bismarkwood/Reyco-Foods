// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MarqueeBanner from "./components/MarqueeBanner";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import AboutPage from "./components/AboutPage";
import ScrollToHash from "./components/ScrollToHash";
import RyecoSection from "./components/RyecoSection";
import ContactModal from "./components/ContactModal";

function HomePage({ openContactModal }) {
  return (
    <>
      <IntroLoader />
      <div>
        <NavBar openContactModal={openContactModal} />
        <HeroSection openContactModal={openContactModal} />
        <MarqueeBanner />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <RyecoSection />
        <CTABanner openContactModal={openContactModal} />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContactModal = () => setContactOpen(true);
  const closeContactModal = () => setContactOpen(false);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <ContactModal isOpen={contactOpen} onClose={closeContactModal} />
      <Routes>
        <Route path="/" element={<HomePage openContactModal={openContactModal} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
