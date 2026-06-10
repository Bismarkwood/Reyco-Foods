// src/pages/GalleryPage/GalleryPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./GalleryPage.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: cineEase },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  },
});

// Curated lookbook spreads — each "spread" is a featured editorial moment
const lookbookSpreads = [
  {
    id: 1,
    label: "No. 01",
    headline: "Curing Tradition",
    subtext: "Zilla Salted Pig Feet in Brine",
    url: "/Gallery Images/Curing Tradition Zilla Salted Pig Feet in Brine.png",
    caption: "Green-top barrels packed with our proprietary brine formula — lasting 18–24 months in hot climates without refrigeration.",
    size: "hero",
  },
  {
    id: 2,
    label: "No. 02",
    headline: "Cold Chain",
    subtext: "Premium Brine Pig Feet",
    url: "/Gallery Images/No. 02 Cold Chain.png",
    caption: "Cleaned, portioned and brine pig feet ready for cold-chain export.",
    size: "tall",
  },
  {
    id: 3,
    label: "No. 03",
    headline: "The Cut",
    subtext: "Spareribs & Pork Cuts",
    url: "/Gallery Images/No. 03 The Cut.png",
    caption: "Export-grade pork spareribs prepared at our UK partner butcheries.",
    size: "wide",
  },
  {
    id: 4,
    label: "No. 04",
    headline: "Market Day",
    subtext: "African Market Trade",
    url: "/Gallery Images/Market_woman.jpeg",
    caption: "Our products reaching end consumers through vibrant local markets across West Africa.",
    size: "portrait",
  },
  {
    id: 5,
    label: "No. 05",
    headline: "Barrel Trade",
    subtext: "Brine Curing Process",
    url: "/Gallery Images/No. 05 Barrel Trade.png",
    caption: "Heritage barrel stacking — our brine formula sealed and ready for export.",
    size: "portrait",
  },
  {
    id: 6,
    label: "No. 06",
    headline: "Global Reach",
    subtext: "Export Logistics",
    url: "/Gallery Images/no 6.png",
    caption: "Refrigerated containers loaded for West Africa and Caribbean ports of call.",
    size: "wide",
  },
  {
    id: 7,
    label: "No. 07",
    headline: "Pork Craft",
    subtext: "Raw Pork Preparation",
    url: "/Gallery Images/no 7.png",
    caption: "Carefully prepared pork sections ahead of freezing and packaging.",
    size: "square",
  },
  {
    id: 8,
    label: "No. 08",
    headline: "The Barrel",
    subtext: "Brine-Cured Pig Tail",
    url: "/Gallery Images/No. 08.png",
    caption: "Pig tails and cuts prepared for our signature barrel brine-curing process.",
    size: "portrait",
  },
  {
    id: 9,
    label: "No. 09",
    headline: "Cold Storage",
    subtext: "London Warehouse Facility",
    url: "/Gallery Images/Frozen Pork Cuts.png",
    caption: "Our London cold storage hub — the beating heart of our UK-to-Africa supply chain.",
    size: "wide",
  },
];

// Marquee images
const marqueeImages = [
  "/Gallery Images/Curing Tradition Zilla Salted Pig Feet in Brine.png",
  "/Gallery Images/No. 02 Cold Chain.png",
  "/Gallery Images/No. 03 The Cut.png",
  "/Gallery Images/No. 05 Barrel Trade.png",
  "/Gallery Images/no 6.png",
  "/Gallery Images/no 7.png",
  "/Salted Pig Feet in Brine.png",
  "/salted_pig_barrel.png",
];

