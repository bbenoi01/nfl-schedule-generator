import axios from 'axios';

export const types = {
    SELECTED_TEAM_TOGGLE: 'SELECTED_TEAM_TOGGLE',
    SCHEDULE_YEAR_INPUT: 'SCHEDULE_YEAR_INPUT',
    GET_NFL: 'GET_NFL',
    FULL_SCHEDULE: 'FULL_SCHEDULE'
}

var config = {
    headers: {'Ocp-Apim-Subscription-Key': '12ec1fc331d842588a9e4c8726dcc11a'}
};

export function getNFL() {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nfl/scores/JSON/Teams?', config)
        .then(res => {
            dispatch({
                type: types.GET_NFL,
                payload: res.data
            })
        }).catch(err => console.log('Unable to get NFL'));
    }
}

export function getSchedule(year) {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nfl/scores/JSON/Schedules/' + year + '?', config)
        .then(res => {
            dispatch({
                type: types.FULL_SCHEDULE,
                payload: res.data
            })
        }).catch(error => {
            console.log('Error getting schedule', error);
        });
    }
}

export function teamToggle(value) {
    return {
        type: types.SELECTED_TEAM_TOGGLE,
        payload: value
    };
}

export function scheduleYear(value) {
    return {
        type: types.SCHEDULE_YEAR_INPUT,
        payload: value
    };
}

