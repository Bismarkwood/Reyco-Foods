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
    title: "Salted Pig Feet in Brine",
    quote: "Ryeco Foods produces and exports high-quality Salted Pig Feet in Brine — made for hot climates with no refrigeration needed. Green-top lid with a shelf life of up to 18 months.",
    color: "#244A6F",
  },
  {
    type: "image",
    image: "/carousel_salted_pig_brine.png",
    alt: "Jars of salted pig feet in brine with green lids on a retail shelf",
  },
  // Frozen Pork Cuts
  {
    type: "content",
    title: "Frozen Pork Cuts",
    quote: "We export frozen pig feet, pig tails, and pork spareribs — premium quality, cold-chain maintained, packed and ready for African markets.",
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
    title: "Frozen Beef & Mutton",
    quote: "Our frozen beef and mutton range includes beef cuts, beef feet, beef sinews, beef neck, and beef liver — export-grade and cold-chain certified.",
    color: "#1a1a2e",
  },
  {
    type: "image",
    image: "/carousel_frozen_export_logistics.png",
    alt: "Frozen beef and mutton export boxes in cold storage warehouse",
  },
  // Frozen Chicken
  {
    type: "content",
    title: "Frozen Chicken",
    quote: "We supply frozen chicken quarters, chicken legs, and whole chicken — reliably sourced and delivered across Africa with full cold-chain integrity.",
    color: "#244A6F",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=85",
    alt: "Frozen chicken quarters and legs packaged for export",
  },
  // Offal Meats
  {
    type: "content",
    title: "Offal Meats",
    quote: "A complete offal range — chicken gizzards, chicken liver, beef liver — processed to export standard and in high demand across African retail and wholesale markets.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=85",
    alt: "Processed offal meats including gizzards and liver for export",
  },
  // Poultry — Turkey
  {
    type: "content",
    title: "Poultry — Turkey",
    quote: "Whole turkey, turkey legs, and turkey products exported frozen — consistently available and trusted by buyers across the African continent.",
    color: "#1a1a2e",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=600&q=85",
    alt: "Frozen turkey legs and whole turkey ready for export",
  },
  // Cold Chain Logistics
  {
    type: "content",
    title: "Cold Chain Logistics",
    quote: "End-to-end cold chain management ensures every frozen product — from pork to poultry to offal — arrives at its African destination in perfect condition.",
    color: "#244A6F",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=85",
    alt: "Refrigerated shipping containers at a port ready for Africa export",
  },
  // Africa Export Reach
  {
    type: "content",
    title: "Africa Export Reach",
    quote: "From West Africa to East Africa, Ryeco Foods' frozen meat and Offal products reach markets continent-wide — building supply reliability for retailers and distributors.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=85",
    alt: "Container ship transporting frozen meat exports to Africa",
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
