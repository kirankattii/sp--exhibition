import styles from "./style.module.scss"

export default function index() {
	return (
		<div className={styles.footer}>
			<a href="https://www.facebook.com/spexhibitionservices/" target="_blank">Facebook</a>
			<a href="https://www.instagram.com/spexhibitionservices/" target="_blank">Instagram</a>
			{/* <a>Dribble</a> */}
			<a href="https://x.com/spexhibitionservices" target="_blank">Twitter</a>
		</div>
	)
}
