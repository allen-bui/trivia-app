import React from 'react';
import TriviaQuestions from './../assets/trivia-questions';
import { getQuestion } from './../assets/helper-functions';
import './../styles/question.scss';

interface Questions {
  value: number;
}
const Questions: React.FC<Questions> = ({ value }) => {

  console.log(getQuestion(TriviaQuestions, value));

  return (
    <div className="question-module">

      {/*

      <Timer />
      <Question />
      <Answers />
      <Score />

      */}
    </div>
  )
}

export default Questions;