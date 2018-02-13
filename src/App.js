import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Cv from './components/pages/Cv';
import Single from './components/portfolio/Single';
import ArticleList from './components/portfolio/ArticleList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cv" component={Cv} />
            <Route exact path="/portfolio" component={ArticleList} />
            <Route path='/portfolio/:slug' component={Single} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
