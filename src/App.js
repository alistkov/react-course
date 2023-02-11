import React, { useState, useCallback } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

const App = () => {
  const [paragraphIsVisible, setParagraphIsVisible] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App running!');

  const toggleVisible = useCallback(() => {
    if (allowToggle) {
      setParagraphIsVisible((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraphIsVisible} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleVisible}>Toggle paragraph</Button>
    </div>
  );
};

export default App;
