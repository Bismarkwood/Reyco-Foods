// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

export default function NavBar({ openContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);
      setHidden(currentY > lastScrollY.current && currentY > 120);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContactClick = () => {
    setMenuOpen(false);
    openContactModal?.();
  };

  return (
    <motion.header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}${hidden ? " navbar--hidden" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="nav-container">
        <nav className="nav-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/" className="nav-logo-link">
          <img src="/logo.png" alt="Ryeco Foods" className="nav-logo" />
        </Link>

        <div className="nav-right">
          <Link to="/#contact" className="nav-cta" onClick={handleContactClick}>
            <span className="nav-cta__text">Contact Us</span>
            <span className="nav-cta__arrow">-&gt;</span>
          </Link>

          <button
            className={`nav-hamburger${menuOpen ? " nav-hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="nav-mobile__links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.href}
                    className="nav-mobile__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  to="/#contact"
                  className="nav-mobile__cta"
                  onClick={handleContactClick}
                >
                  Partner With Us
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
