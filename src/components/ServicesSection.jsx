// src/components/ServicesSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ServicesSection.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
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
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const clipReveal = (delay = 0) => ({
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, delay, ease: cineEase },
  },
});

const products = [
  {
    number: "01",
    badge: "SIGNATURE PRODUCT",
    title: "Zilla Salted Pig Feet in Brine",
    subtitle: "Green-Top Lid · 18–24 Month Shelf Life",
    description:
      "Our flagship product — premium salted pig feet packed in strong brine, specifically formulated for hot climates. No refrigeration needed. The iconic green-top lid seals in freshness and guarantees a shelf life of up to 18–24 months, making it ideal for export to any region.",
    highlights: ["No Refrigeration Required", "18–24 Month Shelf Life", "Hot-Climate Formula", "Export Ready"],
    image: "/meat_5.png",
    caption: "Zilla Green-Top · Premium Brine Formula",
    variant: "light",
    tag: "BEST SELLER",
  },
  {
    number: "02",
    badge: "FROZEN EXPORTS",
    title: "Frozen Meat & Offal",
    subtitle: "Cold-Chain Certified · Bulk Export",
    description:
      "Beyond pig feet, RycoFoods exports a wide range of frozen meat and offal products. Every batch is cold-chain certified, hygienically processed, and packaged for long-haul international transport — maintaining quality from our facilities to your market.",
    highlights: ["Cold-Chain Certified", "Bulk Export Available", "Hygienically Processed", "International Shipping"],
    image: "/meat_3.png",
    caption: "Frozen Meat & Offal · Bulk Export Quality",
    variant: "dark",
    tag: "EXPORT GRADE",
  },
  {
    number: "03",
    badge: "HOT-CLIMATE SOLUTION",
    title: "Salted Pig Feet in Brine",
    subtitle: "Strong Brine Formula · No Cold Storage",
    description:
      "Crafted specifically for markets without reliable cold storage, our Salted Pig Feet in Brine deliver consistent quality in the most demanding climates. The strong brine preserves natural flavour and texture — no freezer, no problem.",
    highlights: ["Strong Brine Preservation", "Consistent Flavour", "Tropical-Climate Safe", "Retail & Wholesale"],
    image: "/meat_4.png",
    caption: "Hot-Climate Ready · Strong Brine Formula",
    variant: "accent",
    tag: "HOT CLIMATE",
  },
];

function ProductPanel({ product }) {
  const panelRef = useRef(null);
  const isInView = useInView(panelRef, { once: true, margin: "-100px" });

  return (
    <div
      className={`services__panel services__panel--${product.variant}`}
      ref={panelRef}
    >
      {/* Image side */}
      <motion.div
        className="services__panel-image-wrap"
        variants={clipReveal(0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src={product.image}
          alt={product.title}
          className="services__panel-image"
          loading="lazy"
        />
        <div className="services__panel-image-overlay" />
        <span className="services__panel-caption">{product.caption}</span>
        <span className="services__panel-tag">{product.tag}</span>
      </motion.div>

      {/* Content side */}
      <div className="services__panel-content">
        <motion.span
          className="services__panel-number"
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {product.number}
        </motion.span>

        <motion.span
          className="services__panel-label"
          variants={fadeIn(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {product.badge}
        </motion.span>

        <motion.h3
          className="services__panel-title"
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {product.title}
        </motion.h3>

        <motion.p
          className="services__panel-subtitle"
          variants={fadeUp(0.55)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {product.subtitle}
        </motion.p>

        <motion.div
          className="services__panel-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: cineEase }}
        />

        <motion.p
          className="services__panel-desc"
          variants={fadeUp(0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {product.description}
        </motion.p>

        <motion.ul
          className="services__panel-highlights"
          variants={fadeUp(1.0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {product.highlights.map((h) => (
            <li key={h} className="services__panel-highlight">
              <span className="services__panel-highlight-dot" />
              {h}
            </li>
          ))}
        </motion.ul>

        {/* Page indicator */}
        <span className="services__panel-indicator">
          {product.number} / 03
        </span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="services" id="service" ref={sectionRef}>
      {/* Section header */}
      <motion.div
        className="services__header"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="services__tag">FEATURED PRODUCTS</span>
        <h2 className="services__title">Premium Meat Exports by RycoFoods</h2>
        <motion.div
          className="services__title-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: cineEase }}
        />
        <p className="services__intro">
          Ryeco Foods are producers and exporters of high-quality Salted Pig Feet
          in Brine — specifically made for hot climates without the need to
          refrigerate. Our Zilla Salted Pig Feet with green-top lid carry a
          long-life shelf life of up to 18–24 months.
        </p>
      </motion.div>

      {/* Product nav */}
      <motion.div
        className="services__progress"
        variants={fadeIn(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="services__progress-track">
          <div className="services__progress-fill" />
        </div>
        <div className="services__progress-labels">
          <span>Zilla Pig Feet</span>
          <span>Frozen Meat &amp; Offal</span>
          <span>Brine Pig Feet</span>
        </div>
      </motion.div>

      {/* Product panels */}
      <div className="services__panels">
        {products.map((product) => (
          <ProductPanel key={product.number} product={product} />
        ))}
      </div>
    </section>
  );
}
