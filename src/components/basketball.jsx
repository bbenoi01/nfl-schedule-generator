import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import moment from 'moment';
import {
    getNBA,
    teamToggle,
    scheduleYear,
    getNBASchedule
} from '../actions/appAction';

export default class Basketball extends Component {
    constructor(props) {
        super(props);


        this.selectedTeamInput = this.selectedTeamInput.bind(this);
        this.scheduleYearInput = this.scheduleYearInput.bind(this);
        this.getNBASchedule = this.getNBASchedule.bind(this);

    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getNBA());
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

    getNBASchedule(e) {
        e.preventDefault();
        const { dispatch, year } = this.props;
        dispatch(getNBASchedule(year))
    }



    render() {
        const { nbaTeams, schedule, team } = this.props;

        let teamSchedule = [];

        if(schedule.length > 0) {
            for(let i = 0; i < schedule.length; i++) {

                if(team === schedule[i].AwayTeam || team === schedule[i].HomeTeam) {
                    teamSchedule.push(
                        <div className='col m6' key={schedule[i].GameID}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center">
                                        <b>Week: {moment(schedule[i].Day.split('T', 1), 'YYYY-MM-DD').format('MM-DD-YYYY')}</b>
                                    </span>
                                    <div className="row center">
                                        <div className="col m6">
                                            <p><b>Home Team:</b></p><br/>
                                            <p>{schedule[i].HomeTeam}</p><br/>
                                            <p>{schedule[i].HomeTeamScore}</p>
                                        </div>
                                        <div className="col m6">
                                            <p><b>Away Team:</b></p><br/>
                                            <p>{schedule[i].AwayTeam}</p><br/>
                                            <p>{schedule[i].AwayTeamScore}</p>
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
            <div className="valign-wrapper basketball" id='full-page'>
                <div className="container">
                <a href="/">Home</a>
                    <form onSubmit={this.getNBASchedule} id='teams-form' className='col s12'>
                        <div className="row">
                            <div className="input-field col s6">
                                <select className='browser-default' onChange={this.selectedTeamInput} id='basketballSelect'>
                                    <option value="" disabled selected>Choose your team</option>
                                    {nbaTeams.map(nbaTeam =>
                                        <option key={nbaTeam.Key} value={nbaTeam.Key}>{nbaTeam.City} {nbaTeam.Name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="input-field col s6">
                                <input type='text' className='validate white-text' style={{background: 'black'}} onChange={this.scheduleYearInput} placeholder='yyyy'/>
                            </div>
                        </div>
                        <div className="center">
                            <button className="btn waves-effect waves-light" type="submit">Get Your Schedule
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col m12">
                            <div className="card transparent scheduleView">
                                <div className="card-content">
                                    <span className="card-title center white-text" style={{background: 'black'}}>
                                        <b>Your Team Schedule</b>
                                    </span>
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