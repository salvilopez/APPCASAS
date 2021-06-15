import {configureStore, combineReducers} from '@reduxjs/toolkit';
import counterReducer from './toolkit/counter.slice';
import housesReducer from './toolkit/houses/houses.slice';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import {watcherSaga} from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
	collapsed: true,
	diff: true,
});

export const combinedReducers = combineReducers({
	counter: counterReducer,
	houses: housesReducer,
});

const store = configureStore({
	reducer: combinedReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export default store;
