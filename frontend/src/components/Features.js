import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

function Features() {
  const featuresRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the Features section is visible
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section
      id="features"
      ref={featuresRef}
      className={`features ${isVisible ? 'visible' : ''}`} // Add 'visible' class when in view
    >
      <h2>Key Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Easy Sync</h3>
          <p>Sync your clipboard content across multiple devices effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Storage</h3>
          <p>Your clipboard data is protected with top-level encryption.</p>
        </div>
        <div className="feature-card">
          <h3>Instant Access</h3>
          <p>Retrieve your clipboard data instantly from the cloud.</p>
        </div>
        <div className="feature-card">
          <h3>Set Your Code</h3>
          <p>Create and set your own custom access code to remember easily.</p>
        </div>
        <div className="feature-card">
          <h3>Simple Retrieval</h3>
          <p>Just search snapclip.com/get/"yourcode" to retrieve your data effortlessly.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
