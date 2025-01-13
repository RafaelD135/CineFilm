import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies = [] }) => {
	return (
		<div>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					title={movie.title}
					posterPath={movie.poster_path}
					releaseDate={movie.release_date}
				/>
			))}
		</div>
	);
};

export default MovieList;