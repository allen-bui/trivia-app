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

  const shuffleAnswers = ((): string[] => {
    const combinedAnswers = [...incorrectAnswers, correctAnswer];
    for (let i = 0; i < combinedAnswers.length; ++i) {
      const randomIndex = Math.floor(Math.random() * 4);
      const temp = combinedAnswers[i];
      combinedAnswers[i] = combinedAnswers[randomIndex];
      combinedAnswers[randomIndex] = temp;
    }
    return combinedAnswers;
  })();

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>{question}</h1>
      <option value="">{shuffleAnswers[0]}</option>
      <option value="">{shuffleAnswers[1]}</option>
      <option value="">{shuffleAnswers[2]}</option>
      <option value="">{shuffleAnswers[3]}</option>
      <input type="submit" />
    </form>
  );
};

export default Form;
