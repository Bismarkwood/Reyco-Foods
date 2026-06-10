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
  // Quality You Can Trust
  {
    type: "content",
    title: "Quality You Can Trust",
    quote: "Ryeco Foods delivers premium brine meat products.",
    color: "#1f6b3b",
  },
  {
    type: "image",
    image: "/Quality You Can Trust.png",
    alt: "Inspector inspecting barrels in a warehouse",
  },
  // Global Reach
  {
    type: "content",
    title: "Global Reach",
    quote: "We export to markets across Africa and beyond.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "/Global Reach.png",
    alt: "World map showing global export routes",
  },
  // Built for Export
  {
    type: "content",
    title: "Built for Export",
    quote: "Our products are packaged and preserved to perform in hot climates, with shelf life and brine quality that set the benchmark.",
    color: "#123f28",
  },
  {
    type: "image",
    image: "/Built for Export.png",
    alt: "Cargo being loaded into a truck for export",
  },
  // Trusted Partners
  {
    type: "content",
    title: "Trusted Partners",
    quote: "We work with a reliable network of meat processors and suppliers in the United Kingdom and mainland Europe to guarantee supply continuity and product integrity.",
    color: "#1f6b3b",
  },
  {
    type: "image",
    image: "/Trusted Partners.png",
    alt: "Two people shaking hands in a warehouse",
  },
  // Sourced with Care
  {
    type: "content",
    title: "Sourced with Care",
    quote: "Every product in our range is carefully selected and quality-checked before it reaches your shelf.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "/Sourced with Care.png",
    alt: "Workers preparing products in a facility",
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
        <span className="about__tag">ABOUT RYECO FOODS</span>
        <h2 className="about__title">
          Company Brief
        </h2>
        <div className="about__title-line" />
        <p className="about__intro">
          Ryeco Foods are producers and exporters of high-quality Salted Pig Feet in Brine specifically made for hot climate without the need to refrigerate. Our Salted Pig Feet in strong brine with green-top lid has a longer shelf life of up to 18 months.
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
