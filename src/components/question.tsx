import React from 'react';
import Answer from './answer';

interface Question {
  correctAnswer: string;
  score: number;
  questionNumber: number;
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
  questionNumber,
  isFirstAnswer,
  answers,
  singleQuestion,
  handleFormSubmit,
  setScore,
  setIsFirstAnswer,
}) => {
  return (
    <div className="question-container">
      <form onSubmit={handleFormSubmit}>
        <h1>Question {questionNumber}: {singleQuestion}</h1>
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
    </div>
  );
};

export default Question;
