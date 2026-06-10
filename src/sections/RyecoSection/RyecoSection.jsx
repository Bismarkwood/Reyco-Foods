import React from "react";
import "./RyecoSection.css";

const RyecoSection = () => (
  <section className="ryeco-section">
    <div className="text-col">
      <div className="eyebrow">WHY RYECO FOODS</div>
      <h1 className="headline">Built for taste, shelf life, and regional supply.</h1>
      <p className="intro">
        Ryeco Foods combines premium brine formulation, climate‑conscious preservation, and a complete brine meat range to support food distributors, retailers, hospitality buyers, and regional markets across Africa.
      </p>
      <div className="features">
        <div className="feature">
          <div className="feature-number">01</div>
          <div className="feature-content">
            <div className="feature-title">Premium Brine Formula</div>
            <div className="feature-desc">Our carefully selected brine enhances taste, consistency, and prolongs shelf life, ensuring every cut arrives perfect.</div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-number">02</div>
          <div className="feature-content">
            <div className="feature-title">Cold‑Chain Logistics</div>
            <div className="feature-desc">State‑of‑the‑art cold‑storage facilities guarantee product integrity from processing to your door.</div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-number">03</div>
          <div className="feature-content">
            <div className="feature-title">African‑Focused Supply</div>
            <div className="feature-desc">Tailored packaging and distribution strategies meet the unique climatic and market demands across the continent.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="visual-col">
      <div className="glow-bg" />
      <img
        className="main-image"
        src="/ryeco_warehouse_1780437790543.png"
        alt="Ryeco Foods cold‑chain warehouse"
      />
      <img
        className="overlay-img"
        src="/ryeco_product_1780437816413.png"
        alt="Premium brine meat product"
      />
      <div className="caption">Cold‑chain ready for Africa</div>
    </div>
  </section>
);

export default RyecoSection;
