import React, { useState, useCallback } from 'react';
import Slot from '../Slot/Slot';
import styles from './SlotMachine.module.css';

const SlotMachine = () => {
  const [clicked, setClicked] = useState(false);
  const [stop, setStop] = useState(false);

  const handleClick = useCallback(() => {
    setClicked(true);
    setStop(false);
  }, []);

  const handleStop = useCallback(() => {
    setStop(true);
    setClicked(false);
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        who has
        <Slot clicked={clicked} stop={stop} />
      </div>
      {clicked 
        ? (<button onClick={handleStop}>Stop</button>)
        : (<button onClick={handleClick}>Get a Question</button>)}
    </div>
  )
}

export default SlotMachine;