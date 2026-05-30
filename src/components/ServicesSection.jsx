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

const services = [
  {
    number: "01",
    label: "MARKET VISIBILITY",
    title: "Retail Placement",
    description:
      "We help brands secure stronger visibility and accessibility across relevant retail outlets, ensuring products are positioned where consumers can easily discover and purchase them.",
    highlights: ["Shelf Visibility", "Outlet Positioning", "Trade Relationships", "Sales Performance Support"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=900&q=85",
    caption: "Retail visibility across key outlets",
    variant: "light",
  },
  {
    number: "02",
    label: "SOURCE TO SHELF",
    title: "Distribution",
    description:
      "We support seamless product movement from source to shelf through a well-managed distribution network, enabling timely delivery, broader coverage, and sustained product availability.",
    highlights: ["Product Flow", "Timely Delivery", "Channel Coverage", "Availability Management"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    caption: "Reliable movement from source to shelf",
    variant: "dark",
  },
  {
    number: "03",
    label: "BRAND GROWTH",
    title: "Marketing Activation",
    description:
      "We support brands with market-focused campaigns, merchandising, in-store promotions, and activations designed to increase awareness, drive engagement, and boost sales.",
    highlights: ["Merchandising", "In-Store Promotions", "Brand Campaigns", "Consumer Engagement"],
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=85",
    caption: "Campaigns that drive consumer engagement",
    variant: "accent",
  },
];

function ServicePanel({ service, index }) {
  const panelRef = useRef(null);
  const isInView = useInView(panelRef, { once: true, margin: "-100px" });

  return (
    <div
      className={`services__panel services__panel--${service.variant}`}
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
          src={service.image}
          alt={service.title}
          className="services__panel-image"
          loading="lazy"
        />
        <div className="services__panel-image-overlay" />
        <span className="services__panel-caption">{service.caption}</span>
      </motion.div>

      {/* Content side */}
      <div className="services__panel-content">
        <motion.span
          className="services__panel-number"
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {service.number}
        </motion.span>

        <motion.span
          className="services__panel-label"
          variants={fadeIn(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {service.label}
        </motion.span>

        <motion.h3
          className="services__panel-title"
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {service.title}
        </motion.h3>

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
          {service.description}
        </motion.p>

        <motion.ul
          className="services__panel-highlights"
          variants={fadeUp(1.0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {service.highlights.map((h) => (
            <li key={h} className="services__panel-highlight">
              <span className="services__panel-highlight-dot" />
              {h}
            </li>
          ))}
        </motion.ul>



        {/* Page indicator */}
        <span className="services__panel-indicator">
          {service.number} / 03
        </span>
      </div>

      {/* Route line for distribution panel */}
      {service.variant === "dark" && (
        <div className="services__panel-route" />
      )}
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
        <span className="services__tag">OUR SERVICES</span>
        <h2 className="services__title">Designed to Move Brands Faster</h2>
        <motion.div
          className="services__title-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: cineEase }}
        />
        <p className="services__intro">
          From retail visibility to product movement and market activation,
          Ritestock helps FMCG brands enter, grow, and remain available across
          Ghana's retail market.
        </p>
      </motion.div>

      {/* Progress bar */}
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
          <span>Retail Placement</span>
          <span>Distribution</span>
          <span>Marketing</span>
        </div>
      </motion.div>

      {/* Service panels */}
      <div className="services__panels">
        {services.map((service, i) => (
          <ServicePanel key={service.number} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
