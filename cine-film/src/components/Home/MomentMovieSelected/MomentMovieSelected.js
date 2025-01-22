import React from 'react';

import styles from './MomentMovieSelected.module.css';

function MomentMovieSelected({ title, posterPath, releaseDate, text, video }) {
	return (
		<div className={styles.momentMovieSelected}>
			<div className={styles.leftColumn}>
				<img className={styles.momentMovieSelectedImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
				<h1 className={styles.synopsisText}>Synopsis :</h1>
				<p className={styles.momentMovieSelectedText}>{text}</p>
			</div>

			<div className={styles.rightColumn}>
				<div className={styles.momentMovieSelectedTitleContainer}>
					<h3 className={styles.momentMovieSelectedTitle}>{title}</h3>
					<a className={styles.seeMore}>Voir plus {'>'}</a>
				</div>
				<p className={styles.momentMovieSelectedReleaseDate}>{releaseDate}</p>
				<iframe className={styles.momentMovieSelectedVideo} src={`https://www.youtube.com/embed/${video}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</div>
	);
}

export default MomentMovieSelected;