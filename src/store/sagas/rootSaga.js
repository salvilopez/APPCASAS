import {takeLatest} from 'redux-saga/effects';
import {handleGetHouses} from './handlers/houses';
import {getHouses} from 'store/toolkit/houses/houses.slice';

export function* watcherSaga() {
	yield takeLatest(getHouses.type, handleGetHouses);
}
