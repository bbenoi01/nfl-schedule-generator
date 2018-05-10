import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './indexes/landingIndex';
import Football from './indexes/footballIndex';
import Basketball from './indexes/basketballIndex';
import Hockey from './indexes/hockeyIndex';
import Baseball from './indexes/baseballIndex';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/football' component={Football}/>
          <Route exact path='/basketball' component={Basketball}/>
          <Route exact path='/hockey' component={Hockey}/>
          <Route exact path='/baseball' component={Baseball}/>
        </div>
      </Router>
    );
  }
}

export default App;