import React from 'react';
import '../styles/about.scss';

/**
 * Contains the call to action box
 */
const CTA = () => (
  <div id="cta" className="cta about">
    <div className="cta-box">
      <h2 className="cta-title">What YOU Need To Do</h2>
      {/* eslint-disable-next-line max-len */}
      <div className="step">
        <h2>1. </h2>
        <p className="instruct discord">
          Join our{' '}
          <a
            href="https://discord.gg/vTYtFBjw2y"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Server!
          </a>{' '}
          The check in process will begin 8:00 AM on February 12TH. More instructions are given in the server!
        </p>
      </div>
      <div className="step">
        <h2>2. </h2>
        <p className="instruct">
          Register to our{' '}
          <a
            href="https://hacklahoma22.devpost.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </a>{' '}
          so that you can submit your project and be judged.
        </p>
      </div>
      <div className="step">
        <h2>3. </h2>
        <p className="instruct">
          Check out the Hacklahoma 2022 {' '}
          <a
            href="https://drive.google.com/file/d/18Szz_yibWhgVfbbveXos2gxCROwmh3f6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Day-Of Guide
          </a>{' '}
          so that you are able to enjoy your experience at our yearly Hackathon!
        </p>
      </div>
      <div className="step">
          <h2>4. </h2>
          <p className="instruct">
            Check out the Hacklahoma 2022 {' '}
            <a
              href="https://drive.google.com/file/d/1YAV7J6XKOtse380fXDgFnC1D-F8w1meV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>{' '}
            .
          </p>
        </div>
    </div>
  </div>
);

export default CTA;
