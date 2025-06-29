import React from "react";
import "../../styles/Hero/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>📍Find What’s Happening Around You</h1>
        <p>
          Real-time local chat, live maps, and discovery — all in one place.
        </p>
        <a href="#join" className="hero-cta">
          Start Exploring
        </a>
      </div>
      {/* <div className="map-bg"></div> */}
    </section>
  );
}

export default Hero;
