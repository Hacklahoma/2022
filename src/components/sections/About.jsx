import React from 'react';
import '../../styles/about.scss'
import Section from '../Section'

const About = () => {
  return (
    <Section>
      <div id="about" className="about">
        <div className="box">
          <h3>Hacklahoma is Oklahoma’s Largest Hackathon</h3>
          {/* eslint-disable-next-line max-len */}
          <p><strong>Anyone who has an interest in technology</strong> attends a hackathon to learn, build and share their creations in a relaxed and collaborative atmosphere. Even those with little to no experience are welcome to attend and learn!</p>
        </div>
      </div>
    </Section>
  );
}

export default About;