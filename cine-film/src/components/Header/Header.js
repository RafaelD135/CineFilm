import React from "react";

import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<img src={logo} alt="Cine Film" className={styles.headerLogo} />
				<h1 className={styles.headerTitle}>Cine Film</h1>
			</div>
			<h1 className={styles.headerTitle}>Accueil</h1>
			<h1 className={styles.headerTitle}>"Série"</h1>
			<h1 className={styles.headerTitle}>"Films"</h1>
		</header>
	);
};

export default Header;