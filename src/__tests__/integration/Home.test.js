import React from 'react';
import Home from 'pages/Home/Home';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import {combinedReducers} from 'store/store';
import {configureStore} from '@reduxjs/toolkit';
import {HOUSES_STATUS} from 'store/toolkit/houses/houses.slice';
import renderer from 'react-test-renderer';

let store;
beforeEach(() => {
	store = configureStore({reducer: combinedReducers});
});

describe('Home page:', () => {
	it('has INITIAL as the status before it renders for the first time', () => {
		expect(store.getState().houses.status).toBe(HOUSES_STATUS.INITIAL);
	});

	it('has PENDING as the status when the component mounts', () => {
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		expect(store.getState().houses.status).toBe(HOUSES_STATUS.PENDING);
	});

	it('has FULFILLED when the component finishes the request and renders the content', async () => {
		const {getAllByText} = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		await waitFor(() => {
			expect(getAllByText('Localizar').length).toEqual(3);
		});
		expect(store.getState().houses.status).toBe(HOUSES_STATUS.FULFILLED);
	});

	it('updates the selectedLocation property of the state', async () => {
		const {findAllByText} = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		const localizarButtons = await findAllByText('Localizar');
		expect(localizarButtons.length).toBe(3);

		// Handle Click
		fireEvent.click(localizarButtons[2]);
		const house = store.getState().houses.houses[2];
		expect(store.getState().houses.selectedLocation).toEqual([house.lat, house.long]);
	});

	it('generates and matches snapshot', async () => {
		const {findAllByText} = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		const localizarButtons = await findAllByText('Localizar');
		expect(localizarButtons.length).toBe(3);

		const HomeComponent = renderer.create(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		let tree = HomeComponent.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
