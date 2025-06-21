import styles from "./style.module.scss"

export default function index() {
	return (
		<div className={styles.footer}>
			<a>Facebook</a>
			<a>Instagram</a>
			{/* <a>Dribble</a> */}
			<a>Twitter</a>
		</div>
	)
}
