import React, { useState } from 'react';
import Welcome from './components/welcome';
import Form from './components/form';
import TriviaQuestions from './assets/trivia-questions';
import { getQuestion } from './assets/helper-functions';
import './App.scss';

const App: React.FC = () => {

  // Welcome Page
  const [isHome, setIsHome] = useState<boolean>(true);
  const [value, setValue] = useState<number>(5);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const numberValue: number = Number(event.target.value);
    setValue(numberValue);
  };
  const handleWelcomeSubmit = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    setIsHome(false);
  };

  // Trivia Page
  const parsedTriviaQuestions = getQuestion(TriviaQuestions, value);
  const [question, setQuestion] = useState<Object>(parsedTriviaQuestions[0]);
  const [index, setIndex] = useState<number>(1);

  const handleFormSubmit = (
    event: React.ChangeEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    if (index < parsedTriviaQuestions.length) {
      setQuestion(parsedTriviaQuestions[index]);
      setIndex(index + 1);
    } else {
      console.log('done loading questions');
    }
  };

  if (isHome) {
    return (
      <Welcome
        handleChange={handleChange}
        handleWelcomeSubmit={handleWelcomeSubmit}
      />
    );
  } else {
    return (
      <div className="question-module">
        <Form singleQuestion={question} handleFormSubmit={handleFormSubmit} />

        {/*
        <Timer />
        <Score />
        */}
      </div>
    );
  }
};

export default App;
