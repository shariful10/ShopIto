import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className={styles.footer}>&copy; {year} All Rights Reserved.</div>
	);
};

export default Footer;
