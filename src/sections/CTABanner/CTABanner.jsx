// src/components/CTABanner.jsx
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./CTABanner.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
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

const lineExpand = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay, ease: cineEase },
  },
});

export default function CTABanner({ openContactModal }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section className="cta-banner" id="contact" ref={sectionRef}>
      <motion.div
        className="cta-banner__bg"
        style={{ y: bgY }}
        initial={{ scale: 1.06 }}
        animate={isInView ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      <div className="cta-banner__overlay" />
      <div className="cta-banner__grain" />
      <div className="cta-banner__vignette" />

      <div className="cta-banner__float-words">
        <span className="cta-banner__float-word cta-banner__float-word--1">Retail Placement</span>
        <span className="cta-banner__float-word cta-banner__float-word--2">Distribution</span>
        <span className="cta-banner__float-word cta-banner__float-word--3">Market Activation</span>
        <span className="cta-banner__float-word cta-banner__float-word--4">Household</span>
        <span className="cta-banner__float-word cta-banner__float-word--5">Toiletries</span>
        <span className="cta-banner__float-word cta-banner__float-word--6">Food &amp; Beverages</span>
      </div>

      <div className="cta-banner__content">
        <motion.div
          className="cta-banner__label-wrap"
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="cta-banner__label-line"
            variants={lineExpand(0.5)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <button
            type="button"
            className="cta-banner__label"
            onClick={openContactModal}
          >
            Contact Us
          </button>
          <motion.span
            className="cta-banner__label-line"
            variants={lineExpand(0.5)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </motion.div>

        <motion.h2
          className="cta-banner__heading"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Let's Supply You{" "}
          <em className="cta-banner__heading-italic">Premium Meat.</em>
        </motion.h2>

        <motion.form
          className="cta-banner__form"
          variants={fadeUp(1.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onSubmit={(e) => {
            e.preventDefault();
            openContactModal?.();
          }}
        >
          <div className="cta-banner__input-wrap">
            <input
              type="email"
              className="cta-banner__input"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <motion.div
              className="cta-banner__input-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.9, delay: 1.5, ease: cineEase }}
            />
            <span className="cta-banner__input-dot" />
          </div>
          <button type="submit" className="cta-banner__btn">
            <span className="cta-banner__btn-text">Start a Conversation</span>
            <span className="cta-banner__btn-arrow">-&gt;</span>
          </button>
        </motion.form>

        <motion.p
          className="cta-banner__micro"
          variants={fadeIn(1.7)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Trusted UK exporter of salted and brine meats to West Africa and the Caribbean.
        </motion.p>
      </div>
    </section>
  );
}
