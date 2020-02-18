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
      <button value={answerChoices[0]}>{answerChoices[0]}</button>
      <button value={answerChoices[1]}>{answerChoices[1]}</button>
      <button value={answerChoices[2]}>{answerChoices[2]}</button>
      <button value={answerChoices[3]}>{answerChoices[3]}</button>
    </form>
  );
};

export default Question;
