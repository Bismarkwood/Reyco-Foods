import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

const heroImages = [
  "/Zilla Salted Pig Feet in Brine.png",
  "/Quality you can trust card.png",
  "/Built for Export.png",
  "/Trusted Partners.png",
  "/Sourced with Care.png",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HeroSection({ openContactModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const preloadedRef = useRef(false);

  // Preload all hero images on mount
  useEffect(() => {
    if (preloadedRef.current) return;
    preloadedRef.current = true;

    let loaded = 0;
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === heroImages.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === heroImages.length) setImagesLoaded(true);
      };
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero" id="home">
      {/* Preload all images as hidden elements for instant browser caching */}
      <div className="hero__preload" aria-hidden="true">
        {heroImages.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>

      {/* Background carousel */}
      <div className="hero__carousel">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="hero__carousel-slide"
            style={{ backgroundImage: `url('${heroImages[currentIndex]}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay gradients */}
      <div className="hero__overlay" />

      <div className="hero__inner">
        <motion.div
          className="hero__copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="hero__eyebrow">PIG FEET EXPORT</p>
          <h1 className="hero__title">
            Producers of salted pig feet.
          </h1>
          <p className="hero__text">
            Ryeco Foods are producers and exporters of high-quality Salted Pig Feet in Brine specifically made for hot climate without the need to refrigerate. Our Salted Pig Feet in strong brine with green-top lid has a longer shelf life of up to 18 months.
          </p>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#products">
              View products
            </a>
            <button
              className="hero__button hero__button--secondary"
              type="button"
              onClick={openContactModal}
            >
              Contact us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="hero__indicators">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator${i === currentIndex ? " hero__indicator--active" : ""}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
