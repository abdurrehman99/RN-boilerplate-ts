import {IActionType} from '.';
import {SET_USER_DATA} from '../types';

interface IUserState {
	profileImage?: string;
	email?: string;
	createdAt: string;
	updatedAt: string;
	username: string;
	password: string;
}
const initialState: IUserState = {
	profileImage: '',
	email: '',
	createdAt: '',
	updatedAt: '',
	username: '',
	password: '',
};

export default (
	state: IUserState = initialState,
	action: IActionType,
): IUserState => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
