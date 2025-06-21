import styles from "./contact.module.css"
import { assets } from "../../assets/assets"

const Contact = () => {
	return (
		<div className={styles.container}>
			<img
				src={assets.contactLanding}
				alt=""
				className={styles.ladingImg}
			/>
			<h1 className={styles.letsChart}>Let's chat.</h1>
			<div className={styles.contactus}>
				<img
					src={assets.contatbg}
					alt=""
				/>
				<div className={styles.formContainer}>
					<h1>Send a Message</h1>
					<form
						action=""
						className={styles.form}
					>
						<div>
							<label htmlFor="">Name</label>
							<input type="text" />
						</div>
						<div>
							<label htmlFor="">Email</label>
							<input type="text" />
						</div>{" "}
						<div>
							<label htmlFor="">Phone no</label>
							<input type="text" />
						</div>{" "}
						<div>
							<label htmlFor="">Message</label>
							<textarea
								name=""
								id=""
							/>
							<button>SEND</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
