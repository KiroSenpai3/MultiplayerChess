import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Play.css';
import ChessGame from './ChessGame';

const Play = () => {
  const navigate = useNavigate();
  const [gameMode, setGameMode] = useState('online');
  const [timeControl, setTimeControl] = useState('rapid');
  const [isFindingGame, setIsFindingGame] = useState(false);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleFindOpponent = () => {
    setIsFindingGame(true);
    // Simulate finding a game
    setTimeout(() => {
      setIsFindingGame(false);
      // navigate('/game') would go to actual game in real implementation
    }, 2000);
  };

  return (
    <div className="chess-play-page">
      {/* Navigation Bar (same as homepage) */}
      <nav className="chess-nav">
        <div className="nav-left">
          <div className="logo" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>
            <span className="logo-piece">♚</span>
            <span className="logo-text">Chess.com</span>
          </div>
          <ul className="nav-links">
            <li className="active"><a href="#">Play</a></li>
            <li><a href="#">Puzzles</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="btn sign-in">Sign In</button>
          <button className="btn sign-up">Sign Up</button>
        </div>
      </nav>

      {/* Main Play Content */}
      <div className="play-container">
        <div className="play-options">
          <h2>Play Chess</h2>
          
          {/* Game Mode Selection */}
          <div className="option-section">
            <h3>Game Mode</h3>
            <div className="mode-selector">
              <button 
                className={`mode-btn ${gameMode === 'online' ? 'active' : ''}`}
                onClick={() => setGameMode('online')}
              >
                Online
              </button>
              <button 
                className={`mode-btn ${gameMode === 'computer' ? 'active' : ''}`}
                onClick={() => setGameMode('computer')}
              >
                vs Computer
              </button>
              <button 
                className={`mode-btn ${gameMode === 'friend' ? 'active' : ''}`}
                onClick={() => setGameMode('friend')}
              >
                vs Friend
              </button>
            </div>
          </div>

          {/* Time Control Selection */}
          <div className="option-section">
            <h3>Time Control</h3>
            <div className="time-controls">
              <button 
                className={`time-btn ${timeControl === 'bullet' ? 'active' : ''}`}
                onClick={() => setTimeControl('bullet')}
              >
                <span>Bullet</span>
                <span>1 min</span>
              </button>
              <button 
                className={`time-btn ${timeControl === 'blitz' ? 'active' : ''}`}
                onClick={() => setTimeControl('blitz')}
              >
                <span>Blitz</span>
                <span>3|2</span>
              </button>
              <button 
                className={`time-btn ${timeControl === 'rapid' ? 'active' : ''}`}
                onClick={() => setTimeControl('rapid')}
              >
                <span>Rapid</span>
                <span>10|0</span>
              </button>
              <button 
                className={`time-btn ${timeControl === 'daily' ? 'active' : ''}`}
                onClick={() => setTimeControl('daily')}
              >
                <span>Daily</span>
                <span>24h</span>
              </button>
            </div>
          </div>

          {/* Find Game Button */}
          <button 
            className="find-game-btn" 
            onClick={handleFindOpponent}
            disabled={isFindingGame}
          >
            {isFindingGame ? (
              <>
                <span className="spinner"></span>
                Finding Opponent...
              </>
            ) : (
              'Play Online'
            )}
          </button>
        </div>

        {/* Chess Board Preview */}
        <div className="board-preview">
          <div className="chess-board">
            <ChessGame />
          </div>
          <div className="board-label">
            {gameMode === 'online' && 'Waiting for opponent...'}
            {gameMode === 'computer' && 'Play against computer'}
            {gameMode === 'friend' && 'Challenge a friend'}
          </div>
        </div>
      </div>

      {/* Footer (same as homepage) */}
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

export default Play;