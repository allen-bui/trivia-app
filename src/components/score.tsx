import React from 'react';

interface Score {
  score: number;
  totalQuestions: number;
}

const Score: React.FC<Score> = ({ score, totalQuestions }) => {

  return (
    <div>
      <div>Score: {score} / {totalQuestions}</div>
    </div>
  )


}


export default Score;