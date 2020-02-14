import React, { useState } from 'react';
import Form from './form';
import TriviaQuestions from './../assets/trivia-questions';
import { getQuestion } from './../assets/helper-functions';
import './../styles/question.scss';

interface Questions {
  value: number;
}
const Questions: React.FC<Questions> = ({ value }) => {

  const parsedTriviaQuestions = getQuestion(TriviaQuestions, value);
  const [question, setQuestion] = useState<Object>(parsedTriviaQuestions[0]);
  const [index, setIndex] = useState<number>(1);

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (index < parsedTriviaQuestions.length) {
      setQuestion(parsedTriviaQuestions[index]);
      setIndex(index + 1);
    } else {
      console.log('done loading questions')
    }
  }

  return (
    <div className="question-module">
      <Form singleQuestion={question} handleFormSubmit={handleFormSubmit}/>

      {/*
      <Timer />
      <Score />
      */}
    </div>
  )
}

export default Questions;