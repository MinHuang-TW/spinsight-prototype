import React, { useState, useCallback } from 'react';
import StatusBar from '../src/img/nav-bar.png';
import Plain from './components/Plain/Plain';
import SlotMachine from './components/SlotMachine/SlotMachine';
import './App.css';

const App = () => {
  const concepts = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(concepts[0]);

  const handleSelected = useCallback((concept) => () => {
    setSelected(concept);
  }, []);

  const setConcept = (selected) => {
    switch (selected) {
      case 4:
        return <SlotMachine />;
      case 1:
      default:
        return <Plain />;
    }
  };
  
  return (
    <div className='App'>
      <nav>
        <img src={StatusBar} alt='status bar' width='100%' />
        <h1>Hello, Jane!</h1>
      </nav>
      <div className='main'>
        {setConcept(selected)}
      </div>
      <div className='toolBar'>
        {concepts.map(concept => (
          <div 
            className={selected === concept ? 'item-selected' : 'item'} 
            key={concept} 
            onClick={handleSelected(concept)}
          >
            {concept}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;