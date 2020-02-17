import React from 'react';
import { shuffle } from './../assets/helper-functions';

interface Question {
  singleQuestion: any;
  handleFormSubmit: any;
  handleAnswerClick: any;
}

const Question: React.FC<Question> = ({ singleQuestion, handleFormSubmit, handleAnswerClick }) => {

  const {
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = singleQuestion;
  const answerChoices = shuffle(incorrectAnswers, correctAnswer);

  return (
    <form onSubmit={handleFormSubmit} onClick={handleAnswerClick}>
      <h1>{question}</h1>
      <option value={answerChoices[0]}>{answerChoices[0]}</option>
      <option value={answerChoices[1]}>{answerChoices[1]}</option>
      <option value={answerChoices[2]}>{answerChoices[2]}</option>
      <option value={answerChoices[3]}>{answerChoices[3]}</option>
      <input type="submit" />
    </form>
  );
};

export default Question;
