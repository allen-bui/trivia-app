import React from 'react';
import Answer from './answer';
import './../styles/question.scss';

interface Question {
  correctAnswer: string;
  score: number;
  questionNumber: number;
  numberOfQuestions: number;
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
  numberOfQuestions,
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
        <div className="question-title">
          <strong>Question {questionNumber}: </strong>
          {singleQuestion}
        </div>
        <optgroup>
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
        </optgroup>
        {questionNumber === numberOfQuestions ? (
          <input type="submit" value="Submit" />
        ) : (
          <input type="submit" value="Next" />
        )}
      </form>
    </div>
  );
};

export default Question;
