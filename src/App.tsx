import React, { useState } from 'react';
import Welcome from './components/welcome/welcome';
import './App.scss';

const App: React.FC = () => {

  const [isHome, setIsHome] = useState<boolean>(true);
  const [value, setValue] = useState<number>(5);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const numberValue: number = Number(event.target.value);
    setValue(numberValue);
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setIsHome(false);
  }

  if (isHome) {
    return <Welcome handleChange={handleChange} handleSubmit={handleSubmit} />
  } else {
    console.log(value);
    return <div>this is the trivia app!</div>
  }
}

export default App;
