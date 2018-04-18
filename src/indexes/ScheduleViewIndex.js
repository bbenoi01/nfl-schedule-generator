import { connect } from 'react-redux';
import ScheduleView from '../components/ScheduleView';

function mapStoreToProps(store) {
    return {
        nflTeams: store.app.nflTeams,
        nbaTeams: store.app.nbaTeams,
        mlbTeams: store.app.mlbTeams,
        nhlTeams: store.app.nhlTeams,
        year: store.app.scheduleYear,
        team: store.app.selectedTeam,
        sport: store.app.selectedSport,
        schedule: store.app.fullSchedule
    }
}

export default connect(mapStoreToProps)(ScheduleView);