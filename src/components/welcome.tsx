import React from 'react';
import './../styles/welcome.scss';

interface Welcome {
  handleChange: any;
  handleWelcomeSubmit: any;
}

const Welcome: React.FC<Welcome> = ({ handleWelcomeSubmit, handleChange }) => {
  return (
    <div className="welcome-container">
      <div className="title">TRIVIA</div>
      <div className="selection-container">
        <div className="selection-text">SELECT # OF QUESTIONS AND HIT GO</div>
        <form onSubmit={handleWelcomeSubmit}>
          <select name="numberOfQuestions" onChange={handleChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <input type="submit" value="Go" />
        </form>
      </div>
    </div>
  );
};

export default Welcome;
