import React from "react";
import "../../styles/Features/FeatureCard.css";

function FeatureCard({ icon, title, content }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default FeatureCard;
