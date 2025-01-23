import React from 'react';

import styles from './MomentOtherMovie.module.css';

function MomentOtherMovie({ movies, setSelectedMovie }) {
	return (
		<div className={styles.momentOtherMovie}>
			{movies.map((movie) => (
				<img
					key={movie.id}
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
					className={styles.momentOtherMovieImage}
					onClick={() => setSelectedMovie(movie)}
				/>
			))}
		</div>
	);
}

export default MomentOtherMovie;