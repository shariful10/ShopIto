import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
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
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const hideMenu = () => {
		setShowMenu(false);
	};

	const cart = (
		<span className={styles.cart}>
			<Link to={"/cart"}>
				Cart
				<FaShoppingCart size={20} />
				<p>0</p>
			</Link>
		</span>
	);

	return (
		<header>
			<div className={styles.header}>
				{logo}
				<nav>
					<ul>
						<li>
							<NavLink to="/shop" className={activeLink}>
								Shop
							</NavLink>
						</li>
					</ul>
					<div className={styles["header-right"]}>
						<span className={styles.links}>
							<NavLink to={"/login"} className={activeLink}>
								Login
							</NavLink>
							<NavLink to={"/register"} className={activeLink}>
								Register
							</NavLink>
							<NavLink to={"/order-history"} className={`${activeLink}`}>
								My Order
							</NavLink>
						</span>
						{cart}
					</div>
				</nav>
            <div className={styles["menu-icon"]}>
               {cart}
            </div>
			</div>
		</header>
	);
};

export default Header;
