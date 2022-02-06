import {all, takeLatest} from 'redux-saga/effects';
import {LOGIN} from '../types';

// Root Saga
export default function* rootSaga() {
	yield all([takeLatest(LOGIN, () => {})]);
}
