import React from "react";
import "../../styles/Header.css";

function Header() {
  return (
    <header class="navbar">
      <div class="container nav-content">
        <div class="logo">Locus</div>
        <nav class="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#join" class="cta-button">
            Join Beta
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
