import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

interface Results {
  score: number;
  totalQuestions: number;
  handlePlayAgainSubmit?: any;
}

const Results: React.FC<Results> = ({ score, totalQuestions, handlePlayAgainSubmit }) => {

  const { width, height } = useWindowSize();

  return (
    <div>
      <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
      <h1>You scored {(score / totalQuestions) * 100}%</h1>
      <button onClick={handlePlayAgainSubmit}>Play Again</button>
    </div>
  );
};

export default Results;
