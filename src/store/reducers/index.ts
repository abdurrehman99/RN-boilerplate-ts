import {combineReducers} from 'redux';
import auth from './auth';

//action type declaration
export interface IActionType {
	type: string;
	payload: any;
}

// combine all reducers
const rootReducer = combineReducers({
	auth,
});

export default rootReducer;
