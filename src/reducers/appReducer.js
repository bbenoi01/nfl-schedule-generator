import { types } from '../actions/appAction';

const INITIAL_STATE = {
    nflTeams: [],
    nbaTeams: [],
    nbaArenas: [],
    mlbTeams: [],
    mlbStadiums: [],
    nhlTeams: [],
    nhlArenas: [],

    selectedSport: '',
    scheduleYear: '',
    selectedTeam: '',
    fullSchedule: []
};

export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.GET_NFL):
            return {
                ...state,
                nflTeams: payload
            };

        case (types.GET_NBA):
            return {
                ...state,
                nbaTeams: payload
            };

        case (types.nbaArenas):
            return {
                ...state,
                nbaArenas: payload
            };

        case (types.GET_NHL):
            return {
                ...state,
                nhlTeams: payload
            };

        case (types.GET_MLB):
            return {
                ...state,
                mlbTeams: payload
            };

        case (types.FULL_SCHEDULE):
            return {
                ...state,
                // scheduleYear: '',
                // selectedTeam: '',
                fullSchedule: payload
            };
            
        case (types.SELECTED_TEAM_TOGGLE):
            return {
                ...state,
                selectedTeam: payload
            };

        case (types.SELECTED_SPORT_TOGGLE):
            return {
                ...state,
                selectedSport: payload
            };

        case (types.SCHEDULE_YEAR_INPUT):
            return {
                ...state,
                scheduleYear: payload
            }

        case (types.SPORT_GO): 
            if(payload === 'nfl') {
                window.location.href='http://localhost:3000/#/football';
                return {
                    ...state
                };
            } else if(payload === 'nba') {
                window.location.href='http://localhost:3000/#/basketball';
                return {
                    ...state
                };
            } else if(payload === 'nhl') {
                window.location.href='http://localhost:3000/#/hockey';
                return {
                    ...state
                };
            } else if(payload === 'mlb') {
                window.location.href='http://localhost:3000/#/baseball';
                return {
                    ...state
                };
            }
            break;
        
        default: return state;
    }
};