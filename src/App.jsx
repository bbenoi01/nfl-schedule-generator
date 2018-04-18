import React, { Component } from 'react';
import TeamChoiceList from './indexes/TeamChoiceListIndex';
import ScheduleView from './indexes/ScheduleViewIndex';
import {
  getNFL,
  getMLB,
  getNBA,
  getNHL
} from './actions/appAction';



class App extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getNFL());
    dispatch(getMLB());
    dispatch(getNBA());
    dispatch(getNHL());
  }

  render() {
    return (
      <div className='App container'>
        <div className='jumbotron bg-dark'>
          <div className='container'>
            <h1 className='text-white'>Your NFL Team Schedule</h1>
            <h2 className='text-white'><small>See your favorite team's schedule</small></h2>
          </div>
        </div>
        <hr />
        <div className='row'>
          <TeamChoiceList />
          <ScheduleView />
        </div>
      </div>
    );
  }
}

export default App;