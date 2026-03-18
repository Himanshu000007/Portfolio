import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Send } from 'lucide-react';

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
      // Sending email via FormSubmit (no backend required)
      const response = await axios.post('https://formsubmit.co/ajax/himanshu8809564335@gmail.com', form);
      if (response.data.success === 'true') {
        setStatus('Thanks! Your message has been sent directly to my email.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Please try again or email directly.');
    }
  };

  return (
    <div className="section fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
        <Mail size={28} color="var(--accent)" />
        <h2 style={{ margin: 0 }}>Get in Touch</h2>
      </div>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
        Have a question or want to work together? Send me a message, and it will drop straight into my inbox!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Hi Himanshu, let's connect..." required />
        </label>
        <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
          <Send size={16} /> Send Message
        </button>
        {status && <p className="status-msg" style={{ marginTop: '1rem', color: status.includes('Thanks') ? '#10b981' : '#ef4444' }}>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;

