import { types } from '../actions/appAction';

const INITIAL_STATE = {
    nflTeams: [],
    nbaTeams: [],
    mlbTeams: [],
    nhlTeams: [],

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

        case (types.SCHEDULE_YEAR_INPUT):
            return {
                ...state,
                scheduleYear: payload
            }
        
        
        default: return state;
    }
};