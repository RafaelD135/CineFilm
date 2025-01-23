import React from 'react';
import { useState, useEffect } from "react";

import MomentMovieSelected from '../MomentMovieSelected/MomentMovieSelected';
import MomentOtherMovie from '../MomentOtherMovie/MomentOtherMovie';

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
			setSelectedMovie(popularMovies.results.shift());
			setMovies(popularMovies.results);
		};

		fetchPopularMovies();
	}, []);

	const handleMovieClick = (movie) => {
		setSelectedMovie(movie);
		setMovies((prevMovies) => {
			const newMovies = prevMovies.filter((prevMovie) => prevMovie.id !== movie.id);
			return [...newMovies, selectedMovie];
		});
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
			<MomentMovieSelected className={styles.momentMovieSelected}
				key={selectedMovie?.id}
				title={selectedMovie?.title}
				posterPath={selectedMovie?.poster_path}
				releaseDate={selectedMovie?.release_date}
				text={selectedMovie?.overview}
				video={video}
			/>
			<MomentOtherMovie className={styles.momentOtherMovie}
				movies={movies}
				setSelectedMovie={handleMovieClick}
			/>
		</div>
	);
}

export default MomentMovie;