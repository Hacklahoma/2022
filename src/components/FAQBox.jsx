/* eslint-disable max-len */
import '../styles/faq.scss';
import React from 'react';
import AnimateHeight from 'react-animate-height';

/**
 * Expandable icon
 */
 const ExpandIcon = () => (
  <div className="expand-icon">
    <div className="horizontal" />
    <div className="vertical" />
  </div>
);

const FAQBox = (props) => {
  const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

  const openItem = () => {
    if (props.openedItem === props.question) {
      props.setOpenedItem("");
    }
    else {
      props.setOpenedItem(props.question);
    }
  }

  return (
    <div className={`item ${props.openedItem === props.question ? 'show' : ''}`}>
      <button onClick={openItem}><p>{props.question}</p><ExpandIcon /></button>
        <AnimateHeight height={`${props.openedItem === props.question ? 'auto' : '0%'}`}>
          <div className="answer">
            {renderHTML(props.answer)}
          </div>
        </AnimateHeight>
    </div>
  );
}

export default FAQBox;