import React, { Component } from 'react';
import axios from 'axios';
import TeamChoiceList from './TeamChoiceList';
import ScheduleView from './ScheduleView';

var config = {
  headers: {'Ocp-Apim-Subscription-Key': '12ec1fc331d842588a9e4c8726dcc11a'}
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      
      scheduleYear: '',
      selectedTeam: '',
      fullSchedule: [],

    };
    this.scheduleYearInput=this.scheduleYearInput.bind(this);
    this.createTeamList=this.createTeamList.bind(this);
    this.selectedTeamInput=this.selectedTeamInput.bind(this);
    this.getSchedule=this.getSchedule.bind(this);
  }

  createTeamList() {
    let teamNames = [];
    for(let i = 0; i < this.state.teams.length; i++) {
      teamNames.push(<option key={this.state.teams[i].Key} value={this.state.teams[i].Key}>{this.state.teams[i].FullName}</option>);
    }
    return teamNames;
  }

  selectedTeamInput(e) {
    this.setState({selectedTeam: e.target.value})
  }

  scheduleYearInput(e) {
    this.setState({scheduleYear: e.target.value})
  }

  componentDidMount() {
    axios.get('https://api.fantasydata.net/v3/nfl/scores/JSON/Teams?', config)
      .then(response => {
        this.setState({
          teams: response.data
        })
    }).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  getSchedule(e) {
    e.preventDefault();
    
    axios.get('https://api.fantasydata.net/v3/nfl/scores/JSON/Schedules/' + this.state.scheduleYear + '?', config)
      .then(response => {
        this.setState({
          fullSchedule: response.data,
          scheduleYear: '',
        })
      }).catch(error => {
        console.log('Error fetching and parsing data', error);
      });
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
          <TeamChoiceList  
                          scheduleYearInput={this.scheduleYearInput}
                          scheduleYear={this.state.scheduleYear}
                          createTeamList={this.createTeamList}
                          selectedTeamInput={this.selectedTeamInput}
                          selectedTeam={this.state.selectedTeam}
                          getSchedule={this.getSchedule} 
                          />
          <ScheduleView teamData={this.state.teams}
                        scheduleData={this.state.fullSchedule}
                        selectedTeam={this.state.selectedTeam}
                        />
        </div>
      </div>
    );
  }
}

export default App;




