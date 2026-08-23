// src/components/Footer.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
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

const exportMarkets = ["Ghana", "Liberia", "Sierra Leone", "Caribbean Islands"];

const linkColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Our Services", href: "/#service" },
      { label: "Products", href: "/#products" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Export Products",
    links: [
      { label: "Frozen Pork Cuts", href: "/#products" },
      { label: "Frozen Beef & Mutton", href: "/#products" },
      { label: "Frozen Chicken", href: "/#products" },
      { label: "Offal Meats", href: "/#products" },
      { label: "Salted Pig Feet in Brine", href: "/#products" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-60px" });

  return (
    <div className="footer-wrapper">
      <footer className="footer" ref={footerRef}>
        {/* Background layers */}
        <div className="footer__bg-glow footer__bg-glow--blue" />
        <div className="footer__bg-glow footer__bg-glow--orange" />
        <div className="footer__bg-grid" />
        <div className="footer__grain" />

        {/* Ghost marquee */}
        <div className="footer__ghost-marquee">
          <div className="footer__ghost-track">
            <span className="footer__ghost-text">RYECO FOODS</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RYECO FOODS</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RYECO FOODS</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RYECO FOODS</span>
            <span className="footer__ghost-dot">·</span>
          </div>
        </div>

        {/* Inner content */}
        <div className="footer__inner">
          {/* Top section */}
          <div className="footer__top">
            {/* Left CTA */}
            <motion.div
              className="footer__cta"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Brand label */}
              <div className="footer__brand-label">
                <img src="/logo.png" alt="Ryeco Foods" className="footer__mini-logo" />
                <span className="footer__brand-tag">FROZEN MEAT EXPORT — UK &amp; AFRICA</span>
              </div>

              <h3 className="footer__cta-heading">Ready to trade with Africa?</h3>
              <p className="footer__cta-sub">
                Ryeco Foods exports premium frozen meat and offal to Ghana, Liberia,
                Sierra Leone, and the Caribbean Islands.
              </p>

              {/* Export markets */}
              <div className="footer__export-markets">
                <span className="footer__export-label">WE EXPORT TO</span>
                <div className="footer__export-tags">
                  {exportMarkets.map((m) => (
                    <span key={m} className="footer__export-tag">{m}</span>
                  ))}
                </div>
              </div>

              {/* Quick contact pills */}
              <div className="footer__pills">
                <a href="tel:+447908183169" className="footer__pill">
                  <span className="footer__pill-dot" />
                  +44 7908 183 169
                  <span className="footer__pill-arrow">↗</span>
                </a>
                <a href="https://wa.me/447960267571" className="footer__pill" target="_blank" rel="noreferrer">
                  <span className="footer__pill-dot footer__pill-dot--green" />
                  WhatsApp Us
                  <span className="footer__pill-arrow">↗</span>
                </a>
                <a href="mailto:trade@ryecofoods.com" className="footer__pill">
                  <span className="footer__pill-dot" />
                  Trade Enquiry
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
                      <li key={link.label}>
                        <Link to={link.href} className="footer__col-link">
                          <span className="footer__col-link-arrow">→</span>
                          {link.label}
                        </Link>
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
                <h4 className="footer__col-title">Contact Us</h4>
                <ul className="footer__col-list footer__col-list--contact">
                  <li>
                    <span className="footer__contact-label">Address</span>
                    <span className="footer__contact-val">128 City Road, London EC1V 2NX</span>
                  </li>
                  <li>
                    <span className="footer__contact-label">Phone</span>
                    <a href="tel:+447908183169" className="footer__contact-val footer__contact-link">+44 7908 183 169</a>
                  </li>
                  <li>
                    <span className="footer__contact-label">WhatsApp</span>
                    <a href="https://wa.me/447960267571" className="footer__contact-val footer__contact-link" target="_blank" rel="noreferrer">+44 7960 267 571</a>
                  </li>
                  <li>
                    <span className="footer__contact-label">General</span>
                    <a href="mailto:info@ryecofoods.com" className="footer__contact-val footer__contact-link">info@ryecofoods.com</a>
                  </li>
                  <li>
                    <span className="footer__contact-label">Trade</span>
                    <a href="mailto:trade@ryecofoods.com" className="footer__contact-val footer__contact-link">trade@ryecofoods.com</a>
                  </li>
                </ul>

                {/* Social links */}
                <div className="footer__social">
                  <a href="https://facebook.com/ryecofoods" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    <span>ryecofoods</span>
                  </a>
                  <a href="https://instagram.com/ryecofoods" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    <span>@ryecofoods</span>
                  </a>
                  <a href="https://linkedin.com/company/ryeco" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    <span>ryeco</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Source to Shelf badge */}
          <motion.div
            className="footer__badge-wrap"
            variants={fadeIn(0.8)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="footer__badge">FROZEN MEAT EXPORT TO AFRICA</span>
          </motion.div>

          {/* Subtle category ticker */}
          <div className="footer__ticker">
            <div className="footer__ticker-track">
              <span className="footer__ticker-item">Frozen Pig Feet</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Frozen Pork Spareribs</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Beef &amp; Mutton</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Chicken Quarters</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Offal Meats</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Turkey Legs</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Salted Pig Feet in Brine</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Chicken Gizzards</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Beef Liver</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Whole Turkey</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Sausages</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Frozen Pig Feet</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Frozen Pork Spareribs</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Beef &amp; Mutton</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Offal Meats</span>
              <span className="footer__ticker-sep">·</span>
            </div>
          </div>

          {/* Massive brand text */}
          <motion.div
            className="footer__brand-text-wrap"
            variants={fadeUp(0.9)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="footer__brand-text">RYECO FOODS</h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="footer__divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: cineEase }}
          />

          {/* Bottom bar */}
          <motion.div
            className="footer__bottom"
            variants={fadeIn(1.1)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="footer__copyright">
              © 2026 Ryeco Foods Ltd. All rights reserved.
            </span>
            <span className="footer__bottom-tag">
              Frozen Meat &amp; Offal Export — London, UK
            </span>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Privacy Policy</a>
              <span className="footer__bottom-sep">·</span>
              <a href="#" className="footer__bottom-link">Terms</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
