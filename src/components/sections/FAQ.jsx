/* eslint-disable max-len */
import React, { useState } from 'react';
import '../../styles/faq.scss';
import FAQBox from '../FAQBox';
import faq from '../../data/faq.json';

/**
 * Contains all the header needs
 */
const FAQ = () => {
  const [openedItem, setOpenedItem] = useState('');

  /**
  * Expands FAQ item
  */
  return (
    <div className="faq-section">
      <div id="faq" className="faq-main">
        <div className="title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="questions">
          {faq.questions.map((obj) => {
            var questions = [];
            for (const [key, value] of Object.entries(obj))
              questions.push(<FAQBox question={key} answer={value} openedItem={openedItem} setOpenedItem={setOpenedItem} />);
            return <div className="column">{questions}</div>
          })}
        </div>
      </div>
    </div>
  );
};


export default FAQ;
