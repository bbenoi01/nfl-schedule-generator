import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import moment from 'moment';
import {
    getNFL,
    teamToggle,
    scheduleYear,
    getNFLSchedule
} from '../actions/appAction';

export default class Football extends Component {
    constructor(props) {
        super(props);


        this.selectedTeamInput = this.selectedTeamInput.bind(this);
        this.scheduleYearInput = this.scheduleYearInput.bind(this);
        this.getNFLSchedule = this.getNFLSchedule.bind(this);

    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getNFL());
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

    getNFLSchedule(e) {
        e.preventDefault();
        const { dispatch, year } = this.props;
        dispatch(getNFLSchedule(year))
    }



    render() {
        const { nflTeams, schedule, team } = this.props;

        let teamSchedule = [];

        if(schedule.length > 0) {
            for(let i = 0; i < schedule.length; i++) {

                if(team === schedule[i].HomeTeam && schedule[i].AwayTeam === 'BYE') {
                    teamSchedule.push(
                        <div className='col m6' key={schedule[i].GameKey}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center"><b>Week: {schedule[i].Week}</b></span>
                                    <h3 className='center'>Bye Week</h3>
                                </div>
                            </div>
                        </div>
                    )
                } else if(team === schedule[i].AwayTeam || team === schedule[i].HomeTeam) {
                    teamSchedule.push(
                        <div className='col m6' key={schedule[i].GameKey}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center">
                                        <b>Week: {schedule[i].Week}</b><br/>
                                        {moment(schedule[i].Date.split('T', 1), 'YYYY-MM-DD').format('MM-DD-YYYY')}
                                    </span>
                                    <div className="row center">
                                        <div className="col m6">
                                            <p><b>Home Team:</b></p><br/>
                                            <p>{schedule[i].HomeTeam}</p><br/>
                                            <p></p>
                                        </div>
                                        <div className="col m6">
                                            <p><b>Away Team:</b></p><br/>
                                            <p>{schedule[i].AwayTeam}</p><br/>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="row center">
                                        <div className="col m6 offset-m3">
                                            <p><b>Forecast:</b> { schedule[i].ForecastDescription }</p><br/>
                                            <p><b>Stadium:</b> { schedule[i].StadiumDetails.Name }</p><br/>
                                            <p><b>Location:</b> { schedule[i].StadiumDetails.City }, { schedule[i].StadiumDetails.State }</p>
                                        </div>
                                        <Map center = {[schedule[i].StadiumDetails.GeoLat, schedule[i].StadiumDetails.GeoLong]}zoom = { 16 }width = { 250 }height = { 200 }>
                                            <Marker anchor = {[schedule[i].StadiumDetails.GeoLat, schedule[i].StadiumDetails.GeoLong]}payload = { 1 }/>
                                        </Map>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }

        return (
            <div className="valign-wrapper football" id='full-page'>
                <div className="row">
                    <div className="col s12">
                        <form onSubmit={this.getNFLSchedule} id='teams-form'>
                            <div className="card black stripe">
                                <div className="card-content">
                                <a href="/">Home</a>
                                    <div className="row">
                                        <div className="input-field col s3 offset-s2">
                                            <select onChange={this.selectedTeamInput} id="footballSelect" className="browser-default">
                                                <option value="" disabled selected>Choose your team</option>
                                                {nflTeams.map(nflTeam =>
                                                    <option key={nflTeam.Key} value={nflTeam.Key}>{nflTeam.FullName}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="input-field col s3 offset-s2">
                                            <input type='text' className='validate' style={{background: 'white'}} onChange={this.scheduleYearInput} placeholder='yyyy'/>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <button className="btn blue darken-4 waves-effect waves-light">Get Your Schedule
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>  
                            </div>
                        </form>
                    </div>
                    <div className="container">
                        <div className="col s12">
                            <div className="card transparent">
                                <div className="card-content">
                                    <span className="card-title center white-text black" id="scheduleBanner">
                                        <br/>
                                        <b>Your Team Schedule</b>
                                    </span>
                                </div>
                                <div className="card-content scheduleView">
                                    <div className="row">
                                        {teamSchedule}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}