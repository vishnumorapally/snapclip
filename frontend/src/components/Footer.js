import React from 'react';
import {Link} from "react-router-dom"
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p className="footer-text">© 2024 Vishnu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
