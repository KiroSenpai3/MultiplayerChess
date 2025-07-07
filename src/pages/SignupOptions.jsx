import './SignupOptions.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

export default function SignupOptions() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleEmailSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    console.log('✅ Google signup token:', token);

    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (data.error) setMessage(data.error);
      else {
        setMessage('Google sign up successful!');
        // TODO: Redirect to dashboard
      }
    } catch (err) {
      console.error(err);
      setMessage('Google sign up failed.');
    }
  };

  const handleGoogleError = () => {
    setMessage('❌ Google sign up failed.');
  };

  return (
    <div className="signup-options-wrapper">
      <div className="signup-options-card">
        <h2>Welcome to Chess App</h2>

        {message && <p className="message">{message}</p>}

        <button className="email-btn" onClick={handleEmailSignup}>
          Sign up with Email
        </button>

        <div className="google-btn-container">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        </div>

        <p className="login-redirect">
          Already have an account?{' '}
          <button className="login-link" onClick={handleLogin}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
