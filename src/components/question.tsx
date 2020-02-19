import React from 'react';
import Answer from './answer';

interface Question {
  singleQuestion: any;
  handleFormSubmit: any;
  answers: any;
  correctAnswer: string;
  setScore: any;
  score: number;
}

const Question: React.FC<Question> = ({
  singleQuestion,
  handleFormSubmit,
  answers,
  correctAnswer,
  setScore,
  score,
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
        />
      ))}
      <input type="submit" />
    </form>
  );
};

export default Question;
