// src/components/AboutPage.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./AboutPage.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
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
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const differentiators = [
  {
    title: "Premium Brine Formula",
    text: "We use only the best brine specifically prepared for us by our trading partners — producing the finest taste and longest shelf life for our Salted Pig Feet.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Hot Climate Engineered",
    text: "Our Salted Pig Feet in Brine is specifically engineered for hot climates where refrigeration is limited — lasting up to 18 months with no freezing required.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    title: "Full Frozen Meat Range",
    text: "Beyond Salted Pig Feet, we export a comprehensive frozen meat portfolio — beef, mutton, pork, poultry, offal and sausages — to meet diverse African market demands.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

const exportCountries = [
  { name: "Ghana", region: "West Africa", flag: "🇬🇭" },
  { name: "Liberia", region: "West Africa", flag: "🇱🇷" },
  { name: "Sierra Leone", region: "West Africa", flag: "🇸🇱" },
  { name: "Caribbean Islands", region: "Caribbean", flag: "🏝️" },
];

const certifications = [
  {
    num: "01",
    title: "Organic Certification",
    text: "We are actively pursuing organic certification for our Salted Pig Feet in Brine products, ensuring our ingredients and processes meet the highest global organic standards.",
    status: "In Progress",
    stage: "Organic standards review ongoing",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Fair-Trade Certification",
    text: "Our commitment to ethical sourcing and fair trade practices is central to our business. We are working towards full Fair-Trade certification across our supply chain.",
    status: "In Progress",
    stage: "Supply chain review ongoing",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Food Safety & Quality Assurance",
    text: "Maintaining strict compliance with UK food safety regulations to guarantee consistent quality and safety for all our export destinations.",
    status: "Active",
    stage: "Continuous monitoring",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const storyRef   = useRef(null);
  const diffRef    = useRef(null);
  const countryRef = useRef(null);
  const certRef    = useRef(null);

  const storyInView   = useInView(storyRef,   { once: true, margin: "-80px" });
  const diffInView    = useInView(diffRef,    { once: true, margin: "-80px" });
  const countryInView = useInView(countryRef, { once: true, margin: "-80px" });
  const certInView    = useInView(certRef,    { once: true, margin: "-80px" });

  return (
    <div className="about-page">
      <NavBar />

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <div className="about-hero__grid" />

        <div className="about-hero__inner">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: cineEase }}
          >
            <div className="about-hero__tag">
              <span className="about-hero__tag-dot" />
              Established 2022 · London, UK
            </div>
            <h1 className="about-hero__title">
              Producers &amp;<br />
              <em>Exporters</em><br />
              of Quality Meat
            </h1>
            <p className="about-hero__sub">
              Ryeco Foods UK Ltd — bringing premium Salted Pig Feet in Brine and
              frozen meat products from the United Kingdom to West Africa and the Caribbean.
            </p>


          </motion.div>
        </div>

        <div className="about-hero__scroll">
          <div className="about-hero__scroll-line" />
          <span className="about-hero__scroll-text">Scroll</span>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="story-section" ref={storyRef}>
        <div className="abt-section">
          <div className="story-inner">
            <motion.div
              className="story-content"
              variants={fadeUp(0)}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              <span className="abt-section__tag">Company Story</span>
              <h2 className="abt-section__title">How Ryeco Foods Began</h2>
              <div className="abt-section__rule" />
              <p>
                Ryeco Foods UK Ltd was established in 2022 in the United Kingdom as a
                producer and exporter of Salted Pig Feet in strong brine to West Africa
                — Ghana — and the Caribbean Islands.
              </p>
              <p>
                Our product is made specifically for hot climates where there are limited
                refrigeration facilities. With our proprietary brine formula, the Salted
                Pig Feet can last up to 18 months without the need to freeze — making it
                the ideal product for markets across West Africa and the Caribbean.
              </p>
              <p>
                Building on our success with Salted Pig Feet, we have expanded our
                portfolio to include the export of frozen meat cuts — bringing a full range
                of high-quality frozen beef, pork, poultry, and offal products to Africa.
              </p>
            </motion.div>

            <motion.div
              className="story-img-wrap"
              variants={fadeIn(0.25)}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85"
                alt="Premium meat products prepared for export"
                className="story-img"
              />
              <div className="story-img-badge">
                <div className="story-img-badge__num">2022</div>
                <div className="story-img-badge__label">Est. London, UK</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="different-section" ref={diffRef}>
        <div className="different-inner">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={diffInView ? "visible" : "hidden"}
          >
            <span className="abt-section__tag">What Makes Us Different</span>
            <h2 className="abt-section__title" style={{ color: "#fff" }}>
              The Ryeco Foods Difference
            </h2>
            <div className="abt-section__rule" />
          </motion.div>

          <div className="different-grid">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                className="different-card"
                variants={fadeUp(0.15 + i * 0.15)}
                initial="hidden"
                animate={diffInView ? "visible" : "hidden"}
              >
                <div className="different-card__icon">{item.icon}</div>
                <h3 className="different-card__title">{item.title}</h3>
                <p className="different-card__text">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="different-img-row"
            variants={fadeIn(0.5)}
            initial="hidden"
            animate={diffInView ? "visible" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=85"
              alt="Salted pig feet in brine jars"
              className="different-img"
            />
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85"
              alt="Cold chain logistics for frozen meat export"
              className="different-img"
            />
          </motion.div>
        </div>
      </section>

      {/* ── EXPORT COUNTRIES ── */}
      <section className="countries-section" ref={countryRef}>
        {/* Background layers */}
        <div className="countries-bg-glow countries-bg-glow--left" />
        <div className="countries-bg-glow countries-bg-glow--right" />
        <div className="countries-bg-grid" />

        <div className="countries-wrap">
          {/* Header */}
          <motion.div
            className="countries-header"
            variants={fadeUp(0)}
            initial="hidden"
            animate={countryInView ? "visible" : "hidden"}
          >
            <div className="countries-eyebrow">
              <span className="countries-eyebrow__line" />
              <span className="countries-eyebrow__text">Export Markets</span>
              <span className="countries-eyebrow__line" />
            </div>
            <h2 className="countries-title">
              Where We <em>Ship</em> To
            </h2>
            <p className="countries-subtitle">
              From the United Kingdom, Ryeco Foods delivers premium frozen meat and
              Salted Pig Feet in Brine directly to markets across West Africa and the Caribbean.
            </p>
          </motion.div>

          {/* Country cards grid */}
          <div className="countries-cards">
            {[
              {
                name: "Ghana",
                region: "West Africa",
                flag: "🇬🇭",
                img: "https://images.unsplash.com/photo-1629218579758-90b93e07f9b0?auto=format&fit=crop&w=800&q=85",
                color: "#006B3F",
                desc: "Our primary and longest-standing export market in West Africa.",
              },
              {
                name: "Liberia",
                region: "West Africa",
                flag: "🇱🇷",
                img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=85",
                color: "#BF0A30",
                desc: "A fast-growing destination for our frozen meat and offal range.",
              },
              {
                name: "Sierra Leone",
                region: "West Africa",
                flag: "🇸🇱",
                img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=85",
                color: "#1EB53A",
                desc: "Premium pork and frozen cuts reaching consumers across the country.",
              },
              {
                name: "Caribbean Islands",
                region: "Caribbean",
                flag: "🏝️",
                img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=85",
                color: "#E36A2E",
                desc: "Salted Pig Feet in Brine — engineered for tropical climates.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.name}
                className="country-card"
                variants={fadeUp(0.15 + i * 0.12)}
                initial="hidden"
                animate={countryInView ? "visible" : "hidden"}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Background image */}
                <div
                  className="country-card__bg"
                  style={{ backgroundImage: `url('${c.img}')` }}
                />
                {/* Gradient overlay */}
                <div
                  className="country-card__overlay"
                  style={{ background: `linear-gradient(180deg, rgba(5,7,10,0.2) 0%, rgba(5,7,10,0.92) 70%)` }}
                />
                {/* Colour accent bar */}
                <div className="country-card__accent" style={{ background: c.color }} />

                {/* Content */}
                <div className="country-card__content">
                  <div className="country-card__top">
                    <span className="country-card__flag">{c.flag}</span>
                    <span className="country-card__region">{c.region}</span>
                  </div>
                  <div className="country-card__bottom">
                    <h3 className="country-card__name">{c.name}</h3>
                    <p className="country-card__desc">{c.desc}</p>
                    <div className="country-card__arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}

        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="certs-section" ref={certRef}>
        <div className="abt-section">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={certInView ? "visible" : "hidden"}
          >
            <span className="abt-section__tag">Standards &amp; Accreditations</span>
            <h2 className="abt-section__title">Certifications</h2>
            <p className="cert-section__desc" style={{ color: "#666", marginBottom: "3.5rem", maxWidth: "600px", lineHeight: "1.7", fontSize: "1.05rem" }}>
              Recognized standards are part of our commitment to quality, ethical sourcing, and responsible production.
            </p>
          </motion.div>

          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                className="cert-card"
                variants={fadeUp(0.15 + i * 0.12)}
                initial="hidden"
                animate={certInView ? "visible" : "hidden"}
              >
                <div className="cert-number">{cert.num}</div>
                <div className="cert-icon">{cert.icon}</div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__text">{cert.text}</p>
                
                <div style={{ marginTop: "auto" }}>
                  <div className="cert-status">
                    <span className="cert-status__dot" />
                    {cert.status}
                  </div>
                  <div style={{ marginTop: "12px", fontSize: "0.82rem", color: "#888", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {cert.stage}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
