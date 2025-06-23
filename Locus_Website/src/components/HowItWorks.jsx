import React from "react";
import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section class="how-it-works white-bg" id="how">
      <div class="container">
        <h2>How Locus Works</h2>
        <div class="steps">
          <div class="step">📍 Drop a pin to share a thought</div>
          <div class="step">💬 Join chats in your neighborhood</div>
          <div class="step">🌍 Explore trending activity around you</div>
        </div>
        <div class="mock-map-preview">📍5 new posts nearby</div>
      </div>
    </section>
  );
}

export default HowItWorks;
