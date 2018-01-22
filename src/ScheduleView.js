import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';


const ScheduleView = props => {

    let teamSchedule = [];

    for (let i = 0; i < props.scheduleData.length; i++) {

        if (props.selectedTeam === props.scheduleData[i].HomeTeam && props.scheduleData[i].AwayTeam === 'BYE') {
            teamSchedule.push( 
                <div className = "col-md-6" key = { props.scheduleData[i].GameKey }>
                    <div className = "card bg-light mb-3">
                        <div className = "card-header" >
                            Week: { props.scheduleData[i].Week }
                        </div>
                        <div className = "card-body">
                            <h3 > Bye Week </h3>
                        </div>
                    </div> 
                </div>
            )
        } else if (props.selectedTeam === props.scheduleData[i].AwayTeam || props.selectedTeam === props.scheduleData[i].HomeTeam) {
            teamSchedule.push( 
                <div className = 'col-md-6' key = { props.scheduleData[i].GameKey }>
                    <div className = 'card bg-light mb-3'>
                        <div className = 'card-header'>
                            Week: { props.scheduleData[i].Week }
                        </div>
                        <div className = 'card-body'>
                            <p className = 'card-text'> Date: { props.scheduleData[i].Date }</p>
                            <p className = 'card-text'> Away Team: { props.scheduleData[i].AwayTeam }</p>
                            <p className = 'card-text'> Home Team: { props.scheduleData[i].HomeTeam }</p>
                            <p className = 'card-text'> Forecast: { props.scheduleData[i].ForecastDescription }</p>
                            <p className = "card-text"> Stadium: { props.scheduleData[i].StadiumDetails.Name }</p>
                            <p className = "card-text"> Location: { props.scheduleData[i].StadiumDetails.City }, { props.scheduleData[i].StadiumDetails.State }</p>
                            <Map center = {[props.scheduleData[i].StadiumDetails.GeoLat, props.scheduleData[i].StadiumDetails.GeoLong]}zoom = { 16 }width = { 250 }height = { 200 }>
                                <Marker anchor = {[props.scheduleData[i].StadiumDetails.GeoLat, props.scheduleData[i].StadiumDetails.GeoLong]}payload = { 1 }/>
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
                <div className = 'card-body' id='scroll-box'>
                    <div className = 'row'>
                        { teamSchedule }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ScheduleView;