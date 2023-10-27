import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const logo = (
	<div className={styles.logo}>
		<Link to={"/"}>
			<h2 className="text-h2">
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
			<Link to={"/cart"} className="flex group">
				Cart
				<div className="">
					<FaShoppingCart size={20} />
					<p className="text-2xl font-light leading-[1.3] text-dark group-hover:text-danger">0</p>
				</div>
			</Link>
		</span>
	);

	return (
		<header>
			<div className={styles.header}>
				{logo}
				<nav
					className={
						showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
					}
				>
					<div
						className={
							showMenu
								? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
								: `${styles["nav-wrapper"]}`
						}
						onClick={hideMenu}
					></div>
					<ul>
						<li className={styles["logo-mobile"]}>
							{logo}
							<FaTimes
								to={"/shop"}
								size={28}
								color="#FFF"
								onClick={hideMenu}
							/>
						</li>
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
					<HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
				</div>
			</div>
		</header>
	);
};

export default Header;
