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

export const getPopularActors = async () => {
	const response = await fetch(`${BASE_URL}/person/popular?language=fr-FR&page=1`, options);
	const data = await response.json();
	data.results = data.results.slice(0, 10);
	return data;
};

export const getVideoNowPlaying = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?language=fr-FR&page=1`, options);
	const data = await response.json();

	let movieWithVideo = {results: []};
	for (const movie of data.results) {
		const video = await getVideoByIdMovie(movie.id);
		if (video.results.length > 0) {
			movieWithVideo.results.push(movie);
		}
	}

	movieWithVideo.results = movieWithVideo.results.slice(0, 5);
	return movieWithVideo;
};

export const getVideoByIdMovie = async (id) => {
	const response = await fetch(`${BASE_URL}/movie/${id}/videos?language=fr-FR`, options);
	const data = await response.json();
	return data;
};