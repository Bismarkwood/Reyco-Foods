// src/components/Footer.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Footer.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: cineEase },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const linkColumns = [
  {
    title: "Company",
    links: ["Home", "About", "Our Services", "Products", "Contact"],
  },
  {
    title: "Services",
    links: ["Retail Placement", "Distribution", "Marketing Activation", "Product Sourcing"],
  },
  {
    title: "Product Categories",
    links: ["Household Products", "Toiletries", "Food & Beverages"],
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-60px" });

  return (
    <div className="footer-wrapper">
      <footer className="footer" ref={footerRef}>
        {/* Background layers */}
        <div className="footer__bg-glow footer__bg-glow--1" />
        <div className="footer__bg-glow footer__bg-glow--2" />
        <div className="footer__grain" />

        {/* Ghost marquee behind everything */}
        <div className="footer__ghost-marquee">
          <div className="footer__ghost-track">
            <span className="footer__ghost-text">RITESTOCK</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RITESTOCK</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RITESTOCK</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RITESTOCK</span>
            <span className="footer__ghost-dot">·</span>
          </div>
        </div>

        {/* Main content */}
        <div className="footer__inner">
          {/* Top section — CTA left + Columns right */}
          <div className="footer__top">
            {/* Left CTA */}
            <motion.div
              className="footer__cta"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="footer__cta-heading">Let's move your products.</h3>
              <p className="footer__cta-sub">
                Connect with Ritestock for sourcing, retail placement,
                distribution, and market activation.
              </p>

              {/* Email input */}
              <form className="footer__input-wrap" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="footer__input"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button type="submit" className="footer__input-btn" aria-label="Submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </form>

              {/* Quick contact pills */}
              <div className="footer__pills">
                <a href="tel:+233549729851" className="footer__pill">
                  +233 549 729 851
                  <span className="footer__pill-arrow">↗</span>
                </a>
                <a href="https://www.ritestock.com" className="footer__pill">
                  www.ritestock.com
                  <span className="footer__pill-arrow">↗</span>
                </a>
                <a href="#contact" className="footer__pill">
                  Contact Form
                  <span className="footer__pill-arrow">↗</span>
                </a>
              </div>
            </motion.div>

            {/* Right columns */}
            <div className="footer__columns">
              {linkColumns.map((col, i) => (
                <motion.div
                  key={col.title}
                  className="footer__column"
                  variants={fadeUp(0.3 + i * 0.1)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h4 className="footer__col-title">{col.title}</h4>
                  <ul className="footer__col-list">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer__col-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Contact column */}
              <motion.div
                className="footer__column"
                variants={fadeUp(0.6)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h4 className="footer__col-title">Contact</h4>
                <ul className="footer__col-list footer__col-list--contact">
                  <li>
                    <span className="footer__contact-label">Telephone</span>
                    <span className="footer__contact-val">+233 549 729 851</span>
                  </li>
                  <li>
                    <span className="footer__contact-label">Website</span>
                    <span className="footer__contact-val">www.ritestock.com</span>
                  </li>
                  <li>
                    <span className="footer__contact-label">Location</span>
                    <span className="footer__contact-val">Ghana</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Massive brand text */}
          <motion.div
            className="footer__brand-text-wrap"
            variants={fadeUp(0.7)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="footer__brand-text">RITESTOCK</h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="footer__divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: cineEase }}
          />

          {/* Bottom bar */}
          <motion.div
            className="footer__bottom"
            variants={fadeIn(1.0)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="footer__copyright">
              © 2026 Ritestock Ltd. All rights reserved.
            </span>
            <span className="footer__bottom-tag">
              FMCG Sourcing &amp; Distribution — Ghana
            </span>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
