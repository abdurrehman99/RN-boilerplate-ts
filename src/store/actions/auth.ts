import {SIGNUP, LOGIN} from '../types';
import {createAction} from '.';

const userSignUp = (payload: any) => {
	createAction(SIGNUP, payload);
};
const userLogin = (payload: any) => {
	createAction(LOGIN, payload);
};

export {userSignUp, userLogin};
