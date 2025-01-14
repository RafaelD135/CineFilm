import React from 'react';

import styles from './Home.module.css';

import PopularMovie from '../../components/PopularMovie/PopularMovie';
import PopularTvSerie from '../../components/PopularTvSerie/PopularTvSerie';

function Home() {
	return (
		<div className={styles.home}>
			<PopularMovie />
			<PopularTvSerie />
		</div>
	);
}

export default Home;