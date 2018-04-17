import { connect } from 'react-redux';
import TeamChoiceList from '../components/TeamChoiceList';

function mapStoreToProps(store) {
    return {
        nfl: store.app.nflTeams,
        nba: store.app.nbaTeams,
        mlb: store.app.mlbTeams,
        nhl: store.app.nhlTeams,
        year: store.app.scheduleYear,
        team: store.app.selectedTeam,
        schedule: store.app.fullSchedule
    }
}

export default connect(mapStoreToProps)(TeamChoiceList);