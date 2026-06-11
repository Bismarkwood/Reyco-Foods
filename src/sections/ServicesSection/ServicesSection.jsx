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
    subtitle: "",
    description:
      "Our flagship product Zilla is specifically formulated for hot climates. No refrigeration needed.",
    highlights: ["No Refrigeration Required", "18–24 Month Shelf Life", "Hot-Climate Formula", "Export Ready"],
    image: "/Zilla Salted Pig Feet in Brine.png",
    caption: "Zilla Green-Top · Premium Brine Formula",
    variant: "light",
    tag: "BEST SELLER",
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
        <span className="services__tag">BRINE MEAT EXPORT</span>
        <h2 className="services__title">Brine Meat Export to Africa & Beyond</h2>
        <motion.div
          className="services__title-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: cineEase }}
        />
        <p className="services__intro">
          Ryeco Foods exports brine pig feet, pig tail and salted beef.
        </p>
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
