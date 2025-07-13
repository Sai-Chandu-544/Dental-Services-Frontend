import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contact.css';

export const ContactUs=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setResponse('Please fill all the fields.');
      return;
    }

    setLoading(true);
    try {
    
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setResponse('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setResponse('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {response && <p className="form-response">{response}</p>}
        </form>

        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> smile@clinic.com</p>
          <p><strong>Address:</strong> 123 Dental Street, Hyderabad, India</p>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.195635064142!2d78.48667187594433!3d17.44279598313921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9154f021dad9%3A0x57d7f2a0588eb187!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1621606900493!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


