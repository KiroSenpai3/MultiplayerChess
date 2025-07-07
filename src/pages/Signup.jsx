import './Signup.css';
import { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.error) setMessage(data.error);
    else setMessage('Signup successful!');
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {message && <p className="message">{message}</p>}
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Create Account</button>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
}
