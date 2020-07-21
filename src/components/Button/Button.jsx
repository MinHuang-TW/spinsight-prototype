import React from 'react';
import styles from './Button.module.css';

const Button = ({ clicked, done, handleClick, handleSubmit }) => {

  return (
    <>
      {clicked 
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
    </>
  )
};

export default Button;