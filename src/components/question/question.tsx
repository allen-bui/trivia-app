import React from 'react';
import TriviaQuestions from './../../assets/trivia-questions';
import { getQuestion } from './../../assets/helper-functions';

interface QuestionModule {
  value: number;
}

const QuestionModule: React.FC<QuestionModule> = ({ value }) => {

  console.log(getQuestion(TriviaQuestions, value));

  return (
    <div className="question-module">
    </div>
  )
}

export default QuestionModule;