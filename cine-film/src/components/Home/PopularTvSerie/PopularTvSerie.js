import React from 'react';
import { useState, useEffect } from "react";

import { getPopularTvSeries } from "../../../api/tmdb";
import TvSerieList from "../TvSerieList/TvSerieList";

import styles from "./PopularTvSerie.module.css"

function PopularMovie() {
	const [series, setSeries] = useState([]);

	useEffect(() => {
		const fetchPopularMovies = async () => {
			const popularTvSeries = await getPopularTvSeries();
			setSeries(popularTvSeries.results);
		};

		fetchPopularMovies();
	}, []);

	return (
		<div className={styles.popularTvSerie}>
			<h1 className={styles.popularTvSerieText}>Séries populaires</h1>
			<TvSerieList series={series} />
		</div>
	);
};

export default PopularMovie;