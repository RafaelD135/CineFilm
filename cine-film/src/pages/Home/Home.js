import React from 'react';

import styles from './Home.module.css';

import PopularMovie from '../../components/PopularMovie/PopularMovie';

function Home() {
	return (
		<div className={styles.home}>
			<PopularMovie />
		</div>
	);
}

export default Home;