import React from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

export const logo = (
	<div className={styles.logo}>
		<Link to={"/"}>
			<h2>
				Shop<span>Ito</span>
			</h2>
		</Link>
	</div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
	return (
		<header>
			<div className={styles.header}>
				{logo}
				<nav>
					<ul>
						<li>
							<NavLink to="/shop" className={activeLink}>Shop</NavLink>
						</li>
					</ul>
				</nav>
				<div className={styles["header-right"]}>
					<span className={styles.links}>
						<NavLink to={"/login"} className={activeLink}>
							Login
						</NavLink>
						<NavLink to={"/register"} className={activeLink}>
							Register
						</NavLink>
						<NavLink to={"/order-history"} className={activeLink}>
							MyOrder
						</NavLink>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
