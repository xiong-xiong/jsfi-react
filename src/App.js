import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';


import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Cv from './components/sections/Cv';
import Single from './containers/Single';
import Portfolio from './components/sections/Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cv" component={Cv} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path='/portfolio/:slug' component={Single} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
