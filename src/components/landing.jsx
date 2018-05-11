import React, { Component } from 'react';
import {
    sportToggle,
    sportGo
} from '../actions/appAction';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.selectedSportInput = this.selectedSportInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    selectedSportInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(sportToggle(value));
    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch, sport } = this.props;
        dispatch(sportGo(sport));
    }


    render() {
        return (
            <div className="valign-wrapper landing" id='full-page'>
                <div className="container">
                    <form onSubmit={this.handleClick}>
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <select onChange={this.selectedSportInput}>
                                    <option value="" disabled selected>Choose your sport</option>
                                    <option value="nfl">NFL</option>
                                    <option value="nba">NBA</option>
                                    <option value="nhl">NHL</option>
                                    <option value="mlb">MLB</option>
                                </select>
                            </div>
                        </div>
                        <div className="center">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}