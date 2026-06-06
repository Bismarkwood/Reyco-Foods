// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import ContactModal from "./components/ContactModal/ContactModal";

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
        <Route path="/gallery" element={<GalleryPage openContactModal={openContactModal} />} />
      </Routes>
    </BrowserRouter>
  );
}
