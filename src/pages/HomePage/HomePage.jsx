// src/pages/HomePage/HomePage.jsx
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../sections/HeroSection/HeroSection";
import MarqueeBanner from "../../components/MarqueeBanner/MarqueeBanner";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import ProductsSection from "../../sections/ProductsSection/ProductsSection";
import CTABanner from "../../sections/CTABanner/CTABanner";
import Footer from "../../components/Footer/Footer";
import IntroLoader from "../../components/IntroLoader/IntroLoader";

export default function HomePage({ openContactModal }) {
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
        <CTABanner openContactModal={openContactModal} />
        <Footer />
      </div>
    </>
  );
}
