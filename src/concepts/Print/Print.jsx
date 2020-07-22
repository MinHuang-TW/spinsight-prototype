import React, { useState, useCallback } from 'react';
import Slot from '../../img/print-slot.png';
import Base from '../../img/print-slot-base.png';
import Paper from '../../img/print-paper.png';
import DoneMessage from '../../img/print-done.png';
import Button from '../../components/Button/Button';
import styles from './Print.module.css';

const Print = () => {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(null);

  const handleChange = useCallback(() => {
    setDone('done');
  }, []);

  const handleClick = useCallback(() => {
    setClicked(true);
  }, []);

  const handleSubmit = useCallback(() => {
    setDone('submit');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.paperContainer}>
        <div style={{ height: '100%' }}>
          {done !== 'submit' && (
            <div 
              className={styles.content} 
              style={{ marginTop: clicked ? 0 : -255 }}
            >
              <h3>Who has shortest hair?</h3>
              <input
                type='text'
                placeholder='Answer'
                onChange={handleChange}
              />
              <button
                className={styles.send}
                disabled={done === 'done' ? false : true}
                style={{ opacity: done === 'done' && 1 }}
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          )}
          <img src={Slot} alt='paper-slot' style={{ zIndex: 5 }} />
          <img src={Base} alt='slot-base' style={{ zIndex: 1 }} />
          <img
            className={styles.pic}
            src={done === 'submit' ? DoneMessage : Paper}
            alt='paper of question'
            style={{ marginTop: clicked ? 0 : -255, zIndex: 1 }}
          />
        </div>
      </div>

      {!clicked && (
        <Button clicked={clicked} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Print;