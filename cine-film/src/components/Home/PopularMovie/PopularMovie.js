import React from 'react';
import { useState, useEffect } from "react";

import { getPopularMovies } from "../../../api/tmdb";
import MovieList from "../MovieList/MovieList";

import styles from "./PopularMovie.module.css"

function PopularMovie() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchPopularMovies = async () => {
			const popularMovies = await getPopularMovies();
			setMovies(popularMovies.results);
		};

		fetchPopularMovies();
	}, []);

	return (
		<div className={styles.popularMovie}>
			<h1 className ={styles.popularMovieText}>Films populaires</h1>
			<MovieList movies={movies} />
		</div>
	);
};

export default PopularMovie;