import React, { Component } from 'react';
import {
    sportToggle
} from '../actions/appAction';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.selectedSportInput = this.selectedSportInput.bind(this);
    }

    selectedSportInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(sportToggle(value));
    }


    render() {
        return (
            <div className="valign-wrapper landing" id='full-page'>
                <div className="container">
                    <div className="row">
                        <form action="">
                            <div className="input-field col s6 offset-s3">
                                <select onChange={this.selectedSportInput}>
                                    <option value="" disabled selected>Choose your sport</option>
                                    <option value="nfl">NFL</option>
                                    <option value="nba">NBA</option>
                                    <option value="nhl">NHL</option>
                                    <option value="mlb">MLB</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}