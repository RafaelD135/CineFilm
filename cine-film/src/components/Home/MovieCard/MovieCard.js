import React from "react";

import styles from "./MovieCard.module.css";

const MovieCard = ({ title, posterPath, voteCount }) => {
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
			<div className={styles.informations}>
				<h3 className={styles.movieCardTitle}>{title}</h3>
				<p className={styles.movieCardReleaseDate}>{voteCount}</p>
			</div>
		</div>
	);
};

export default MovieCard;
