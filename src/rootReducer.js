import { combineReducers } from 'redux';
import AppReducer from './reducers/appReducer';

const rootReducer = combineReducers({
    app: AppReducer
});

export default rootReducer;