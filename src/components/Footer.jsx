import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-brand">
          <img className="ft-logo" src={logo} alt="Sunrise Holdings Limited" />
          <p>2nd Floor, Prabhu Group Building, Kathmandu</p>
          <a href="tel:014169003">01-416-9003</a>
        </div>

        <div className="ft-col">
          <h4>About us</h4>
          <Link to="/about/about">About us</Link>
          <Link to="/about/board-of-directors">Board of Directors</Link>
          <Link to="/about/mission-and-vision">Mission & Vision</Link>
        </div>

        <div className="ft-col">
          <h4>Portfolio</h4>
          <Link to="/portfolio/hospitality">Tourism & Hospitality</Link>
          <Link to="/portfolio/aviation-industry">Aviation Industry</Link>
          <Link to="/portfolio/hydropower">Hydropower</Link>
        </div>

        <div className="ft-col">
          <h4>Contact us</h4>
          <Link to="/contact-us">Contact us for more information</Link>
        </div>
      </div>

      <div className="ft-bottom">
        <p>© 2026 Sunrise Holdings Limited. All rights reserved.</p>
        <div className="ft-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
        </div>
        <p>Website by One Pixel Web</p>
      </div>
    </footer>
  )
}

export default Footer;