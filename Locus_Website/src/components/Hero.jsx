import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section class="hero">
      <div class="container hero-content">
        <h1>📍Find What’s Happening Around You</h1>
        <p>
          Real-time local chat, live maps, and discovery — all in one place.
        </p>
        <a href="#join" class="hero-cta">
          Start Exploring
        </a>
      </div>
      {/* <div class="map-bg"></div> */}
    </section>
  );
}

export default Hero;
