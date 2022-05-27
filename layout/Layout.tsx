import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";

interface ILayoutProps {
    children?: any
	title?: string
	desc?: string
	ogTitle?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title, desc, ogTitle }) => {

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={desc} />
				<meta name='og:title' content={ogTitle} />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap" 
                    rel="stylesheet" />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.page}>
				<div className={styles.root}>
					<Header/>
					<Main>
						{children}
					</Main>
					<Footer/>
				</div>
			</div>
		</>
	)
}

export default Layout;