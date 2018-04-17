import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import moment from 'moment';

export default class ScheduleView extends Component {
    render() {
        const { schedule, team } = this.props;

        let teamSchedule = [];

        for (let i = 0; i < schedule.length; i++) {
    
            if (team === schedule[i].HomeTeam && schedule[i].AwayTeam === 'BYE') {
                teamSchedule.push( 
                    <div className = "col-md-6" key = { schedule[i].GameKey }>
                        <div className = "card bg-light mb-3">
                            <div className = "card-header" >
                                <b>Week: { schedule[i].Week }</b>
                            </div>
                            <div className = "card-body">
                                <h3 > Bye Week </h3>
                            </div>
                        </div> 
                    </div>
                )
            } else if (team === schedule[i].AwayTeam || team === schedule[i].HomeTeam) {
                teamSchedule.push( 
                    <div className = 'col-md-6' key = { schedule[i].GameKey }>
                        <div className = 'card bg-light mb-3'>
                            <div className = 'card-header'>
                                <b>Week: { schedule[i].Week }</b>
                            </div>
                            <div className = 'card-body'>
                                <p className = 'card-text'><b>Date:</b> { moment(schedule[i].Date.split('T', 1), 'YYYY-MM-DD').format('MM-DD-YYYY') }</p>
                                <p className = 'card-text'><b>Away Team:</b> { schedule[i].AwayTeam }</p>
                                <p className = 'card-text'><b>Home Team:</b> { schedule[i].HomeTeam }</p>
                                <p className = 'card-text'><b>Forecast:</b> { schedule[i].ForecastDescription }</p>
                                <p className = "card-text"><b>Stadium:</b> { schedule[i].StadiumDetails.Name }</p>
                                <p className = "card-text"><b>Location:</b> { schedule[i].StadiumDetails.City }, { schedule[i].StadiumDetails.State }</p>
                                <Map center = {[schedule[i].StadiumDetails.GeoLat, schedule[i].StadiumDetails.GeoLong]}zoom = { 16 }width = { 250 }height = { 200 }>
                                    <Marker anchor = {[schedule[i].StadiumDetails.GeoLat, schedule[i].StadiumDetails.GeoLong]}payload = { 1 }/>
                                </Map>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className = 'col-md-8'>
                <div className = 'card bg-dark mb-3'>
                    <div className = 'card-header text-white'>
                        Your Team 's Schedule
                    </div>
                    <div className = 'card-body' id='list'>
                        <div className = 'row'>
                            { teamSchedule }
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}