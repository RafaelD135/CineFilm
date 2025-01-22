import React from "react";

import styles from "./MovieCard.module.css";

const MovieCard = ({ title, posterPath, voteCount, genre, genre2 }) => {
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
			<div className={styles.informations}>
				<div className={styles.movieCardGenres}>
					{genre && <p className={styles.movieCardGenre}>{genre}</p>}
					{genre2 && <p className={styles.movieCardGenre}>{genre2}</p>}
				</div>
				<h3 className={styles.movieCardTitle}>{title}</h3>
				<p className={styles.movieCardVoteCount}>{voteCount}</p>
			</div>
		</div>
	);
};

export default MovieCard;
