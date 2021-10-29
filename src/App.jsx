import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Guides from './components/sections/Guides';
import FAQ from './components/sections/FAQ';
import Sponsors from './components/sections/Sponsors';
import Footer from './components/sections/Footer';

/**
 * Top level of App to organize components
 */
const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Guides />
    <FAQ />
    <Sponsors />
    <Footer />
  </div>
);

export default App;
