import React from "react";
import ActorCard from "../ActorCard/ActorCard";

import styles from "./ActorList.module.css";

const ActorList = ({ actors = [] }) => {
	return (
		<div className={styles.actorList}>
			{actors.map((actor) => (
				<ActorCard
					key={actor.id}
					name={actor.name}
					profilePath={actor.profile_path}
				/>
			))}
		</div>
	);
}

export default ActorList;