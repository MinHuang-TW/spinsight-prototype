import React, { useState, useCallback } from 'react';
import Button from '../../components/Button/Button';
import DoneMessage from '../../components/DoneMessage/DoneMessage';
import styles from './Plain.module.css';

const Plain = () => {
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

  const handleCancle = useCallback(() => {
    setDone(false);
    setClicked(false);
  }, []);

  return (
    <>
      <DoneMessage done={done === 'submit'} handleCancle={handleCancle} />

      <div className={styles.container} style={{ marginTop: -42 }}>
        <div style={{ opacity: clicked ? 1 : 0 }} className={styles.main}>
          <h3>Who has your favorite hair color?</h3>
          <input type='text' placeholder='Anwser' onChange={handleChange} />
        </div>

        <Button 
          clicked={clicked}
          done={done} 
          handleClick={handleClick} 
          handleSubmit={handleSubmit} 
        />
      </div>
    </>
  )
};

export default Plain;