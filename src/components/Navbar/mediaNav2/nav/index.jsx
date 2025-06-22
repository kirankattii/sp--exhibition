import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import styles from "./style.module.scss"
import { menuSlide } from "../anim"
import { Link } from "react-router-dom"
import Curve from "./Curve"
import Footer from "./Footer"

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About Us",
		href: "/about-us",
	},
	{
		title: "Gallery",
		href: "/gallary",
	},

	{
		title: "Contact Us",
		href: "/contact",
	},
]

const Nav = () => {
	const location = useLocation()
	const [selectedIndicator, setSelectedIndicator] = useState(location.pathname)

	useEffect(() => {
		setSelectedIndicator(location.pathname)
	}, [location.pathname])

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body}>
				<div
					onMouseLeave={() => {
						setSelectedIndicator(location.pathname)
					}}
					className={styles.nav}
				>
					<div className={styles.header}>
						<p>Navigation</p>
					</div>
					{navItems.map((data, index) => (
						<Link
							key={index}
							to={data.href}
							className={
								selectedIndicator === data.href ? styles.activeLink : ""
							}
							onClick={() => setSelectedIndicator(data.href)}
						>
							{data.title}
						</Link>
					))}
				</div>
				<Footer />
			</div>
			<Curve />
		</motion.div>
	)
}

export default Nav
