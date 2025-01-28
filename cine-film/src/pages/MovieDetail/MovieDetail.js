import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetail.module.css';

const MovieDetail = () => {
	const { id } = useParams();

	return (
		<div className={styles.container}>
			<h1>Movie Detail</h1>
			<p>Movie ID: {id}</p>
		</div>
	);
}

export default MovieDetail;