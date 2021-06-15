import {call, put} from 'redux-saga/effects';
import {setHouses} from 'store/toolkit/houses/houses.slice';
import {requestGetHouses} from '../requests/houses';

export function* handleGetHouses(action) {
	try {
		const response = yield call(requestGetHouses);
		yield put({type: setHouses.type, payload: response.data});
	} catch (error) {
		console.error(error);
	}
}
