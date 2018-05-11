import axios from 'axios';

export const types = {
    SELECTED_TEAM_TOGGLE: 'SELECTED_TEAM_TOGGLE',
    SELECTED_SPORT_TOGGLE: 'SELECTED_SPORT_TOGGLE',
    SCHEDULE_YEAR_INPUT: 'SCHEDULE_YEAR_INPUT',
    GET_NFL: 'GET_NFL',
    GET_NBA: 'GET_NBA',
    NBA_ARENAS: 'NBA_ARENAS',
    GET_NHL: 'GET_NHL',
    NHL_ARENAS: 'NHL_ARENAS',
    GET_MLB: 'GET_MLB',
    MLB_STADIUMS: 'MLB_STADIUMS',
    FULL_SCHEDULE: 'FULL_SCHEDULE',
    SPORT_GO: 'SPORT_GO'
}

const nflConfig = {
    headers: {'Ocp-Apim-Subscription-Key': '12ec1fc331d842588a9e4c8726dcc11a'}
};

const nbaConfig = {
    headers: {'Ocp-Apim-Subscription-Key': 'e7191e48275b403eaab3771cc388b9d0'} 
};

const nhlConfig = {
    headers: {'Ocp-Apim-Subscription-Key': '8f371eec0eec441bad5996208fdaf92d'} 
};

const mlbConfig = {
    headers: {'Ocp-Apim-Subscription-Key': 'a01774347b9542b2a5bbce3527a2cbd6'} 
};

export function getNFL() {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nfl/scores/JSON/Teams?', nflConfig)
        .then(res => {
            dispatch({
                type: types.GET_NFL,
                payload: res.data
            })
        }).catch(err => console.log('Unable to get NFL'));
    }
}

export function getNBA() {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nba/scores/JSON/teams?', nbaConfig)
        .then(res => {
            dispatch({
                type: types.GET_NBA,
                payload: res.data
            })
        }).catch(err => console.log('Unable to get NBA'));
    }
}

export function nbaArenas() {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nba/scores/JSON/Stadiums', nbaConfig)
        .then(res => {
            dispatch({
                type: types.NBA_ARENAS,
                payload: res.data
            })
        }).catch(err => console.log('Unable to get Arenas'));
    }
}

export function getNHL() {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nhl/scores/JSON/teams?', nhlConfig)
        .then(res => {
            dispatch({
                type: types.GET_NHL,
                payload: res.data
            })
        }).catch(err => console.log('Unable to get NHL'));
    }
}

export function getMLB() {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/mlb/scores/JSON/teams?', mlbConfig)
        .then(res => {
            dispatch({
                type: types.GET_MLB,
                payload: res.data
            })
        }).catch(err => console.log('Unable to get MLB'));
    }
}

export function getNFLSchedule(year) {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nfl/scores/JSON/Schedules/' + year + '?', nflConfig)
        .then(res => {
            dispatch({
                type: types.FULL_SCHEDULE,
                payload: res.data
            })
        }).catch(error => console.log('Error getting schedule'));
    }
}

export function getNBASchedule(year) {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nba/scores/JSON/Games/' + year + '?', nbaConfig)
        .then(res => {
            dispatch({
                type: types.FULL_SCHEDULE,
                payload: res.data
            })
        }).catch(error => console.log('Error getting schedule'));
    }
}

export function getNHLSchedule(year) {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/nhl/scores/JSON/Games/' + year + '?', nhlConfig)
        .then(res => {
            dispatch({
                type: types.FULL_SCHEDULE,
                payload: res.data
            })
        }).catch(error => console.log('Error getting schedule'));
    }
}

export function getMLBSchedule(year) {
    return (dispatch) => {
        axios.get('https://api.fantasydata.net/v3/mlb/scores/JSON/Games/' + year + '?', mlbConfig)
        .then(res => {
            dispatch({
                type: types.FULL_SCHEDULE,
                payload: res.data
            })
        }).catch(error => console.log('Error getting schedule'));
    }
}

export function teamToggle(value) {
    return {
        type: types.SELECTED_TEAM_TOGGLE,
        payload: value
    };
}

export function sportToggle(value) {
    return {
        type: types.SELECTED_SPORT_TOGGLE,
        payload: value
    };
}

export function sportGo(sport) {
    return {
        type: types.SPORT_GO,
        payload: sport
    };
}

export function scheduleYear(value) {
    return {
        type: types.SCHEDULE_YEAR_INPUT,
        payload: value
    };
}

