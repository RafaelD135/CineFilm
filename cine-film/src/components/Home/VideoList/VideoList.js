import React from "react";
import VideoCard from "../VideoCard/VideoCard";

import styles from "./VideoList.module.css";

const VideoList = ({ MovieWithVideo = [] }) => {
	return (
		<div className={styles.videoList}>
			{MovieWithVideo.map((movie) => (
				<VideoCard
					key={movie.id}
					videoKey={movie.id}
				/>
			))}
		</div>
	);
}

export default VideoList;