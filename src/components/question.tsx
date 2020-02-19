import React from 'react';
import Answer from './answer';

interface Question {
  correctAnswer: string;
  score: number;
  isFirstAnswer: boolean;
  answers: string[];
  singleQuestion: any;
  handleFormSubmit: any;
  setScore: any;
  setIsFirstAnswer: any;
}

const Question: React.FC<Question> = ({
  correctAnswer,
  score,
  isFirstAnswer,
  answers,
  singleQuestion,
  handleFormSubmit,
  setScore,
  setIsFirstAnswer,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>{singleQuestion}</h1>
      {answers.map((answer: string, index: number) => (
        <Answer
          answer={answer}
          key={index}
          correctAnswer={correctAnswer}
          setScore={setScore}
          score={score}
          setIsFirstAnswer={setIsFirstAnswer}
          isFirstAnswer={isFirstAnswer}
        />
      ))}
      <input type="submit" />
    </form>
  );
};

export default Question;
