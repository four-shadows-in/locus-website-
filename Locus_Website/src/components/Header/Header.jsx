import React from "react";

import "../../styles/Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo">Locus</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#join" className="cta-button">
            Join Beta
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
