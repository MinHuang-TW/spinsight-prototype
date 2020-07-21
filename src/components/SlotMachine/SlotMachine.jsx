import React, { useState, useCallback } from 'react';
import Slot from '../Slot/Slot';
import DoneMessage from '../DoneMessage/DoneMessage';
import styles from './SlotMachine.module.css';

const SlotMachine = () => {
  const [clicked, setClicked] = useState(false);
  const [stop, setStop] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = useCallback(() => {
    setClicked(true);
  }, []);

  const handleStop = useCallback(() => {
    setStop(!stop);
    setClicked(false);
  }, [stop]);

  const handleChange = useCallback(() => {
    setDone('done');
  }, []);

  const handleSubmit = useCallback(() => {
    setDone('submit');
  }, []);

  const handleCancle = useCallback(() => {
    setDone(false);
    setClicked(false);
    setStop(false);
  }, []);

  return (
    <>
      <DoneMessage done={done === 'submit'} handleCancle={handleCancle} />
      <div className={styles.container}>
        <h2>Who has</h2>
        <div className={styles.main}>
          <Slot clicked={clicked} stop={stop} />
      
          {stop 
            ? <input type='text' placeholder='Anwser' onChange={handleChange} /> 
            : <div style={{ height: 171 }} />}

          {clicked 
            ? (<button onClick={handleStop}>Stop</button>)
            : stop 
              ? (<button 
                  className={styles.send} 
                  onClick={handleSubmit} 
                  disabled={done === 'done' ? false : true}
                  style={{ opacity: done === 'done' ? 1 : 0.2 }}
                >
                  Send
                </button>)
              : (<button onClick={handleClick}>
                  Get a Question
                </button>)}
        </div>
      </div>
    </>
  )
};

export default SlotMachine;