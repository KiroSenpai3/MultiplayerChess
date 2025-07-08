import React, { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import './ChessGame.css';

const ChessGame = ({ interactive = true, boardWidth = 400 }) => {
  const [game, setGame] = useState(new Chess());
  const [moveHistory, setMoveHistory] = useState([]);
  const [status, setStatus] = useState('White\'s turn');
  const boardRef = useRef(null);

  // Initialize/reset game
  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setMoveHistory([]);
    updateStatus(newGame);
  };

  // Update game status
  const updateStatus = (game) => {
    let statusText = '';
    
    if (game.isCheckmate()) {
      statusText = `Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins`;
    } else if (game.isDraw()) {
      statusText = 'Draw!';
    } else {
      statusText = `${game.turn() === 'w' ? 'White' : 'Black'}'s turn`;
      if (game.isCheck()) {
        statusText += ' (Check)';
      }
    }
    
    setStatus(statusText);
  };

  // Handle piece movement
  function onDrop(sourceSquare, targetSquare) {
    if (!interactive) return false;

    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // Always promote to queen for simplicity
      });

      if (move === null) return false; // Illegal move

      setGame(new Chess(game.fen()));
      setMoveHistory([...moveHistory, move.san]);
      updateStatus(game);
      
      // If playing against computer, make a move after a delay
      if (interactive && game.turn() === 'b' && !game.isGameOver()) {
        setTimeout(makeRandomMove, 500);
      }
      
      return true;
    } catch (e) {
      return false;
    }
  }

  // Make a random move for the computer (black)
  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (possibleMoves.length === 0) return;

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = possibleMoves[randomIndex];
    
    game.move(move);
    setGame(new Chess(game.fen()));
    setMoveHistory([...moveHistory, move]);
    updateStatus(game);
  };

  return (
    <div className="chess-game-container" ref={boardRef}>
      <div className="chess-status">{status}</div>
      
      <div style={{ width: boardWidth }}>
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={boardWidth}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
          }}
          customDarkSquareStyle={{ backgroundColor: '#779556' }}
          customLightSquareStyle={{ backgroundColor: '#eeeed2' }}
        />
      </div>
      
      {interactive && (
        <div className="chess-controls">
          <button onClick={resetGame} className="chess-btn">
            New Game
          </button>
          <div className="move-history">
            <h4>Move History:</h4>
            <div className="moves">
              {moveHistory.map((move, i) => (
                <span key={i} className="move">
                  {i % 2 === 0 ? `${Math.floor(i/2) + 1}.` : ''} {move}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChessGame;