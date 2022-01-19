import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Guides from './components/sections/Guides';
import FAQ from './components/sections/FAQ';
import Sponsors from './components/sections/Sponsors';
import Footer from './components/sections/Footer';
import Live from './live/Live'

/**
 * Top level of App to organize components
 */
const App = () => (
  <Router>
    <Switch>
      <Route path="/live">
        <Live />
      </Route>
      <Route exact path="/">
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Guides />
          <FAQ />
          <Sponsors />
          <Footer />
        </div>
      </Route>
    </Switch>
  </Router>

);

export default App;
