import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import ChessBoard from './Chessboard';

const HomePage = () => {
    const navigate = useNavigate()

    const handleEmailSignup = () => {
    navigate('/signupoptions');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="chess-homepage">
      {/* Navigation Bar */}
      <nav className="chess-nav">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-piece">♚</span>
            <span className="logo-text">Chess.com</span>
          </div>
          <ul className="nav-links">
            <li><a href="#">Play</a></li>
            <li><a href="#">Puzzles</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="btn sign-in" onClick={handleLogin}>Sign In</button>
          <button className="btn sign-up" onClick={handleEmailSignup}>Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Play Chess Online</h1>
          <p>Join the world's largest chess community with over 150 million members!</p>
          <div className="hero-buttons">
            <button className="btn play-free">Play Free</button>
            <button className="btn learn-more">Learn More</button>
          </div>
        </div>
        <div className="hero-board">
          <div className="chess-board">
            <div className="board-placeholder"><ChessBoard/></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">♞</div>
          <h3>Play vs Computer</h3>
          <p>Challenge the computer at any level from beginner to grandmaster.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">👥</div>
          <h3>Play vs Friends</h3>
          <p>Invite friends to play or find opponents in the chess community.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🧩</div>
          <h3>Solve Puzzles</h3>
          <p>Sharpen your skills with over 100,000 chess puzzles.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="chess-footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Community</a>
          <a href="#">Careers</a>
        </div>
        <div className="copyright">
          © 2023 Chess.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;