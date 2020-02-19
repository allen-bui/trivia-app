import React, { useState } from 'react';
import Welcome from './components/welcome';
import Question from './components/question';
// import Timer from './components/timer';
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
  const [answers, setAnswers] = useState<string[]>(shuffle(question['incorrect_answers'], question['correct_answer']));
  const [index, setIndex] = useState<number>(1);
  const [key, setKey] = useState<number>(0);
  let [score, setScore] = useState<number>(0);

  // Trivia Page (Event Handlers)
  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const currentQuestion: any = parsedTriviaQuestions[index];
    if (index < parsedTriviaQuestions.length) {
      setQuestion(parsedTriviaQuestions[index]);
      setIndex(index + 1);
      setScore(score);
      setAnswers(shuffle(currentQuestion['incorrect_answers'], currentQuestion['correct_answer']));
      setKey(key + 1);
    } else {
      setScore(score);
      setIsResultPage(true);
      console.log('done loading questions');
    }
  };

  // Results Page
  const [isResultPage, setIsResultPage] = useState<boolean>(false);

  const handlePlayAgainSubmit = (): void => {
    setIsHome(true);
    setIsResultPage(false);
    setIndex(1);
    setScore(0);
    setValue(5);
  }

  // Misc
  console.log(question.correct_answer);

  // Render App
  if (isHome) {
    return <Welcome handleChange={handleChange} handleWelcomeSubmit={handleWelcomeSubmit} />;
  } else if (isResultPage) {
    return <Results score={score} totalQuestions={value} handlePlayAgainSubmit={handlePlayAgainSubmit}/>;
  } else {
    return (
      <div className="question-module">
        <Question
          singleQuestion={question['question']}
          handleFormSubmit={handleFormSubmit}
          answers={answers}
          correctAnswer={question['correct_answer']}
          setScore={setScore}
          score={score}
          key={key}
        />
        {/* <Timer timer={timer} setTimer={setTimer}/> */}
      </div>
    );
  }
};

export default App;
