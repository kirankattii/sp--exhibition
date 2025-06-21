import styles from "./landingPage.module.css"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<img
				className={styles.destop}
				src={assets.homeLandingimage}
				alt=""
			/>{" "}
			<img
				className={styles.mobile}
				src={assets.exhibitions19}
				alt=""
			/>
			<div className={styles.overlay}></div>{" "}
			{/* Add this div for the overlay */}
			<div className={styles.LandingContent}>
				<h1>SP Exhibition Services LLP</h1>
				<button onClick={() => navigate("/gallary")}>View More</button>
			</div>
		</div>
	)
}

export default LandingPage
