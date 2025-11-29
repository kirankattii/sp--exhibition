
import React, { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import styles from "./style.module.scss"
import Nav from "./nav/index"
export function MediaNav2() {
	const [isActive, setIsActive] = useState(false)
	const location = useLocation()
	const buttonRef = useRef(null)

	useEffect(() => {
		setIsActive(false)
	}, [location.pathname])

	return (
		<>
			<div className={styles.main}  >
				<div className={styles.header}>
					<div
						ref={buttonRef}
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
			<AnimatePresence mode="wait">{isActive && <Nav setIsActive={setIsActive} buttonRef={buttonRef} />}</AnimatePresence>
		</>
	)
}
