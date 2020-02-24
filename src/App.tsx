import React, { useState } from 'react';
import Welcome from './components/welcome';
import Question from './components/question';
import Results from './components/results';
import TriviaQuestions from './assets/trivia-questions';
import { getQuestion, shuffle } from './assets/helper-functions';
import './App.scss';

const App: React.FC = () => {
  // Welcome Page
  const [isHome, setIsHome] = useState<boolean>(true);
  const [value, setValue] = useState<number>(5);

  // Welcome Page (Event Handlers)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const numberValue: number = Number(event.target.value);
    setValue(numberValue);
  };

  const handleWelcomeSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setIsHome(false);
  };

  // Trivia Page
  const parsedTriviaQuestions = getQuestion(TriviaQuestions, value);
  const [question, setQuestion] = useState<any>(parsedTriviaQuestions[0]);
  const [index, setIndex] = useState<number>(1);
  const [key, setKey] = useState<number>(0);
  const [isFirstAnswer, setIsFirstAnswer] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(
    shuffle(question['incorrect_answers'], question['correct_answer']),
  );

  // Trivia Page (Event Handlers)
  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const currentQuestion: any = parsedTriviaQuestions[index];
    if (index < parsedTriviaQuestions.length) {
      setQuestion(parsedTriviaQuestions[index]);
      setIndex(index + 1);
      setScore(score);
      setIsFirstAnswer(true);
      setKey(key + 1);
      setAnswers(shuffle(currentQuestion['incorrect_answers'], currentQuestion['correct_answer']));
    } else {
      setScore(score);
      setIsResultPage(true);
    }
  };

  // Results Page
  const [isResultPage, setIsResultPage] = useState<boolean>(false);
  const handlePlayAgainSubmit = (): void => {
    console.log('App ', score);
    setIsHome(true);
    setIndex(1);
    setScore(0);
    setValue(5);
    setKey(0);
    setIsFirstAnswer(true);
    setIsResultPage(false);
  };

  // Render App
  if (isHome) {
    return <Welcome handleChange={handleChange} handleWelcomeSubmit={handleWelcomeSubmit} />;
  } else if (isResultPage) {
    return (
      <Results score={score} totalQuestions={value} handlePlayAgainSubmit={handlePlayAgainSubmit} />
    );
  } else {
    return (
      <Question
        singleQuestion={question['question']}
        handleFormSubmit={handleFormSubmit}
        answers={answers}
        correctAnswer={question['correct_answer']}
        setScore={setScore}
        score={score}
        key={key}
        isFirstAnswer={isFirstAnswer}
        setIsFirstAnswer={setIsFirstAnswer}
        questionNumber={index}
        numberOfQuestions={value}
      />
    );
  }
};

export default App;
