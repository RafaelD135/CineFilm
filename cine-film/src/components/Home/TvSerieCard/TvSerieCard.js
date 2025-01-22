import React from "react";

import styles from "./TvSerieCard.module.css";

const TvSerieCard = ({ title, posterPath, genre, genre2 }) => {
    return (
        <div className={styles.TvSerieCard}>
            <img className={styles.TvSerieCardImage} src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
            <div className={styles.informations}>
                <h3 className={styles.TvSerieCardTitle}>{title}</h3>
                <div className={styles.TvSerieCardGenres}>
                    {genre && <p className={styles.TvSerieCardGenre}>{genre}</p>}
                    {genre2 && <p className={styles.TvSerieCardGenre}>{genre2}</p>}
                </div>
            </div>
        </div>
    );
};

export default TvSerieCard;