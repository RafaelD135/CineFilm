import React from 'react';
import { useState, useEffect } from "react";

import { getVideoNowPlaying } from "../../../api/tmdb";
import VideoList from "../VideoList/VideoList";

function NowPlayingVideo() {
	const [MovieWithVideos, setVideos] = useState([]);

	useEffect(() => {
		const fetchNowPlayingVideos = async () => {
			const nowPlayingVideos = await getVideoNowPlaying();
			setVideos(nowPlayingVideos.results);
		};

		fetchNowPlayingVideos();
	}, []);
	return (
		<div>
			<h1>Films en ce moment</h1>
			<VideoList MovieWithVideo={MovieWithVideos} />
		</div>
	);
};

export default NowPlayingVideo;