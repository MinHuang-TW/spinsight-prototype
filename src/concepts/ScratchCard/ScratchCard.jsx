import React, { useState, useCallback } from 'react';
import Scratch from '../../components/Scratch/Scratch';
import DoneMessage from '../../components/DoneMessage/DoneMessage';
import styles from './ScratchCard.module.css';

const ScratchCard = () => {
  const [done, setDone] = useState(null);

  const handleChange = useCallback(() => {
    setDone('done');
  }, []);

  const handleSubmit = useCallback(() => {
    setDone('submit');
  }, []);

  const handleCancle = useCallback(() => {
    setDone(false);
  }, []);

  return (
    <div className={styles.container}>
      <DoneMessage done={done === 'submit'} handleCancle={handleCancle} />

      <Scratch />
      <input type='text' placeholder='Answer' onChange={handleChange} />

      <button 
        className={styles.send} 
        disabled={done ? false : true} 
        style={{ opacity: done ? 1 : 0.2 }}
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  )
}

export default ScratchCard;