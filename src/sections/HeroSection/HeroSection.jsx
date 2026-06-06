import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

const heroImages = [
  "/Gallery Images/Curing Tradition Zilla Salted Pig Feet in Brine.png",
  "/Gallery Images/Frozen Pork Cuts.png",
  "/Gallery Images/no 6.png",
  "/Gallery Images/No. 02 Cold Chain.png",
  "/CTA Banner Image.png",
  "/Salted Pig Feet in Brine.png",
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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero" id="home">
      {/* Background carousel */}
      <div className="hero__carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="hero__carousel-slide"
            style={{ backgroundImage: `url('${heroImages[currentIndex]}')` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          <p className="hero__eyebrow">UK frozen meat export</p>
          <h1 className="hero__title">
            Reliable frozen meat supply <br /> for African markets.
          </h1>
          <p className="hero__text">
            Ryeco Foods sources, prepares, and exports premium frozen meat and offal,
            ensuring the highest quality standards from the UK to West Africa and the Caribbean.
          </p>
          <p className="hero__text">
            With dependable, temperature-controlled cold-chain logistics, we guarantee
            that our products arrive fresh, safe, and ready to meet the demands of your market.
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
