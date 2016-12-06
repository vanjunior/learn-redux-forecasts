import axios from 'axios';

const API_KEY = '6b11f07c2def1e5c63639210cd4758a7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
