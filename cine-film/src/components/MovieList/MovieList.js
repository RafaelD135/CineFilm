import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import styles from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
	return (
		<div className={styles.movieList}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					title={movie.title}
					posterPath={movie.poster_path}
					releaseDate={movie.release_date}
				/>
			))}
		</div>
	);
};

export default MovieList;