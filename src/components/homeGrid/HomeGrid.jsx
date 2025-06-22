import styles from "./homeGrid.module.css"
import { assets } from "../../assets/assets"

const homeGrid = () => {
	return (
		<div className={styles.container} style={{marginBottom:"100px"}}>
			<h1>Our Projects</h1>
			<div className={styles.imageContainer}>
				<div className={styles.rightImgContainer}>
					<div style={{marginTop:"20px"}}>
						<img
							src={assets.exhibitionDesign2}
							alt=""
						/>
						{/* <div className={styles.hovereffect}>
							<h2>Jewelry exhibition</h2>
						</div> */}
					</div>
					<div style={{marginTop:"20px"}}>
						<img
							src={assets.exhibitionDesign}
							alt=""
						/>
						{/* <div className={styles.hovereffect}>
							<h2>Residential Projects</h2>
						</div> */}
					</div>
				</div>
				<div className={styles.rightImgContainer}>
					<div style={{marginTop:"20px"}}>
						<img
							src={assets.exhibition59}
							alt=""
						/>
						{/* <div className={styles.hovereffect}>
							<h2>Commercial Projects</h2>
						</div> */}
					</div>
					<div style={{marginTop:"20px"}}>
						<img
							src={assets.exhibitions33}
							alt=""
						/>
						{/* <div className={styles.hovereffect}>
							<h2>Exhibitions</h2>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default homeGrid
