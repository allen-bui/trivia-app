import React from 'react';
import { shuffle } from './../assets/helper-functions';

interface Form {
  singleQuestion: any;
  handleFormSubmit: any;
}

const Form: React.FC<Form> = ({ singleQuestion, handleFormSubmit }) => {

  const {
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = singleQuestion;
  const answerChoices = shuffle(incorrectAnswers, correctAnswer);

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>{question}</h1>
      <option value="">{answerChoices[0]}</option>
      <option value="">{answerChoices[1]}</option>
      <option value="">{answerChoices[2]}</option>
      <option value="">{answerChoices[3]}</option>
      <input type="submit" />
    </form>
  );
};

export default Form;