export default function GalleryPage({ openContactModal }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isLightboxOpen = lightboxIndex !== null;

  const heroRef = useRef(null);
  const editorialRef = useRef(null);
  const storyRef = useRef(null);
  const marqueeRef = useRef(null);
  const ctaRef = useRef(null);

  const editorialInView = useInView(editorialRef, { once: true, margin: "-60px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-60px" });
  const marqueeInView = useInView(marqueeRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? lookbookSpreads.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === lookbookSpreads.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => setLightboxIndex(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? lookbookSpreads[lightboxIndex] : null;

  return (
    <div className="gallery-page">
      <NavBar openContactModal={openContactModal} />

      {/* ── 1. HERO ── */}
      <section className="lb-hero" ref={heroRef}>
        <motion.div
          className="lb-hero__bg"
          style={{ backgroundImage: "url('/Gallery Images/Curing Tradition Zilla Salted Pig Feet in Brine.png')" }}
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: cineEase }}
        />
        <div className="lb-hero__overlay" />

        <div className="lb-hero__inner">
          <motion.span
            className="lb-hero__issue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: cineEase }}
          >
            Visual Lookbook — Ryeco Foods
          </motion.span>

          <motion.h1
            className="lb-hero__title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: cineEase }}
          >
            From <em>Barrel</em><br />to <em>World</em>
          </motion.h1>

          <motion.p
            className="lb-hero__sub"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: cineEase }}
          >
            An editorial journey through Ryeco Foods — from the curing barrel to the cold store, and the London dock to West Africa.
          </motion.p>

          <motion.div
            className="lb-hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="lb-hero__scroll-line" />
            <span className="lb-hero__scroll-text">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. EDITORIAL GRID ── */}
      <section className="lb-editorial" ref={editorialRef}>
        <motion.div
          className="lb-editorial__header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={editorialInView ? "visible" : "hidden"}
        >
          <span className="lb-eyebrow">The Collection</span>
          <h2 className="lb-section-title">Lookbook Spreads</h2>
        </motion.div>

        {/* --- SPREAD 1: Full-bleed hero image --- */}
        <motion.div
          className="lb-spread lb-spread--full"
          variants={fadeIn(0.1)}
          initial="hidden"
          animate={editorialInView ? "visible" : "hidden"}
          onClick={() => setLightboxIndex(0)}
        >
          <img src={lookbookSpreads[0].url} alt={lookbookSpreads[0].headline} />
          <div className="lb-spread__overlay" />
          <div className="lb-spread__info lb-spread__info--bottom-left">
            <span className="lb-spread__label">{lookbookSpreads[0].label}</span>
            <h3 className="lb-spread__headline">{lookbookSpreads[0].headline}</h3>
            <p className="lb-spread__sub">{lookbookSpreads[0].subtext}</p>
          </div>
        </motion.div>

        {/* --- SPREAD 2+3: Side-by-side --- */}
        <div className="lb-row lb-row--2col">
          {[lookbookSpreads[1], lookbookSpreads[2]].map((item, i) => (
            <motion.div
              key={item.id}
              className="lb-spread lb-spread--half"
              variants={fadeUp(0.15 + i * 0.12)}
              initial="hidden"
              animate={editorialInView ? "visible" : "hidden"}
              onClick={() => setLightboxIndex(item.id - 1)}
            >
              <img src={item.url} alt={item.headline} />
              <div className="lb-spread__overlay" />
              <div className="lb-spread__info">
                <span className="lb-spread__label">{item.label}</span>
                <h3 className="lb-spread__headline">{item.headline}</h3>
                <p className="lb-spread__sub">{item.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SPREAD 4+5+6: Trio row --- */}
        <div className="lb-row lb-row--3col">
          {[lookbookSpreads[3], lookbookSpreads[4], lookbookSpreads[5]].map((item, i) => (
            <motion.div
              key={item.id}
              className="lb-spread lb-spread--third"
              variants={fadeUp(0.1 + i * 0.1)}
              initial="hidden"
              animate={editorialInView ? "visible" : "hidden"}
              onClick={() => setLightboxIndex(item.id - 1)}
            >
              <img src={item.url} alt={item.headline} />
              <div className="lb-spread__overlay" />
              <div className="lb-spread__info">
                <span className="lb-spread__label">{item.label}</span>
                <h3 className="lb-spread__headline">{item.headline}</h3>
                <p className="lb-spread__sub">{item.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SPREAD 7+8: Final pair --- */}
        <div className="lb-row lb-row--asymmetric">
          <motion.div
            className="lb-spread lb-spread--wide"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={editorialInView ? "visible" : "hidden"}
            onClick={() => setLightboxIndex(6)}
          >
            <img src={lookbookSpreads[6].url} alt={lookbookSpreads[6].headline} />
            <div className="lb-spread__overlay" />
            <div className="lb-spread__info">
              <span className="lb-spread__label">{lookbookSpreads[6].label}</span>
              <h3 className="lb-spread__headline">{lookbookSpreads[6].headline}</h3>
              <p className="lb-spread__sub">{lookbookSpreads[6].subtext}</p>
            </div>
          </motion.div>

          <motion.div
            className="lb-spread lb-spread--narrow"
            variants={fadeUp(0.22)}
            initial="hidden"
            animate={editorialInView ? "visible" : "hidden"}
            onClick={() => setLightboxIndex(7)}
          >
            <img src={lookbookSpreads[7].url} alt={lookbookSpreads[7].headline} />
            <div className="lb-spread__overlay" />
            <div className="lb-spread__info">
              <span className="lb-spread__label">{lookbookSpreads[7].label}</span>
              <h3 className="lb-spread__headline">{lookbookSpreads[7].headline}</h3>
              <p className="lb-spread__sub">{lookbookSpreads[7].subtext}</p>
            </div>
          </motion.div>
        </div>

        {/* --- SPREAD 9: Market Woman full-bleed --- */}
        <motion.div
          className="lb-spread lb-spread--full"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={editorialInView ? "visible" : "hidden"}
          onClick={() => setLightboxIndex(8)}
        >
          <img src={lookbookSpreads[8].url} alt={lookbookSpreads[8].headline} />
          <div className="lb-spread__overlay" />
          <div className="lb-spread__info lb-spread__info--bottom-left">
            <span className="lb-spread__label">{lookbookSpreads[8].label}</span>
            <h3 className="lb-spread__headline">{lookbookSpreads[8].headline}</h3>
            <p className="lb-spread__sub">{lookbookSpreads[8].subtext}</p>
          </div>
        </motion.div>
      </section>

      {/* ── 3. EDITORIAL STORY BLOCK ── */}
      <section className="lb-story" ref={storyRef}>
        <div className="lb-story__inner">
          <motion.div
            className="lb-story__image-col"
            variants={fadeIn(0)}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <img
              src="/Gallery Images/The Process.png"
              alt="Zilla Brine Barrels"
              className="lb-story__img"
            />
            <div className="lb-story__img-accent" />
          </motion.div>

          <motion.div
            className="lb-story__text-col"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <span className="lb-eyebrow">The Process</span>
            <h2 className="lb-story__heading">
              Cured in Brine.<br /><em>Sealed for Continents.</em>
            </h2>
            <p className="lb-story__body">
              Our flagship Zilla Salted Pig Feet are packed using a proprietary brine formula, hermetically sealed in iconic green-top barrels. Engineered for markets in West Africa and the Caribbean where cold-chain infrastructure is limited, each barrel guarantees 18–24 months of shelf life — no freezing required.
            </p>
            <blockquote className="lb-story__quote">
              &ldquo;From London to the markets of Ghana, Liberia, Sierra Leone, Côte d'Ivoire and the Caribbean — since 2022.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── 4. MARQUEE ── */}
      <section className="lb-marquee" ref={marqueeRef}>
        <motion.div
          className="lb-marquee__header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={marqueeInView ? "visible" : "hidden"}
        >
          <span className="lb-eyebrow lb-eyebrow--light">Wholesale Flow</span>
          <h2 className="lb-marquee__title">Logistics & Production</h2>
        </motion.div>

        <motion.div
          className="lb-marquee__track-wrap"
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={marqueeInView ? "visible" : "hidden"}
        >
          <div className="lb-marquee__track">
            {marqueeImages.concat(marqueeImages).map((url, i) => (
              <div className="lb-marquee__img" key={i}>
                <img src={url} alt="Product stream" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="lb-cta" ref={ctaRef}>
        <motion.div
          className="lb-cta__bg"
          style={{ backgroundImage: "url('/Gallery Images/no 6.png')" }}
          initial={{ scale: 1.08 }}
          animate={ctaInView ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 1.5, ease: cineEase }}
        />
        <div className="lb-cta__overlay" />
        <div className="lb-cta__inner">
          <motion.h2
            className="lb-cta__heading"
            variants={fadeUp(0)}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            Ready to Partner?
          </motion.h2>
          <motion.p
            className="lb-cta__sub"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            Explore our full range of export-grade meat products or contact our London office to discuss trading partnerships.
          </motion.p>
          <motion.div
            className="lb-cta__buttons"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <Link to="/" className="lb-cta__btn lb-cta__btn--primary">
              Explore Products <span>→</span>
            </Link>
            <button onClick={openContactModal} className="lb-cta__btn lb-cta__btn--ghost">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {isLightboxOpen && activeItem && (
          <motion.div
            className="lb-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          >
            <motion.div
              className="lb-lightbox__content"
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.4, ease: cineEase }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lb-lightbox__close" onClick={handleClose}>✕</button>
              <button className="lb-lightbox__prev" onClick={handlePrev}>&#10229;</button>
              <button className="lb-lightbox__next" onClick={handleNext}>&#10230;</button>
              <img src={activeItem.url} alt={activeItem.headline} />
              <div className="lb-lightbox__caption">
                <span className="lb-lightbox__label">{activeItem.label} — {activeItem.subtext}</span>
                <p className="lb-lightbox__text">{activeItem.caption}</p>
                <div className="lb-lightbox__counter">{lightboxIndex + 1} / {lookbookSpreads.length}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
