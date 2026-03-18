import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('Thanks! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;

