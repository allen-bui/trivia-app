import React, { useState } from 'react';
import Welcome from './components/welcome';
import Question from './components/question';
// import Timer from './components/timer';
import Results from './components/results';
import TriviaQuestions from './assets/trivia-questions';
import { getQuestion } from './assets/helper-functions';
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
  let [score, setScore] = useState<number>(0);

  // Trivia Page (Event Handlers)
  const handleAnswerClick = (event: React.ChangeEvent<HTMLFormElement>): void => {
    if (event.target.value === question.correct_answer) {
      score += 1;
      alert('Correct!');
    } else {
      alert(`Incorrect, the correct answer is ${question.correct_answer}`);
    }
  };

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (index < parsedTriviaQuestions.length) {
      setQuestion(parsedTriviaQuestions[index]);
      setIndex(index + 1);
      setScore(score);
    } else {
      setScore(score);
      setIsResultPage(true);
      console.log('done loading questions');
    }
  };

  // Results Page
  const [isResultPage, setIsResultPage] = useState<boolean>(false);

  // Misc
  console.log(question.correct_answer);

  // Render App
  if (isHome) {
    return <Welcome handleChange={handleChange} handleWelcomeSubmit={handleWelcomeSubmit} />;
  } else if (isResultPage) {
    return <Results score={score} totalQuestions={value} />;
  } else {
    return (
      <div className="question-module">
        <Question
          singleQuestion={question}
          handleFormSubmit={handleFormSubmit}
          handleAnswerClick={handleAnswerClick}
        />
        {/* <Timer timer={timer} setTimer={setTimer}/> */}
      </div>
    );
  }
};

export default App;
