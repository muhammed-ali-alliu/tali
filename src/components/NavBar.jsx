import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Tali Software Services" />
        </div>
        <ul className="navbar-links">
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
