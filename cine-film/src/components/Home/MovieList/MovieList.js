import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

import styles from "./MovieList.module.css";
import { getGenreById } from "../../../api/tmdb";

const MovieList = ({ movies = [] }) => {
	const [genres, setGenres] = useState({});

	useEffect(() => {
		const fetchGenres = async () => {
			// Créer un objet contenant les genres pour chaque film
			const genresMap = {};
			for (const movie of movies) {
				const genreId = movie.genre_ids[0];
				if (!genresMap[genreId]) {
					// Récupère le genre si non déjà chargé
					genresMap[genreId] = await getGenreById(genreId);
				}
			}
			setGenres(genresMap);
		};

		fetchGenres();
	}, [movies]);

	return (
		<div className={styles.movieList}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					title={movie.title}
					posterPath={movie.poster_path}
					voteCount={movie.vote_average}
					genre={genres[movie.genre_ids[0]]?.name}
					genre2={genres[movie.genre_ids[1]]?.name}
				/>
			))}
		</div>
	);
};

export default MovieList;
