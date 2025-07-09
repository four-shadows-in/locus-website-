import React from "react";
import "../../styles/Footer/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Locus. All rights reserved.</p>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to="/safety-standards">Safety Standards</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
