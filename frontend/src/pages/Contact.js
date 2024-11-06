import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validationMessage, setValidationMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setValidationMessage('Please fill in all fields.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setValidationMessage('');

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Clear submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className='fdlj'>
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>If you have any questions or need further assistance, feel free to reach out!</p>
          <p>Email: vishnumorapally2004@gmail.com</p>
          <p>Phone: +91 7013652387</p>
          {/* <p>Address: 123 Main Street, City, Country</p> */}
        </div>
        {/* <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509719!2d144.95373531531882!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0d9033%3A0x5045675218cd4e0!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1628964447815!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
        className='hugh'
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      {validationMessage && (
        <p className="validation-message">{validationMessage}</p>
      )}
      {isSubmitted && (
        <p className="success-message">Thank you for contacting us! We will get back to you soon.</p>
      )}
    </div>
    </div>
  );
}

export default Contact;
