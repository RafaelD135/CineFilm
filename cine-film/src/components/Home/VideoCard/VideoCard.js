import React from "react";
import { useState, useEffect } from "react";

import styles from "./VideoCard.module.css";

import { getVideoByIdMovie } from "../../../api/tmdb";

function VideoCard({ videoKey }) {
	const [video, setVideo] = useState([]);

	useEffect(() => {
		const fetchVideo = async () => {
			const videoData = await getVideoByIdMovie(videoKey);
			setVideo(videoData.results);
		};

		fetchVideo();
	}, [videoKey]);

	if(video && video.length > 0) {
		return (
			<div className={styles.videoCard}>
				<iframe
					className={styles.videoCardIframe}
					src={`https://www.youtube.com/embed/${video[0].key}`}
					title="YouTube video player"
					// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div> 
		);
	}
	return (
		<div className={styles.videoCard}>
			<p>Pas de vidéo disponible</p>
		</div>
	);
}
export default VideoCard;