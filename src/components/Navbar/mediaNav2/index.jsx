// "use client"
// import styles from "./style.module.scss"
// import { useEffect, useState } from "react"
// import Nav from "./nav"
// import { AnimatePresence } from "framer-motion"
// import { usePathname } from "next/navigation"

// export default function MediaNav() {
// 	const [isActive, setIsActive] = useState(false)
// 	const pathname = usePathname()

// 	useEffect(() => {
// 		setIsActive(false)
// 	}, [pathname])

// 	return (
// 		<>
// 			<div className={styles.main}>
// 				<div className={styles.header}>
// 					<div
// 						onClick={() => {
// 							setIsActive(!isActive)
// 						}}
// 						className={styles.button}
// 					>
// 						<div
// 							className={`${styles.burger} ${
// 								isActive ? styles.burgerActive : ""
// 							}`}
// 						></div>
// 					</div>
// 				</div>
// 			</div>
// 			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
// 		</>
// 	)
// }

import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import styles from "./style.module.scss"
import Nav from "./nav/index"
export function MediaNav2() {
	const [isActive, setIsActive] = useState(false)
	const location = useLocation()

	useEffect(() => {
		setIsActive(false)
	}, [location.pathname])

	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<div
						onClick={() => {
							setIsActive(!isActive)
						}}
						className={styles.button}
					>
						<div
							className={`${styles.burger} ${
								isActive ? styles.burgerActive : ""
							}`}
						></div>
					</div>
				</div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	)
}
