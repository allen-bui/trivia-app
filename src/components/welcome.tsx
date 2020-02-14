import React from 'react';
import './../styles/welcome.scss';

interface Welcome {
  handleChange: any;
  handleWelcomeSubmit: any;
}

const Welcome: React.FC<Welcome> = ({ handleWelcomeSubmit, handleChange }) => {
  return (
    <div className="welcome">
      <h1>Welcome to Trivia!</h1>
      <h4>Select the number of questions and hit go to begin</h4>
      <form onSubmit={handleWelcomeSubmit}>
        <select name="numberOfQuestions" onChange={handleChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <input type="submit" value="Go" />
      </form>
    </div>
  );
};

export default Welcome;
