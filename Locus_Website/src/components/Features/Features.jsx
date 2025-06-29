import React from "react";
import "../../styles/Features/Features.css";
import FeatureCard from "./FeatureCard.jsx";

function Features() {
  const features = [
    {
      icon: "💬",
      title: "Local Chat",
      content: "Connect with people nearby in real time.",
    },
    {
      icon: "🗺️",
      title: "Live Maps",
      content: "See activity on the map as it happens.",
    },
    {
      icon: "🔍",
      title: "Local Discovery",
      content: "Find trending spots, events, and people.",
    },
  ];

  return (
    <section className="features beige-bg" id="features">
      <div className="container">
        <h2>What Makes Locus Different?</h2>
        <div className="feature-grid">
          {features?.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
