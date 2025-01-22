import React from 'react';
import { useState, useEffect } from "react";

import MomentMovieSelected from '../MomentMovieSelected/MomentMovieSelected';

import styles from './MomentMovie.module.css';

import { getVideoNowPlaying } from '../../../api/tmdb';
import { getVideoByIdMovie } from '../../../api/tmdb';

function MomentMovie() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [video, setVideo] = useState({});


	useEffect(() => {
		const fetchPopularMovies = async () => {
			const popularMovies = await getVideoNowPlaying();
			popularMovies.results = popularMovies.results.slice(0, 3);
			setMovies(popularMovies.results);
			setSelectedMovie(popularMovies.results[0]);
		};

		fetchPopularMovies();
	}, []);

	console.log(selectedMovie.id);

	const handleMovieClick = (movie) => {
		setSelectedMovie(movie);
	};


	useEffect(() => {
		if(selectedMovie?.id) {
			const fetchVideo = async () => {
				const video = await getVideoByIdMovie(selectedMovie?.id);
				setVideo(video.results[0].key);
			};

			fetchVideo();
		}
	}, [selectedMovie]);

	return (
		<div className={styles.momentMovie}>
			<MomentMovieSelected
				key={selectedMovie?.id}
				title={selectedMovie?.title}
				posterPath={selectedMovie?.poster_path}
				releaseDate={selectedMovie?.release_date}
				text={selectedMovie?.overview}
				video={video}
			/>
		</div>
	);
}

export default MomentMovie;