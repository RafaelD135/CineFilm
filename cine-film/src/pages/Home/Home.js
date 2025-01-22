import React from 'react';

import styles from './Home.module.css';

import MomentMovie from '../../components/Home/MomentMovie/MomentMovie';
import PopularMovie from '../../components/Home/PopularMovie/PopularMovie';
import PopularTvSerie from '../../components/Home/PopularTvSerie/PopularTvSerie';
import PopularActor from '../../components/Home/PopularActor/PopularActor';
import NowPlayingVideo from '../../components/Home/NowPlayingVideo/NowPlayingVideo';

function Home() {
	return (
		<div className={styles.home}>
			<MomentMovie />
			<PopularMovie />
			<PopularTvSerie />
			<PopularActor />
			{/* <NowPlayingVideo /> */}
		</div>
	);
}

export default Home;