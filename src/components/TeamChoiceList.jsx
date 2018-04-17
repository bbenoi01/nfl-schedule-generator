import React, { Component } from 'react';
import {
    teamToggle,
    scheduleYear,
    getSchedule
} from '../actions/appAction';

export default class TeamChoiceList extends Component {
    constructor(props) {
        super(props);

    this.selectedTeamInput=this.selectedTeamInput.bind(this);
    this.scheduleYearInput=this.scheduleYearInput.bind(this);
    this.getSchedule=this.getSchedule.bind(this);
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
        const { dispatch, year } = this.props;
        dispatch(getSchedule(year))
      }

    render() {
        const { nfl } = this.props;

        function createTeamList() {
            let teamNames = [];

            for(let i = 0; i < nfl.length; i++) {
              teamNames.push(<option key={nfl[i].Key} value={nfl[i].Key}>{nfl[i].FullName}</option>);
            }
            return teamNames;
        }



        return (
            <div className='col-md-4'>
                <div className='card text-white bg-dark mb-3'>
                    <div className='card-header'>
                        Enter team and season here
                    </div>
                    <form onSubmit={this.getSchedule} id='teams-form'>
                        <div className='card-body form-group'>
                            <strong>Choose your team:</strong>
                            <select className='form-control' id='team-list' onChange={this.selectedTeamInput} >
                                <option defaultValue hidden>Pick Your Team</option>
                                {createTeamList()}
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
    }
}