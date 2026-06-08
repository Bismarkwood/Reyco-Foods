// src/components/ProductsSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ProductsSection.css";

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

const products = [
  {
    number: "01",
    title: "Salted Pig Feet",
    description: "Premium salted pig feet brined and stored in barrels for export. Ideal for hot climates.",
    image: "/Salted Pig Feet.png",
    accent: "orange",
  },
  {
    number: "02",
    title: "Salted Beef",
    description: "Salted beef cuts stored in buckets, perfect for long shelf life without refrigeration.",
    image: "/Salted Beef.png",
    accent: "orange",
  },
  {
    number: "03",
    title: "Salted Pigtail",
    description: "Salted pork tail pieces stored in buckets, ready for export to African markets.",
    image: "/Salted Pigtail.png",
    accent: "blue",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="products" id="products" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="products__bg-shape products__bg-shape--1" />
      <div className="products__bg-shape products__bg-shape--2" />
      <div className="products__bg-shape products__bg-shape--3" />
      <div className="products__bg-dots" />

      {/* Section header */}
      <motion.div
        className="products__header"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="products__tag">FROZEN MEAT EXPORT</span>
          <h2 className="products__title">
            Frozen Meat Export to Africa
            <span className="products__title-accent"></span>
          </h2>
        <motion.div
          className="products__title-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: cineEase }}
        />
        <p className="products__intro">
          Ryeco Foods exports a full range of frozen meats to Africa — including frozen pig feet, pig tail, pork spareribs, beef, mutton, chicken quarters, chicken legs, frozen beef feet, beef sinews, offal meat, chicken gizzards, chicken liver, beef liver, turkey legs, whole turkey, whole chicken, beef neck, and sausages.
        </p>
      </motion.div>

      {/* Staggered card grid */}
      <div className="products__grid">
        {products.map((product, i) => (
          <motion.div
            key={product.number}
            className={`products__card products__card--${product.accent}`}
            variants={fadeUp(0.25 + i * 0.18)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Image */}
            <div className="products__card-image-wrap">
              <img
                src={product.image}
                alt={product.title}
                className="products__card-image"
                loading="lazy"
              />
              <div className="products__card-image-overlay" />
            </div>

            {/* Content */}
            <div className="products__card-content">
              <h3 className="products__card-title">{product.title}</h3>
              <div className="products__card-line" />
              <p className="products__card-desc">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
