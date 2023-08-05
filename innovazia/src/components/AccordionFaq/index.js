"use client"
import React, { useState } from 'react';
import styles from './accordion.module.scss';

const Accordion = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles['faq-accordion']}>
      {faqItems.map((item, index) => (
        <div className={`${styles['faq-item']} ${activeIndex === index ? styles.open : styles.closed}`} key={index}>
          <div className={styles['faq-question']} onClick={() => handleAccordionToggle(index)}>
            <span>{item.question}</span>
            <span className={styles.arrow}>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && <div className={styles['faq-answer']}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

