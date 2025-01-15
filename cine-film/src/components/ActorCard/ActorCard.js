import React from "react";

import styles from "./ActorCard.module.css";

const ActorCard = ({ name, profilePath }) => {
	return (
		<div className={styles.actorCard}>
			<img className={styles.actorCardImage} src={`https://image.tmdb.org/t/p/w200${profilePath}`} alt={name} />
			<h3 className={styles.actorCardName}>{name}</h3>
		</div>
	);
}

export default ActorCard;
