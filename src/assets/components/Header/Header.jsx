import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar-container">
      <div className="dots-container">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="brand-name">Cindy</div>

      {/* Hamburger button for mobile screens */}
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation menu */}
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/aboutme" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      <div className="cross"></div>
    </div>
  );
};

export default Navbar;