import React, { useState } from 'react';

interface Answer {
  answer: string;
  correctAnswer: string;
  key: number;
  score: number;
  isFirstAnswer: boolean;
  setScore: any;
  setIsFirstAnswer: any;
}

const Answer: React.FC<Answer> = ({
  answer,
  correctAnswer,
  score,
  setScore,
  isFirstAnswer,
  setIsFirstAnswer,
}) => {
  const [style, setStyle] = useState<Object>({ backgroundColor: 'none' });
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleAnswerClick = (): void => {
    if (!isClicked) {
      if (answer === correctAnswer) {
        if (isFirstAnswer) setScore(score + 1);
        setStyle({ backgroundColor: 'green' });
      } else {
        setStyle({ backgroundColor: 'red' });
      }
    }
    setIsClicked(true);
    setIsFirstAnswer(false);
  };
  return (
    <option style={style} value={answer} onClick={handleAnswerClick}>
      {answer}
    </option>
  );
};

export default Answer;
