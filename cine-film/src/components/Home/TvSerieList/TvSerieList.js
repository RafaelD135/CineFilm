import React, { useEffect, useState } from "react";
import TvSerieCard from "../TvSerieCard/TvSerieCard";

import styles from "./TvSerieList.module.css";
import { getGenreById } from "../../../api/tmdb";

const TvSerieList = ({ series = [] }) => {
	const [genres, setGenres] = useState({});

	useEffect(() => {
		const fetchGenres = async () => {
			const genresMap = {};
			for (const serie of series) {
				const genreId = serie.genre_ids[0];
				if (!genresMap[genreId]) {
					genresMap[genreId] = await getGenreById(genreId);
				}
			}
			setGenres(genresMap);
		};

		fetchGenres();
	}, [series]);

	return (
		<div className={styles.TvSerieList}>
			{series.map((serie) => (
				<TvSerieCard
					key={serie.id}
					title={serie.name}
					posterPath={serie.poster_path}
					genre={genres[serie.genre_ids[0]]?.name}
					genre2={genres[serie.genre_ids[1]]?.name}
				/>
			))}
		</div>
	);
};

export default TvSerieList;