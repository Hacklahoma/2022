import React from 'react';
import '../../styles/header.scss';

/**
 * Contains all the header needs
 */
const Header = () => (
  <div className="header">
    <div className="content">
      <div className="header-text">
        <h1>Hacklahoma 2022</h1> 
        <div className="subcontent">
          <p>February 11 - 13, 2022</p>
          <p className="subtitle">University Of Oklahoma</p>
        </div>
      </div>

      {/* <a href="/" className="register"><p>Register</p></a> */}
      <div className="header-logo">{}</div>
    </div> 
  </div>
);

export default Header;
