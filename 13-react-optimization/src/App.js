import React, { useState } from 'react';
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState();
  console.log("APP RUNNING");

  const toggleParagraphHandler = ()=>{
    setShowParagraph(!showParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
