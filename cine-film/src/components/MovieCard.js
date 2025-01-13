import React from "react";

const MovieCard = ({ title, posterPath, releaseDate }) => {
	return (
		<div className="movie-card">
			<img src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
			<h3>{title}</h3>
			<p>{releaseDate}</p>
		</div>
	);
};

export default MovieCard;
