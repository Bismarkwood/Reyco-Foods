import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HeroSection({ openContactModal }) {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <motion.div
          className="hero__copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="hero__eyebrow">UK frozen meat export</p>
          <h1 className="hero__title">
            Reliable frozen meat supply for African markets.
          </h1>
          <p className="hero__text">
            Ryeco Foods sources, prepares, and exports frozen meat and offal
            with dependable cold-chain handling from the UK to West Africa and
            the Caribbean.
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
    </section>
  );
}
