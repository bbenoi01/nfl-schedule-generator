import React, { Component } from 'react';
import {
    sportToggle,
    teamToggle,
    scheduleYear,
    getSchedule
} from '../actions/appAction';

export default class TeamChoiceList extends Component {
    constructor(props) {
        super(props);

        this.selectedSportInput = this.selectedSportInput.bind(this);
        this.selectedTeamInput = this.selectedTeamInput.bind(this);
        this.scheduleYearInput = this.scheduleYearInput.bind(this);
        this.getSchedule = this.getSchedule.bind(this);
    }

    selectedSportInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(sportToggle(value));
    }

    selectedTeamInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(teamToggle(value));
    }

    scheduleYearInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(scheduleYear(value));
    }

    getSchedule(e) {
        e.preventDefault();
        const { dispatch, year, sport } = this.props;
        dispatch(getSchedule(sport, year))
      }

    render() {
        const { sport, nflTeams, nbaTeams, nhlTeams, mlbTeams } = this.props;

        switch (sport) {
            case 'nfl':
                return (
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-header">
                                <select className='form-control' id='sport-list' onChange={this.selectedSportInput} >
                                    <option value=''>Choose A Sport</option>
                                    <option value="nfl" selected>NFL</option>
                                    <option value="nba">NBA</option>
                                    <option value="nhl">NHL</option>
                                    <option value="mlb">MLB</option>
                                </select>
                            </div>
                            <form onSubmit={this.getSchedule} id='teams-form'>
                                <div className='card-body form-group'>
                                    <strong>Choose your NFL team:</strong>
                                    <select className='form-control' id='team-list' onChange={this.selectedTeamInput} >
                                        <option value=''>Pick Your Team</option>
                                        {nflTeams.map(nflTeam =>
                                            <option key={nflTeam.Key} value={nflTeam.Key}>{nflTeam.FullName}</option>
                                        )}
                                    </select>
                                    <br />
                                    <strong>Enter year (earliest is 2016):</strong>
                                    <input type='text' className='form-control' onChange={this.scheduleYearInput} placeholder='yyyy' />
                                </div>
                                <div className='card-footer'>
                                    <a href='/'><button type='submit' className='btn btn-info'>Get your schedule</button></a>
                                </div>
                            </form>
                        </div>
                    </div>
                );

            case 'nba':
                return (
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-header">
                                <select className='form-control' id='sport-list' onChange={this.selectedSportInput} >
                                    <option value=''>Choose A Sport</option>
                                    <option value="nfl">NFL</option>
                                    <option value="nba" selected>NBA</option>
                                    <option value="nhl">NHL</option>
                                    <option value="mlb">MLB</option>
                                </select>
                            </div>
                            <form onSubmit={this.getSchedule} id='teams-form'>
                                <div className='card-body form-group'>
                                    <strong>Choose your NBA team:</strong>
                                    <select className='form-control' id='team-list' onChange={this.selectedTeamInput} >
                                        <option value=''>Pick Your Team</option>
                                        {nbaTeams.map(nbaTeam =>
                                            <option key={nbaTeam.Key} value={nbaTeam.Key}>{nbaTeam.Name}</option>
                                        )}
                                    </select>
                                    <br />
                                    <strong>Enter year (earliest is 2016):</strong>
                                    <input type='text' className='form-control' onChange={this.scheduleYearInput} placeholder='yyyy' />
                                </div>
                                <div className='card-footer'>
                                    <a href='/'><button type='submit' className='btn btn-info'>Get your schedule</button></a>
                                </div>
                            </form>
                        </div>
                    </div>                    
                )

            case 'nhl':
                return (
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-header">
                                <select className='form-control' id='sport-list' onChange={this.selectedSportInput} >
                                    <option value=''>Choose A Sport</option>
                                    <option value="nfl">NFL</option>
                                    <option value="nba">NBA</option>
                                    <option value="nhl" selected>NHL</option>
                                    <option value="mlb">MLB</option>
                                </select>
                            </div>
                            <form onSubmit={this.getSchedule} id='teams-form'>
                                <div className='card-body form-group'>
                                    <strong>Choose your NHL team:</strong>
                                    <select className='form-control' id='team-list' onChange={this.selectedTeamInput} >
                                        <option value=''>Pick Your Team</option>
                                        {nhlTeams.map(nhlTeam =>
                                            <option key={nhlTeam.Key} value={nhlTeam.Key}>{nhlTeam.Name}</option>
                                        )}
                                    </select>
                                    <br />
                                    <strong>Enter year (earliest is 2016):</strong>
                                    <input type='text' className='form-control' onChange={this.scheduleYearInput} placeholder='yyyy' />
                                </div>
                                <div className='card-footer'>
                                    <a href='/'><button type='submit' className='btn btn-info'>Get your schedule</button></a>
                                </div>
                            </form>
                        </div>
                    </div>                    
                )

            case 'mlb':
                return (
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-header">
                                <select className='form-control' id='sport-list' onChange={this.selectedSportInput} >
                                    <option value=''>Choose A Sport</option>
                                    <option value="nfl">NFL</option>
                                    <option value="nba">NBA</option>
                                    <option value="nhl">NHL</option>
                                    <option value="mlb" selected>MLB</option>
                                </select>
                            </div>
                            <form onSubmit={this.getSchedule} id='teams-form'>
                                <div className='card-body form-group'>
                                    <strong>Choose your MLB team:</strong>
                                    <select className='form-control' id='team-list' onChange={this.selectedTeamInput} >
                                        <option value=''>Pick Your Team</option>
                                        {mlbTeams.map(mlbTeam =>
                                            <option key={mlbTeam.Key} value={mlbTeam.Key}>{mlbTeam.Name}</option>
                                        )}
                                    </select>
                                    <br />
                                    <strong>Enter year (earliest is 2016):</strong>
                                    <input type='text' className='form-control' onChange={this.scheduleYearInput} placeholder='yyyy' />
                                </div>
                                <div className='card-footer'>
                                    <a href='/'><button type='submit' className='btn btn-info'>Get your schedule</button></a>
                                </div>
                            </form>
                        </div>
                    </div>                    
                )

            default:
                return (
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-header">
                                Choose A sport
                            </div>
                            <div className='card-body'>
                                <select className='form-control' id='sport-list' onChange={this.selectedSportInput} >
                                    <option value='' selected>Pick Your Sport</option>
                                    <option value="nfl">NFL</option>
                                    <option value="nba">NBA</option>
                                    <option value="nhl">NHL</option>
                                    <option value="mlb">MLB</option>
                                </select>
                                <br />
                            </div>
                        </div>
                    </div>                    
                )
        }
    }
}