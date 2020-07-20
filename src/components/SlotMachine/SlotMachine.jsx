import React, { useState, useCallback } from 'react';
import Slot from '../Slot/Slot';
import StatusBar from '../../img/nav-bar.png';
import DoneMessage from '../../img/done-message.png';
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
    <div className={styles.container}>
      <div 
        className={done === 'submit' ? styles.filter : styles.nofilter} 
        onClick={handleCancle} 
      />
      <nav>
        <img src={StatusBar} alt='status bar' width='100%' />
      </nav>
      <div>
        <h1>Hello, Jane!</h1>
        <h2>Who has</h2>
      </div>
      <div className={styles.main}>
        <img 
          className={done === 'submit' ? styles.done : styles.undo} 
          src={DoneMessage} 
          alt='done-message' 
        />
        <Slot clicked={clicked} stop={stop} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {stop 
          ? <input type='text' placeholder='Anwser' onChange={handleChange} /> 
          : <div style={{ height: 117 }} />}

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
            : (<button onClick={handleClick}>Get a Question</button>)}
      </div>
    </div>
  )
}

export default SlotMachine;