import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';


/**
 * Top level of App to organize components
 */
const App = () => (
  <div className="app">
    <Navbar />
    <Header />
  </div>
);

export default App;
