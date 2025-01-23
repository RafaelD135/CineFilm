import React from 'react';
import { useState, useEffect } from "react";

import { getPopularActors } from "../../../api/tmdb";
import ActorList from "../ActorList/ActorList";

import styles from "./PopularActor.module.css"

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
		<div className={styles.popularAcor}>
			<h1 className={styles.popularActorText}>Acteurs populaires</h1>
			<ActorList actors={actors} />
		</div>
	);
};

export default PopularActor;
