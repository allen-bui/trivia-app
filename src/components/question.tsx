import React from 'react';

interface Question {
  singleQuestion: any;
  handleFormSubmit: any;
  handleAnswerClick: any;
  answers: any;
}

const Question: React.FC<Question> = ({ singleQuestion, handleFormSubmit, handleAnswerClick, answers }) => {

  return (
    <form onSubmit={handleFormSubmit} onClick={handleAnswerClick}>
      <h1>{singleQuestion}</h1>
      <option value={answers[0]}>{answers[0]}</option>
      <option value={answers[1]}>{answers[1]}</option>
      <option value={answers[2]}>{answers[2]}</option>
      <option value={answers[3]}>{answers[3]}</option>
      <input type="submit"/>
    </form>
  );
};

export default Question;
