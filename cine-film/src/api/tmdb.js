const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_KEY}`
	}
};

export const getPopularMovies = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?language=fr-FR&page=1`, options);
	const data = await response.json();
	return data;
};

export const getPopularTvSeries = async () => {
	const response = await fetch(`${BASE_URL}/tv/popular?language=fr-FR&page=1`, options);
	const data = await response.json();
	return data;
};