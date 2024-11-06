// src/components/Testimonials.js
import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Priya',
    feedback: 'SnapClip has transformed how I share information! So easy and reliable.',
  },
  {
    name: 'Ananya',
    feedback: 'The best clipboard sharing tool I’ve used! Highly recommended.',
  },
  {
    name: 'Arjun',
    feedback: 'I love the secure storage feature. My data feels safe and accessible.',
  },
  {
    name: 'Karan',
    feedback: 'The interface is clean and user-friendly, making it a breeze to use.',
  },
];

function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('testimonial-card-active');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('testimonial-card-exit'); // Start exit animation

      setTimeout(() => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        setAnimationClass('testimonial-card-active'); // Reset to active for new testimonial
      }, 500); // Duration of the exit animation

    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className={`testimonial-card ${animationClass}`}>
        <p>"{testimonialsData[currentTestimonialIndex].feedback}"</p>
        <h4>- {testimonialsData[currentTestimonialIndex].name}</h4>
      </div>
    </section>
  );
}

export default Testimonials;
