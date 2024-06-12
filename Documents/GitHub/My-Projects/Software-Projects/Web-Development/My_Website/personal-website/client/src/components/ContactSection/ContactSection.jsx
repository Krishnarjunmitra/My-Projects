import React, { useState } from 'react';
import './ContactSection.css';
import { sendEmail } from '../utils/fetchAPI';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail({ name, email, message });
      setSuccess(true);
      setError(false);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
          {success && <p className="success">Message sent successfully!</p>}
          {error && <p className="error">Error sending message.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;