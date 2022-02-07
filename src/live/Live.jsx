import React from 'react';
import Navbar from './Navbar';
import '../styles/live.scss';
import Header from './Header';
import CTA from './CTA';
import Schedule from './Schedule';
import Sponsors from '../components/sections/Sponsors';
import Prizes from './Prizes';

/**
 * Top level of App to organize components
 */
const Live = () => (
  <div className="live">
    <Navbar />
    <Header />
    <CTA />
    {/*<LiveStream />*/}
    <Schedule />
    <Prizes />
    <Sponsors />
  </div>
);

export default Live;
