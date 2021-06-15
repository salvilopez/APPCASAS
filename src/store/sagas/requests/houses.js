import axios from 'axios';

export function requestGetHouses() {
	return axios({
		method: 'get',
		url: 'https://api-casas.kevinmamaqi.com/api-casas',
	});
}
