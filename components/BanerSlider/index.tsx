import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./BanerSlider.module.scss";

interface IButtonProps {
	className?: any
	style?: any
	onClick?: any
}

interface ISliderProps {
	className?: any
}

const NextArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "nextarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.nextarr__btn}>
				<span className={styles.nextarr__btnLeft}></span>
				<span className={styles.nextarr__btnRight}></span>
			</div>
		</button>
	)
}
const PrevArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "prevarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.prevarr__btn}>
				<span className={styles.prevarr__btnLeft}></span>
				<span className={styles.prevarr__btnRight}></span>
			</div>
		</button>
	)
}

const BanerSlider: React.FC<ISliderProps> = ({ className }) => {
	const settings = {
		centerMode: true,
		centerPadding: "5px",
		dots: false,
		adaptiveHeight: true,
		accessibility: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		initialSlide: 0,
	}

	return (
		<div>
			<Slider 
				{...settings} 
			>
				<div>
					<Image
						src='/images/baner.webp'
						alt='baner'
						width={1116}
						height={509}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Twenty One Pilots
							</h1>
							<p className={styles.banner__subtitle}>
								22.02.23 в 21:00
							</p>
							<Link href='/'>
								<a className={styles.banner__navLink}>
                                    Купить билет
                                </a>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<Image
						src='/images/baner.webp'
						alt='baner'
						width={1116}
						height={509}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Twenty One Pilots
							</h1>
							<p className={styles.banner__subtitle}>
								22.02.23 в 21:00
							</p>
							<Link href='/'>
								<a className={styles.banner__navLink}>
                                    Купить билет
                                </a>
							</Link>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	)
}

export default BanerSlider;
