import React, { useState, useCallback } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

const App = () => {
  const [paragraphIsVisible, setParagraphIsVisible] = useState(false);

  console.log('App running!');

  const toggleVisible = useCallback(() => {
    setParagraphIsVisible((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleVisible}>Toggle paragraph</Button>
    </div>
  );
};

export default App;
