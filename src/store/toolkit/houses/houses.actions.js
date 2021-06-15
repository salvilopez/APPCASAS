import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHouses = createAsyncThunk('houses/fetchHouses', async (params, thunkAPI) => {
	try {
		const response = await axios({
			method: 'get',
			url: 'https://api-casas.kevinmamaqi.com/api-casas',
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
});
