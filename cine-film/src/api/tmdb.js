// Description: Contient les méthodes pour récupérer les données de l'API The Movie Database

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Options pour les requetes
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_KEY}`
	}
};

// Methode pour recuperer les films populaires
export const getPopularMovies = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?language=fr-FR&page=1`, options);
	const data = await response.json();
	return data;
};

// Methode pour recuperer les series populaires
export const getPopularTvSeries = async () => {
	const response = await fetch(`${BASE_URL}/tv/popular?language=fr-FR&page=1`, options);
	const data = await response.json();
	return data;
};

// Methode pour recuperer les acteurs populaires
export const getPopularActors = async () => {
	const response = await fetch(`${BASE_URL}/person/popular?language=fr-FR&page=1`, options);
	const data = await response.json();

	// Garde uniquement les 10 premiers acteurs
	data.results = data.results.slice(0, 10);
	return data;
};

// Methode pour recuperer les films populaires avec une video
export const getVideoNowPlaying = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?language=fr-FR&page=1`, options);
	const data = await response.json();

	// Verifie que le film a une video
	let movieWithVideo = {results: []};
	for (const movie of data.results) {
		const video = await getVideoByIdMovie(movie.id);
		if (video.results.length > 0) {
			movieWithVideo.results.push(movie);
		}
	}

	// Garde uniquement les 5 premiers films
	movieWithVideo.results = movieWithVideo.results.slice(0, 5);
	return movieWithVideo;
};

// Methode pour récupérer les videos d'un film en fonction de son id
export const getVideoByIdMovie = async (id) => {
	const response = await fetch(`${BASE_URL}/movie/${id}/videos?language=fr-FR`, options);
	const data = await response.json();
	return data;
};