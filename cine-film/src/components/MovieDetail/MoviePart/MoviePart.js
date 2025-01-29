import React from 'react';

import styles from './MoviePart.module.css';

const MoviePart = ({ movie }) => {
    return (
        <div className={styles.moviePart}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className={styles.details}>
                <h1>{movie.title}</h1>
				<div className={styles.moviePartDetails}>
					<p className={styles.moviePartReleaseDate}>{movie.release_date}</p>
					<p className={styles.moviePartRuntime}>{movie.runtime} minutes</p>
				</div>
                {movie.genres && (
                    <ul>
                        {movie.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                )}
                <p>{movie.overview}</p>

            </div>
        </div>
    );
}

export default MoviePart;