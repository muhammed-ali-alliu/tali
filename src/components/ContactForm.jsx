import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .send('service_oebi7qs', 'template_4x7d08m', form, 'kPF1ZY9cFvhXXMZFm')
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setError('Something went wrong. Try again.'))
      .finally(() => setLoading(false));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {sent && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Your email" value={form.email} onChange={handleChange} />
      <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} />
      <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
    </form>
  );
}

export default ContactForm;
