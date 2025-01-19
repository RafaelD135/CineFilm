import React from "react";
import TvSerieCard from "../TvSerieCard/TvSerieCard";

import styles from "./TvSerieList.module.css";

const TvSerieList = ({ series = [] }) => {
	return (
		<div className={styles.TvSerieList}>
			{series.map((serie) => (
				<TvSerieCard
					key={serie.id}
					title={serie.name}
					posterPath={serie.poster_path}
					releaseDate={serie.first_air_date}
				/>
			))}
		</div>
	);
};

export default TvSerieList;