import React, { useState, useCallback } from 'react';
import DoneMessage from '../../components/DoneMessage/DoneMessage';
import WheelBase from '../../img/wheel.png';
import Pointer from '../../img/wheel-pointer.png';
import styles from './Wheel.module.css';

const Wheel = () => {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(null);

  const handleChange = useCallback(() => {
    setDone('done');
  }, []);

  const handleSubmit = useCallback(() => {
    setDone('submit');
  }, []);

  const handleCancle = useCallback(() => {
    setDone(null);
    setClicked(false);
  }, []);

  const handleClick = useCallback(() => {
    setClicked(true);
    console.log('clicked');
  }, []);

  return (
    <>
      <DoneMessage done={done === 'submit'} handleCancle={handleCancle} />
      {done !== 'submit' && (
        <div
          className={styles.popup}
          style={{ opacity: clicked ? 1 : 0, zIndex: clicked ? 510 : -1 }}
        >
          <h3>Who has the biggest shoe size?</h3>
          <input type='text' placeholder='Answer' onChange={handleChange} />
          <button
            className={done ? styles.send : styles.unsend}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      )}
      {done !== 'submit' && (
        <div className={clicked ? styles.bgBlur : styles.bg} />
      )}

      <div className={styles.main}>
        <button onClick={handleClick}>
          <p>Get a</p> Question
        </button>

        <img className={styles.pointer} src={Pointer} alt='pointer' />
        <img
          className={
            !clicked
              ? styles.base
              : done === 'submit'
              ? styles.initial
              : styles.spin
          }
          src={WheelBase}
          alt='wheel'
        />
      </div>
    </>
  );
};

export default Wheel;