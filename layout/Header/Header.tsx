import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__navContainer}>
				<Link href='/'>
					<a className={styles.header__logo}>
                        Concert club
					</a>
				</Link>
				<nav className={styles.header__nav}>
					<ul className={styles.header__navLinks}>
						<li>
							<Link href='/'>
								<a className={styles.header__navLink}>
                                    Версия для слабовидящих
                                </a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a className={styles.header__navLink}>
                                    Мой профиль
                                </a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;