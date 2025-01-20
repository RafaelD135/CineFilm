import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt="CineFilm" className={styles.logoImage} />
				<h1 className={styles.logoText}>CineFilm</h1>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Accueil</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>"Films"</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink to="/series" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>"Séries"</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;