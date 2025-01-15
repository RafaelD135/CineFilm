import React from 'react';

import styles from './Home.module.css';

import PopularMovie from '../../components/PopularMovie/PopularMovie';
import PopularTvSerie from '../../components/PopularTvSerie/PopularTvSerie';
import PopularActor from '../../components/PopularActor/PopularActor';
import NowPlayingVideo from '../../components/NowPlayingVideo/NowPlayingVideo';

function Home() {
	return (
		<div className={styles.home}>
			{/* <PopularMovie />
			<PopularTvSerie />
			<PopularActor /> */}
			<NowPlayingVideo />
		</div>
	);
}

export default Home;