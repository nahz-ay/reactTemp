import React, { useState } from 'react';
import styles from './accordion.module.scss';

const Accordion = ({ faqItems }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleAccordionToggle = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes((prevIndexes) => [...prevIndexes, index]);
    }
  };

  return (
    <div className={styles['faq-accordion']}>
      {faqItems.map((item, index) => (
        <div
          className={`${styles['faq-item']} ${
            activeIndexes.includes(index) ? styles.open : styles.closed
          }`}
          key={index}
        >
          <div
            className={styles['faq-question']}
            onClick={() => handleAccordionToggle(index)}
          >
            <span>{item.question}</span>
            <span className={styles.arrow}>
              {activeIndexes.includes(index) ? '▲' : '▼'}
            </span>
          </div>
          {activeIndexes.includes(index) && (
            <div className={styles['faq-answer']}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
