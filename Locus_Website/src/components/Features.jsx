import React from "react";
import "../styles/Features.css";

function Features() {
  return (
    <section class="features beige-bg" id="features">
      <div class="container">
        <h2>What Makes Locus Different?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="icon">💬</div>
            <h3>Local Chat</h3>
            <p>Connect with people nearby in real time.</p>
          </div>
          <div class="feature-card">
            <div class="icon">🗺️</div>
            <h3>Live Maps</h3>
            <p>See activity on the map as it happens.</p>
          </div>
          <div class="feature-card">
            <div class="icon">🔍</div>
            <h3>Local Discovery</h3>
            <p>Find trending spots, events, and people.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
