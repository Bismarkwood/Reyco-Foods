// src/components/MarqueeBanner.jsx
import React from "react";
import "./MarqueeBanner.css";

const topItems = [
  "Brine Meat Export",
  "Salted Pig Feet in Brine",
  "Pork, Beef & Poultry",
  "Offal Meat Supply",
  "UK to West Africa",
  "Cold-Chain Ready",
];

const bottomItems = [
  "Ghana",
  "Liberia",
  "Sierra Leone",
  "Caribbean Islands",
  "18-24 Month Shelf Life",
  "Reliable Trade Supply",
];

function MarqueeTrack({ items, reverse = false }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`marquee-banner__track${reverse ? " marquee-banner__track--reverse" : ""}`}>
      {repeatedItems.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <span className="marquee-banner__item">{item}</span>
          <span className="marquee-banner__dot">&bull;</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="marquee-banner">
      <div className="marquee-banner__strip marquee-banner__strip--orange">
        <MarqueeTrack items={topItems} />
      </div>

      <div className="marquee-banner__strip marquee-banner__strip--blue">
        <MarqueeTrack items={bottomItems} reverse />
      </div>
    </div>
  );
}
