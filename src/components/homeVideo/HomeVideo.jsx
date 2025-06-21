import { useState, useRef } from "react"
import styles from "./homeVideo.module.css"
import { FaPlayCircle } from "react-icons/fa"
import { assets } from "../../assets/assets"

const HomeVideo = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const backgroundVideoRef = useRef(null)
	const popupVideoRef = useRef(null)

	const handlePlayClick = () => {
		if (backgroundVideoRef.current) {
			backgroundVideoRef.current.pause()
		}
		setIsPopupOpen(true)
	}

	const handleClosePopup = () => {
		if (backgroundVideoRef.current) {
			backgroundVideoRef.current.play()
		}
		setIsPopupOpen(false)
	}

	return (
		<div className={styles.container}>
			<video
				className={styles.video}
				muted
				loop
				autoPlay
				ref={backgroundVideoRef}
			>
				<source
					src={assets.mpsvideo}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className={styles.overlayText}>
				<h2>Exhibitions Booth designing and fabrication Experts</h2>
			</div>
			<FaPlayCircle
				className={styles.playIcon}
				onClick={handlePlayClick}
			/>

			{isPopupOpen && (
				<div
					className={styles.popup}
					onClick={handleClosePopup}
				>
					<video
						className={styles.popupVideo}
						controls
						autoPlay
						ref={popupVideoRef}
					>
						<source
							src={assets.mpsvideo}
							type="video/mp4"
						/>
					</video>
				</div>
			)}
		</div>
	)
}

export default HomeVideo
