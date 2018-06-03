import React, { Component } from 'react';
// import Map from 'pigeon-maps';
// import Marker from 'pigeon-marker';
import moment from 'moment';
import {
    getMLB,
    teamToggle,
    scheduleYear,
    getMLBSchedule
} from '../actions/appAction';

export default class Baseball extends Component {
    constructor(props) {
        super(props);


        this.selectedTeamInput = this.selectedTeamInput.bind(this);
        this.scheduleYearInput = this.scheduleYearInput.bind(this);
        this.getMLBSchedule = this.getMLBSchedule.bind(this);

    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getMLB());
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

    getMLBSchedule(e) {
        e.preventDefault();
        const { dispatch, year } = this.props;
        dispatch(getMLBSchedule(year))
    }



    render() {
        const { mlbTeams, schedule, team } = this.props;

        let teamSchedule = [];

        if(schedule.length > 0) {
            for(let i = 0; i < schedule.length; i++) {

                if(team === schedule[i].AwayTeam || team === schedule[i].HomeTeam) {
                    teamSchedule.push(
                        <div className='col m6' key={schedule[i].GameID}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center">
                                        <b>Week: {moment(schedule[i].Day.split('T', 1), 'YYYY-MM-DD').format('MM-DD-YYYY')}</b><br/>
                                        
                                    </span>
                                    <div className="row center">
                                        <div className="col m6">
                                            <p><b>Home Team:</b></p><br/>
                                            <p>{schedule[i].HomeTeam}</p><br/>
                                            <p>{schedule[i].HomeTeamRuns}</p>
                                        </div>
                                        <div className="col m6">
                                            <p><b>Away Team:</b></p><br/>
                                            <p>{schedule[i].AwayTeam}</p><br/>
                                            <p>{schedule[i].AwayTeamRuns}</p>
                                        </div>
                                    </div>
                                    {/* <div className="row center">
                                        <div className="col m6 offset-m3">
                                            <p><b>Forecast:</b> { schedule[i].ForecastDescription }</p><br/>
                                            <p><b>Stadium:</b> { schedule[i].StadiumDetails.Name }</p><br/>
                                            <p><b>Location:</b> { schedule[i].StadiumDetails.City }, { schedule[i].StadiumDetails.State }</p>
                                        </div>
                                        <Map center = {[schedule[i].StadiumDetails.GeoLat, schedule[i].StadiumDetails.GeoLong]}zoom = { 16 }width = { 250 }height = { 200 }>
                                            <Marker anchor = {[schedule[i].StadiumDetails.GeoLat, schedule[i].StadiumDetails.GeoLong]}payload = { 1 }/>
                                        </Map>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }

        return (
            <div className="valign-wrapper baseball" id='full-page'>
                <div className="row">
                    <div className="col s12">
                        <form onSubmit={this.getMLBSchedule} id='teams-form'>
                            <div className="card black stripe">
                                <div className="card-content">
                                <a href="/">Home</a>
                                    <div className="row">
                                        <div className="input-field col s3 offset-s2">
                                            <select className='browser-default' onChange={this.selectedTeamInput} id='baseballSelect'>
                                                <option value="" disabled selected>Choose your team</option>
                                                {mlbTeams.map(mlbTeam =>
                                                    <option key={mlbTeam.Key} value={mlbTeam.Key}>{mlbTeam.City} {mlbTeam.Name}</option>
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