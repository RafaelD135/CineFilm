import React from "react";

import styles from "./TvSerieCard.module.css";

const serieCard = ({ title, posterPath, releaseDate }) => {
	return (
		<div className={styles.TvSerieCard}>
			<img className={styles.TvSerieCardImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
			<h3 className={styles.TvSerieCardTitle}>{title}</h3>
			<p className={styles.TvSerieCardReleaseDate}>{releaseDate}</p>
		</div>
	);
};

export default serieCard;
