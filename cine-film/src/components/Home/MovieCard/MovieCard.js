import React from "react";

import styles from "./MovieCard.module.css";

const MovieCard = ({ title, posterPath, releaseDate }) => {
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
			<h3 className={styles.movieCardTitle}>{title}</h3>
			<p className={styles.movieCardReleaseDate}>{releaseDate}</p>
		</div>
	);
};

export default MovieCard;
