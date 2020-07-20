import React from 'react';
import styles from './Slot.module.css';

const Slot = ({ clicked, stop }) => {
  const adjWords = [
    'biggest', 'smallest', 'black', 'brown', 'blue',
    'biggest', 'smallest', 'black', 'brown', 'blue',
  ];
  const nounWords = [
    'shoes', 'earring', 'phone case', 'watch', 'eyes',
    'shoes', 'earring', 'phone case', 'eyes', 'eyes',
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className={styles.slots}>
        <ul className={clicked ? styles.spin : styles.slot}>
          {adjWords.map((word, index) => (
            <li className={styles.number} key={index}>
              {clicked ? word.toUpperCase() : stop ? word.toUpperCase() : 'SMALLEST' }
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.slots}>
        <ul className={clicked ? styles.spin : styles.slot}>
          {nounWords.map((word, index) => (
            <li className={styles.number} key={index}>
              {clicked ? word.toUpperCase() : stop ? word.toUpperCase() : 'SHOES' }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slot;