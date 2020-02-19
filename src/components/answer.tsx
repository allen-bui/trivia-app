import React, { useState } from 'react';

interface Answer {
  answer: string;
  key: number;
  correctAnswer: string;
  setScore: any;
  score: number;
}

const Answer: React.FC<Answer> = ({ answer, correctAnswer, setScore, score }) => {

  const [style, setStyle] = useState<Object>({ backgroundColor: 'none' });

  const handleAnswerClick = (): void => {
    if (answer === correctAnswer) {
      setStyle({ backgroundColor: 'green' });
      setScore(score + 1);
    } else {
      setStyle({ backgroundColor: 'red' });
    }
  };

  return (
    <option style={style} value={answer} onClick={handleAnswerClick}>
      {answer}
    </option>
  );
};

export default Answer;
