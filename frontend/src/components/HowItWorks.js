// src/components/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Step 1: Create a Link',
    description: 'Easily create a secure link to share your clipboard content.',
    icon: '📝', // You can use an icon or image here
  },
  {
    title: 'Step 2: Share It',
    description: 'Share the link with anyone you want to give access to.',
    icon: '🔗',
  },
  {
    title: 'Step 3: Access and Manage',
    description: 'Access your clipboard data anytime and manage your shared links.',
    icon: '📂',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
