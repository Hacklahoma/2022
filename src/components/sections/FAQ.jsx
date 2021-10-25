/* eslint-disable max-len */
import React, { useState } from 'react';
import '../../styles/faq.scss';
import AnimateHeight from 'react-animate-height';

/**
 * Contains all the header needs
 */
const FAQ = () => {
  const [items, setItems] = useState({});

  /**
  * Expands FAQ item
  */
  const handleClick = (e) => {
    const child = e.currentTarget.parentNode;
    const parent = child.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, child);
    // Making copy of object
    const obj = JSON.parse(JSON.stringify(items));
    obj[index] = !items[index];
    setItems(obj);
  };

  return (
    <div className="faq-section">
      <div id="faq" className="faq">
        <div className="title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="questions">
          {/* First Row */}
          <div className="row">
            <div className={`item ${items[0] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>What is a Hack?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[0] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>A hack is something that is jury-rigged inelegantly but effectively, usually as a temporary solution to a problem. Like duct taping a hole in a sinking boat to keep it afloat.</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[1] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Does it cost anything?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[1] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>Admissions is completely free for all students!</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[2] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Any travel reimbursements?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[2] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>Yes! We will be reimbursing up to $50 for those who keep their physical receipts and submit a project.</p>
                </div>
              </AnimateHeight>
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            <div className={`item ${items[3] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Will there be food?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[3] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>We will supply food for Saturday’s lunch, dinner, and Sunday’s breakfast with plenty of snacks and drinks throughout. All free of charge!</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[4] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Do I need experience?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[4] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>No experience is needed. Whether you're a coder, an artist, or a writer, you'll get to work with various mentors, attend workshops, interact with companies, and learn alongside fellow participants.</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[5] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Are there teams?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[5] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>We encourage everyone to work with a team! Teams may contain up to 4 people. We will also be offering a team-building session at the beginning of the hacking period.</p>
                </div>
              </AnimateHeight>
            </div>
          </div>


          {/* Third Row */}
          <div className="row">
            <div className={`item ${items[6] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>What should I bring?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[6] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>To check in, you must show your QR code that was sent to you through email after acceptance. You should also bring a laptop, chargers, toiletries, a change of clothes, sleeping bag, pillow, and anything else you would need for an overnight weekend. Keep in mind that Hacklahoma will last for 24hrs.</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[7] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>What is the code of conduct?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[7] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>
                    Hacklahoma welcomes students from all backgrounds and values the importance of a safe and all-inclusive space. Anyone attending must adhere to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>.
                  </p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[8] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Do I need to stay the whole time?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[8] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>No, you’re not confined here. Feel free to go home and get some rest, but be back in time for judging!</p>
                </div>
              </AnimateHeight>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="row">
            <div className={`item ${items[9] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Who can attend?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[9] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>Any student over the age of 18 can participate, regardless of major, background, or skill level.</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[10] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Can I start my project before?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[10] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>No, you cannot work or copy past projects. You can brainstorm ideas and collect whatever software and tools you need, as long as the project is completely new.</p>
                </div>
              </AnimateHeight>
            </div>
            <div className={`item ${items[11] ? 'show' : ''}`}>
              <button onClick={handleClick}><p>Can't find your question?</p><ExpandIcon /></button>
              <AnimateHeight height={`${items[11] ? 'auto' : '0%'}`}>
                <div className="answer">
                  <p>If your question wasn’t answered, please feel free to contact us via Instagram, Twitter, Facebook or send us an email to <a href="mailto:team@hacklahoma.org">team@hacklahoma.org</a>.</p>
                </div>
              </AnimateHeight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Expandable icon
 */
const ExpandIcon = () => (
  <div className="expand-icon">
    <div className="horizontal" />
    <div className="vertical" />
  </div>
);

export default FAQ;
