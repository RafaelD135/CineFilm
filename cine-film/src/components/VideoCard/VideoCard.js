import React from "react";

import styles from "./VideoCard.module.css";

const VideoCard = ({ videoKey }) => {
	return (
		<div className={styles.videoCard}>
			<iframe
				className={styles.videoCardIframe}
				src={`https://www.youtube.com/embed/${videoKey}`}
				title="YouTube video player"
			></iframe>
		</div>
	);
}

export default VideoCard;