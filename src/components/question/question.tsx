import React from 'react';
import TriviaQuestions from './../../assets/trivia-questions';

interface QuestionModule {
  value: number;
}

const QuestionModule: React.FC<QuestionModule> = ({ value }) => {

  const getQuestions = (): Object[] => {

    const result = [];
    const seen = [];

    for (let i = 0; i < value; ++i) {
      const randomIndex = Math.floor(Math.random() * TriviaQuestions.length);
      seen.push(randomIndex);
      if (seen.indexOf(randomIndex) === -1) i -= 1;
      else result.push(TriviaQuestions[randomIndex]);
    }
    return result;
  }

  return (
    <div className="question-module">

    </div>
  )
}

export default QuestionModule;