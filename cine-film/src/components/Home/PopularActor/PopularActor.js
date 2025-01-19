import React from 'react';
import { useState, useEffect } from "react";

import { getPopularActors } from "../../../api/tmdb";
import ActorList from "../ActorList/ActorList";

function PopularActor() {
	const [actors, setActors] = useState([]);

	useEffect(() => {
		const fetchPopularActors = async () => {
			const popularActors = await getPopularActors();
			setActors(popularActors.results);
		};

		fetchPopularActors();
	}, []);

	return (
		<div>
			<h1>Acteurs populaires</h1>
			<ActorList actors={actors} />
		</div>
	);
};

export default PopularActor;
