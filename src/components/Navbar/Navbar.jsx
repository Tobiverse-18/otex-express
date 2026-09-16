import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">O</span>

          <span className="logo-text">
            <strong>OTEX</strong>
            <small>EXPRESS</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#locations" onClick={closeMenu}>
            Locations
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <div className="mobile-nav-actions">
            <a href="#track" className="nav-track" onClick={closeMenu}>
              Track Shipment
            </a>

            <a href="#book" className="nav-book" onClick={closeMenu}>
              Book a Shipment
            </a>
          </div>
        </nav>

        <div className="desktop-nav-actions">
          <a href="#track" className="nav-track">
            Track Shipment
          </a>

          <a href="#book" className="nav-book">
            Book a Shipment
          </a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;