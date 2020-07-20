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
    // <div className={styles.machine}>
      <div className={styles.slots}>
        <ul className={clicked ? styles.spin : styles.slot}>
          {adjWords.map((word, index) => (
            <li className={styles.number} key={index}>
              {clicked ? word : stop ? word : 'smallest' }
            </li>
          ))}
        </ul>
        <ul className={clicked ? styles.spin : styles.slot}>
          {nounWords.map((word, index) => (
            <li className={styles.number} key={index}>
              {clicked ? word : stop ? word : 'shoes' }
            </li>
          ))}
        </ul>
      </div>
    // </div>
  );
};

export default Slot;