import React from 'react';

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

  // need to create a randomize function to spit out correct answer

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>{question}</h1>
      <option value="">{correctAnswer}</option>
      <option value="">{incorrectAnswers[0]}</option>
      <option value="">{incorrectAnswers[1]}</option>
      <option value="">{incorrectAnswers[2]}</option>
      <input type="submit" />
    </form>
  );
};

export default Form;
