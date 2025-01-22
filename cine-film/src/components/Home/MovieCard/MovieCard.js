import React from "react";

import styles from "./MovieCard.module.css";

const MovieCard = ({ title, posterPath, voteAverage, genre, genre2 }) => {
	const getVoteClass = (vote) => {
		if (vote >= 7) return styles.green;
		if (vote >= 5) return styles.yellow;
		if (vote >= 2.5) return styles.orange;
		return styles.red;
	};

	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
			<div className={styles.informations}>
				<div className={styles.movieCardGenres}>
					{genre && <p className={styles.movieCardGenre}>{genre}</p>}
					{genre2 && <p className={styles.movieCardGenre}>{genre2}</p>}
				</div>
				<h3 className={styles.movieCardTitle}>{title}</h3>
				<p className={`${styles.movieCardVoteAverage} ${getVoteClass(voteAverage)}`}>{voteAverage} / 10</p>
			</div>
		</div>
	);
};

export default MovieCard;
