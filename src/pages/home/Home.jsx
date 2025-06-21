
import React, { lazy, Suspense } from "react"
import styles from "./home.module.css"
import LandingPage from "../../components/landingPage/LandingPage"
import { assets } from "../../assets/assets"
import HomeVideo from "../../components/homeVideo/HomeVideo"
import HomeGrid from "../../components/homeGrid/HomeGrid"

// Lazy load HomeLogo component
const HomeLogo = lazy(() => import("../../components/homeLogo/HomeLogo"))

const Home = () => {
	return (
		<div>
			<LandingPage />
			<div className={styles.beautifulDesign}>
				<div className={styles.beautifulText}>
					<h3>Created</h3>
					<h1>Beautiful</h1>
					<h3>Designs</h3>
				</div>
				<div className={styles.beautifulImages}>
					{/* <div className={styles.beautifulImagesLeft}>
						<div className={styles.homeImage1}>
							<img
								src={assets.homeImg10}
								alt=""
							/>
							<div className={styles.imgborder1}></div>
						</div>
					</div> */}
					<div className={styles.beautifulImagesRight}>
						<div className={styles.homeImage2}>
							<img
								src={assets.homeImg10}
								alt=""
							/>
							<div className={styles.imgborder2}></div>
						</div>
						<div className={styles.homeImage3}>
							<img
								src={assets.homeExhibition}
								alt=""
							/>
							<div className={styles.imgborder3}></div>
						</div>
					</div>
					<div className={styles.beautifulImagesRight}>
						<div className={styles.homeImage2}>
							<img
								src={assets.homeExhibition}
								alt=""
							/>
							<div className={styles.imgborder2}></div>
						</div>
						<div className={styles.homeImage3}>
							<img
								src={assets.homeImg11}
								alt=""
							/>
							<div className={styles.imgborder3}></div>
						</div>
					</div>
				</div>
			</div>
			<HomeVideo />
			<div className={styles.logoContainer}>
				<h1>
					Our Esteemed <span>Clients</span>
				</h1>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<HomeLogo />
			</Suspense>
			<HomeGrid />
			{/* <Gallery /> */}
		</div>
	)
}

export default Home
