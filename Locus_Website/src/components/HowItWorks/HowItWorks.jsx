import React from "react";
import "../../styles/HowItWorks/HowItWorks.css";
import StepCard from "./StepCard";

function HowItWorks() {
  const steps = [
    {
      title: "map",
      content: "📍 Drop a pin to share a thought",
    },
    {
      title: "chat",
      content: "💬 Join chats in your neighborhood",
    },
    {
      title: "explore",
      content: "🌍 Explore trending activity around you",
    },
  ];

  return (
    <section className="how-it-works white-bg" id="how">
      <div className="container">
        <h2>How Locus Works</h2>
        <div className="steps">
          {steps?.map((step) => (
            <StepCard key={step.title} children={step.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
