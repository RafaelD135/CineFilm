import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetail.module.css';
import { useState, useEffect } from 'react';

import { getMovieById } from "../../api/tmdb";

import MoviePart from '../../components/MovieDetail/MoviePart/MoviePart';

const MovieDetail = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchMovie = async () => {
			const movie = await getMovieById(id);
			setMovie(movie);
		};

		fetchMovie();
	}, [id]);

	return (
		<div className={styles.movieDetail}>
			<MoviePart movie={movie} />
		</div>
	);
}

export default MovieDetail;