import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Tali Software Services" />
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#cta" className="cta-button">Book a Call</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
