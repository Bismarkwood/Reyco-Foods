// src/components/AboutSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutSection.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: cineEase },
  },
});

// Cards: content card followed by image card, alternating
const carouselItems = [
  // Salted Pig Feet in Brine
  {
    type: "content",
    title: "From Farm to Market",
    quote: "Ryeco Foods manages the full journey from sourcing through to delivery, so you receive exactly what you expect, every time.",
    color: "#1f6b3b",
  },
  {
    type: "image",
    image: "/Salted Pig Feet in Brine.png",
    alt: "Jars of salted pig feet in brine with green lids on a retail shelf",
  },
  // Frozen Pork Cuts
  {
    type: "content",
    title: "Built for Export",
    quote: "Our products are packaged and preserved to perform in hot climates, with shelf life and brine quality that set the benchmark.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "/carousel_frozen_pork_cuts.png",
    alt: "Vacuum-packed frozen pork spareribs and pig tails for export",
  },
  // Frozen Beef & Mutton
  {
    type: "content",
    title: "Trusted Partners",
    quote: "We work with a network of reliable producers and suppliers to guarantee supply continuity and product integrity.",
    color: "#123f28",
  },
  {
    type: "image",
    image: "/carousel_frozen_export_logistics.png",
    alt: "Frozen beef and mutton export boxes in cold storage warehouse",
  },
  // Sourced with Care
  {
    type: "content",
    title: "Sourced with Care",
    quote: "Every product in our range is carefully selected and quality-checked before it reaches your shelf.",
    color: "#1f6b3b",
  },
  {
    type: "image",
    image: "/meat_1.png",
    alt: "Premium frozen pork ribs and belly cuts ready for export",
  },
  // Quality You Trust
  {
    type: "content",
    title: "Quality You Trust",
    quote: "Ryeco Foods delivers premium food products held to the highest standards of safety, freshness and consistency.",
    color: "#123f28",
  },
  {
    type: "image",
    image: "/frozen_pig_feet.png",
    alt: "Premium frozen pork cuts and trotters packaged for export",
  },
  // Global Reach
  {
    type: "content",
    title: "Global Reach",
    quote: "We supply and export to markets across Africa, the Caribbean and beyond, connecting producers with buyers worldwide.",
    color: "#1f6b3b",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=600&q=85",
    alt: "Brine barrels stacked and ready for export",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Duplicate items for seamless infinite loop
  const loopItems = [...carouselItems, ...carouselItems];

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Background elements */}
      <div className="about__bg-accent" />
      <div className="about__bg-grid" />

      {/* Section header */}
      <motion.div
        className="about__header"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="about__tag">ABOUT RYCOFOODS</span>
        <h2 className="about__title">
          Company Brief Section
        </h2>
        <div className="about__title-line" />
        <p className="about__intro">
          Ryeco foods are producers and exporters of high-quality Salted Pig Feet in Brine specifically made for hot climate without the need to refrigerate. Our Salted Pig Feet in strong brine with green-top lid has a longer shelf life of up to 18 months and we also export frozen meat and Offal.
        </p>
      </motion.div>

      {/* Infinite scrolling carousel */}
      <div className="about__carousel-wrap">
        <div className="about__carousel-track">
          {loopItems.map((item, i) =>
            item.type === "content" ? (
              <div
                key={`${item.title}-${i}`}
                className="about__carousel-card about__carousel-card--content"
                style={{ "--card-color": item.color }}
              >
                <div className="about__carousel-content-inner">
                  <h3 className="about__carousel-title">{item.title}</h3>
                  <p className="about__carousel-quote">"{item.quote}"</p>
                  <div className="about__carousel-line" />
                </div>
              </div>
            ) : (
              <div
                key={`img-${i}`}
                className="about__carousel-card about__carousel-card--image"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="about__carousel-img"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
