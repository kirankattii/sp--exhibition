import React, { memo } from "react"
import Marquee from "react-fast-marquee"
import { logos1, logos2, logos3, logos4 } from "../../assets/assets"
import styles from "./homeLogo.module.css"

// Optimized logo images with lazy loading and optional CDN usage
const logoSets = [
	{ direction: "right", logos: logos2 },
	// { direction: "left", logos: logos3 },
	// { direction: "right", logos: logos4 },
	// { direction: "left", logos: logos1 },
]

const HomeLogo = () => {
	return (
		<div className={styles.container}>
			{logoSets.map((set, index) => (
				<Marquee
					key={index}
					direction={set.direction}
				>
					<div className={styles.imgContainer}>
						{set.logos.map((img, imgIndex) => (
							<img
								key={imgIndex}
								src={img}
								alt="logo"
								loading="lazy"
								className={styles.img}
							/>
						))}
					</div>
				</Marquee>
			))}
		</div>
	)
}

// Use React.memo to prevent unnecessary re-renders
export default memo(HomeLogo)
