import React, { useState, useCallback } from 'react';
import StatusBar from '../src/img/nav-bar.png';
import Plain from './concepts/Plain/Plain';
import Print from './concepts/Print/Print';
import SlotMachine from './concepts/SlotMachine/SlotMachine';
import './App.css';

const App = () => {
  const concepts = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(1);

  const handleSelected = useCallback((concept) => () => {
    setSelected(concept);
  }, []);

  const setConcept = (selected) => {
    switch (selected) {
      case 2:
        return <Print />;
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
      </nav>
      <div className='main'>
        <h1>Hello, Jane!</h1>
        {setConcept(selected)}
      </div>
      <div className='toolBar'>
        {concepts.map(concept => (
          <div 
            key={concept} 
            className={selected === concept ? 'item-selected' : 'item'} 
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