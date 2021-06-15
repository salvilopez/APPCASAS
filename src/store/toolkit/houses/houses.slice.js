import {createSlice} from '@reduxjs/toolkit';

// 1. TYPOS DE ACCIONES para definir e identificar
// 2. DATOS DE LAS ACCIONS (parametros)
// 3. REDUCERS cambios que hacemos en el estado

export const HOUSES_STATUS = {
	INITIAL: 'INITIAL',
	PENDING: 'PENDING',
	FULFILLED: 'FULFILLED',
	FAILURE: 'FAILURE',
};

export const housesSlice = createSlice({
	name: 'houses',
	initialState: {
		status: HOUSES_STATUS.INITIAL,
		houses: [],
		selectedLocation: undefined,
		housesToShow: 9,
	},
	reducers: {
		getHouses() {},
		setHouses(state, action) {
			state.selectedLocation = [action.payload[0].lat, action.payload[0].long];
			state.houses = action.payload;
			state.status = HOUSES_STATUS.FULFILLED;
		},
		setSelectedLocation: (state, action) => {
			state.selectedLocation = action.payload;
		},
		setHousesToShow: (state) => {
			state.housesToShow = state.housesToShow + 9;
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchHouses.pending, (state, action) => {
	// 		state.status = HOUSES_STATUS.PENDING;
	// 	});
	// 	builder.addCase(fetchHouses.fulfilled, (state, action) => {
	// 		state.selectedLocation = [action.payload[0].lat, action.payload[0].long];
	// 		state.houses = action.payload;
	// 		state.status = HOUSES_STATUS.FULFILLED;
	// 	});
	// 	builder.addCase(fetchHouses.rejected, (state, action) => {
	// 		state.status = HOUSES_STATUS.ERROR;
	// 		console.log('he recibido respuesta negativa');
	// 	});
	// },
});

// Action creators are generated for each case reducer function
export const {getHouses, setHouses, setSelectedLocation, setHousesToShow} = housesSlice.actions;

export default housesSlice.reducer;
