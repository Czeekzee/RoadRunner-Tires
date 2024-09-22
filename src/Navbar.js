import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1); // Get the target ID
    setIsOpen(false); // Collapse the menu

    if (targetId === "home") {
      window.scrollTo({ top: 0 - 80, behavior: 'smooth' });
    } else {
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="logo">
        <div>RoadRunner Tires</div>
      </div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>Services</a>
        <a href="#contact" onClick={handleLinkClick}>Contact Us</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
    </nav>
  );
}

export default Navbar;
