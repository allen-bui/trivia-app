import React from 'react';

interface Results {
  score: number;
  totalQuestions: number;
}

const Results: React.FC<Results> = ({ score, totalQuestions }) => {
  return (
    <h1>
      You scored a {(score / totalQuestions) * 100}%
    </h1>
  )
}

export default Results;