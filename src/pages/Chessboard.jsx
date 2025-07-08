import React from 'react';
import { Chessboard } from 'react-chessboard';

const ChessBoard = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <Chessboard
        boardWidth={500}
        boardOrientation="white"
        customDarkSquareStyle={{ backgroundColor: '#769656' }}
        customLightSquareStyle={{ backgroundColor: '#eeeed2' }}
      />
    </div>
  );
};

export default ChessBoard;
