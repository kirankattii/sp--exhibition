import React, { useState, useEffect, useRef } from "react"
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

const Nav = ({ setIsActive, buttonRef }) => {
	const location = useLocation()
	const [selectedIndicator, setSelectedIndicator] = useState(location.pathname)
	const menuRef = useRef(null)

	useEffect(() => {
		setSelectedIndicator(location.pathname)
	}, [location.pathname])

	// Handle outside click to close menu
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				menuRef.current && 
				!menuRef.current.contains(event.target) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target)
			) {
				setIsActive(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [setIsActive, buttonRef])

	const handleLinkClick = (href) => {
		setSelectedIndicator(href)
		// If clicking a menu item and already on that page, close menu
		if (href === location.pathname) {
			setIsActive(false)
		}
	}

	return (
		<motion.div
			ref={menuRef}
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body} style={{marginTop:"-60px"}}>
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
							onClick={() => handleLinkClick(data.href)}
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
