import React, { useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import './../styles/results.scss';

interface Results {
  score: number;
  totalQuestions: number;
  handlePlayAgainSubmit?: any;
}

const Results: React.FC<Results> = ({ score, totalQuestions, handlePlayAgainSubmit }) => {
  // Results
  const { width, height } = useWindowSize();
  const result: number = Math.floor((score / totalQuestions) * 100);
  const emoji: string = result >= 70 ? '😀' : '😵';
  const resultsMessage = result >= 70
    ? <div className="results-message">Great Job! You definitely know your trivia knowledge!</div>
    : <div className="results-message">There there buddy... you'll do better the next time around!</div>

  // Highlights & Event Handlers
  const [isHighlight, setIsHighlight] = useState<boolean>(false);
  const style = {
    backgroundColor: isHighlight ? 'orange' : 'white',
    color: isHighlight ? 'white' : 'black',
  };
  const handleHover = (): void => {
    setIsHighlight(!isHighlight);
  };

  return (
    <div className="results-container">
      <Confetti width={width} height={height} numberOfPieces={500} recycle={false} />
      <div className="results-title">
        You scored {result}%. {emoji}
        <div className="score-results">You got {score} / {totalQuestions} correct.</div>
      </div>
      {resultsMessage}
      <button
        style={style}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handlePlayAgainSubmit}
      >
        Play Again
      </button>
    </div>
  );
};

export default Results;
