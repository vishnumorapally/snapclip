// src/components/Hero.js
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to SnapClip</h1>
        <p>Your clipboard, always within reach. Share and retrieve content effortlessly.</p>
        <div className="hero-buttons">
          <Link to="/share" className="btn btn-primary">Share Code</Link>
          <Link to="/retrieve" className="btn btn-primary">Retrieve Code</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
