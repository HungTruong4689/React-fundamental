import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import Demo from './components/Demo/Demo';

function App() {
  const [showParagraph,setShowParagraph] = useState(false);
  const [allowToggle,setallowToggle] = useState(false);
  
  const toggleParagraphHandler = useCallback(()=>{
    if(allowToggle){
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
    
  }, [allowToggle]);
  const allowToggleHandler = ()=>{
    setallowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <Demo />} */}
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
