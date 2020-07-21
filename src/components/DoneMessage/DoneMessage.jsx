import React from 'react';
import Modal from '../../img/done-message.png';
import styles from './DoneMessage.module.css';

const DoneMessage = ({ done, handleCancle }) => (
  <div className={styles.container} style={{ zIndex: done ? 999 : -1 }}>
    <img 
      className={done ? styles.done : styles.undo} 
      src={Modal} 
      alt='done-message' 
    />
    <div 
      className={done ? styles.filter : styles.nofilter} 
      onClick={handleCancle} 
    />
  </div>
);

export default DoneMessage;