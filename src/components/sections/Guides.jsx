import React from 'react';
import '../../styles/guides.scss';
import Section from '../Section';

/**
 * Contains all the header needs
 */
const Guides = () => (
  <Section>
    <div id="guides" className="guides">
      <h2>New to Hackathons?</h2>
      <div className="container">
        <p className="description">Follow these guides to help you inspire your first hack! We'll be there for you if you're having trouble.</p>
        <div className="tracks">
          <a href="https://github.com/Hacklahoma/guides/tree/react" className="track" target="_blank" rel="noopener noreferrer">
            <p className="head">Build a Website</p>
            <p className="body">Create a web application using the popular React framework.</p>
          </a>
          <a href="https://github.com/Hacklahoma/guides/tree/data-science" className="track" target="_blank" rel="noopener noreferrer">
            <p className="head">Explore Data Science</p>
            <p className="body">Dive into basic applications of artificial intelligence and data science.</p>
          </a>
          <a href="https://github.com/Hacklahoma/guides/tree/bots" className="track" target="_blank" rel="noopener noreferrer">
            <p className="head">Build Bots</p>
            <p className="body">Use Python to create bots for different platforms.</p>
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default Guides;
