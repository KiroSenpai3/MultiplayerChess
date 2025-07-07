import './Login.css';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.error || 'Login successful!');
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    console.log('✅ Google token:', token);

    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (data.error) setMessage(data.error);
      else {
        setMessage('Google login successful!');
        // TODO: Save token/cookie and redirect to dashboard
      }
    } catch (err) {
      console.error(err);
      setMessage('Google login failed. Try again.');
    }
  };

  const handleGoogleError = () => {
    setMessage('❌ Google login failed.');
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        {message && <p className="message">{message}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>

        <div className="google-login-box">
          <p className="or">OR</p>
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        </div>

        <p className="signup-link">
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </form>
    </div>
  );
}
