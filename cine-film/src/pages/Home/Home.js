import React from 'react';

import styles from './Home.module.css';

import PopularMovie from '../../components/Home/PopularMovie/PopularMovie';
import PopularTvSerie from '../../components/Home/PopularTvSerie/PopularTvSerie';
import PopularActor from '../../components/Home/PopularActor/PopularActor';
import NowPlayingVideo from '../../components/Home/NowPlayingVideo/NowPlayingVideo';
import Header from '../../components/Header/Header';

function Home() {
	return (
		<div className={styles.home}>
			<Header />
			<PopularMovie />
			<PopularTvSerie />
			<PopularActor />
			<NowPlayingVideo />
		</div>
	);
}

export default Home;