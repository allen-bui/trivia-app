import React from 'react';
import Answer from './answer';

interface Question {
  singleQuestion: any;
  handleFormSubmit: any;
  answers: any;
  correctAnswer: string;
  setScore: any;
  score: number;
  isFirstAnswer: boolean;
  setIsFirstAnswer: any;
}

const Question: React.FC<Question> = ({
  singleQuestion,
  handleFormSubmit,
  answers,
  correctAnswer,
  setScore,
  score,
  isFirstAnswer,
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
