import React from "react";
import VideoCard from "../VideoCard/VideoCard";

import styles from "./VideoList.module.css";

const VideoList = ({ MovieWithVideo = [] }) => {
	console.log(MovieWithVideo)
	return (
		<div className={styles.videoList}>
			{MovieWithVideo.map((MovieWithVideo) => (
				<VideoCard
					videoKey={MovieWithVideo.id}
				/>
			))}
		</div>
	);
}

export default VideoList;