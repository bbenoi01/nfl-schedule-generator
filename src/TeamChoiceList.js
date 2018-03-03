import React from 'react';

const TeamChoiceList = props => {

    return (
        <div className='col-md-4'>
            <div className='card text-white bg-dark mb-3'>
                <div className='card-header'>
                    Enter team and season here
                </div>
                <form onSubmit={props.getSchedule} id='teams-form'>
                    <div className='card-body form-group'>
                        <strong>Choose your team:</strong>
                        <select className='form-control' id='team-list' onChange={props.selectedTeamInput} value={props.selectedTeam} >
                            <option defaultValue hidden>Pick Your Team</option>
                            {props.createTeamList()}
                        </select>
                        <br />
                        <strong>Enter year (earliest is 2016):</strong>
                        <input type='text' className='form-control' onChange={props.scheduleYearInput} value={props.scheduleYear} placeholder='yyyy' />
                    </div>
                    <div className='card-footer'>
                        <a href='/'><button type='submit' className='btn btn-info'>Get your schedule</button></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TeamChoiceList;