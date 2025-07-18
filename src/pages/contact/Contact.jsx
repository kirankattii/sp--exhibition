import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";
import { assets } from "../../assets/assets";
import { initEmailJS, sendContactEmail, validateContactForm, testEmailTemplate } from "../../utils/emailService";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [countdown, setCountdown] = useState(4);

	// Initialize EmailJS on component mount
	useEffect(() => {
		initEmailJS();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ""
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		// Validate form
		const validation = validateContactForm(formData);
		if (!validation.isValid) {
			setErrors(validation.errors);
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const result = await sendContactEmail(formData);
			
			if (result.success) {
				setSubmitStatus({
					type: 'success',
					message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
				});
				// Reset form
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: ""
				});
				
				// Auto-hide success message after 4 seconds with countdown
				setCountdown(4);
				const countdownInterval = setInterval(() => {
					setCountdown(prev => {
						if (prev <= 1) {
							clearInterval(countdownInterval);
							setSubmitStatus(null);
							return 4;
						}
						return prev - 1;
					});
				}, 1000);
			} else {
				setSubmitStatus({
					type: 'error',
					message: result.message
				});
			}
		} catch (error) {
			setSubmitStatus({
				type: 'error',
				message: 'An unexpected error occurred. Please try again.'
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	// Test function to verify template
	const handleTestEmail = async () => {
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const result = await testEmailTemplate();
			
			if (result.success) {
				setSubmitStatus({
					type: 'success',
					message: 'Test email sent successfully! Check your email to verify all fields are working.'
				});
			} else {
				setSubmitStatus({
					type: 'error',
					message: 'Test email failed: ' + (result.message || 'Unknown error')
				});
			}
		} catch (error) {
			setSubmitStatus({
				type: 'error',
				message: 'Test email failed: ' + error.message
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className={styles.container}>
			<img
				src={assets.exhibitions32}
				alt=""
				className={styles.ladingImg}
			/>

			<div  style={{marginTop:"100px"}}>
					{/* Status Message */}
					{submitStatus && (
						<div   style={{
							padding: '15px',
							borderRadius: '8px',
							marginBottom: '20px',
							backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
							color: submitStatus.type === 'success' ? '#155724' : '#721c24',
							border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
						}}>
							{submitStatus.message}
						</div>
					)}
			<div className={styles.contactus}>
				<img
					src={assets.homeExhibition}
					alt=""
				/>
				<div className={styles.formContainer}>
					<h1>Send a Message</h1>
					
				

					<form onSubmit={handleSubmit} className={styles.form}>
						<div>
							<label htmlFor="name">Name *</label>
							<input 
								type="text" 
								id="name"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								className={errors.name ? styles.errorInput : ''}
							/>
							{errors.name && <span className={styles.errorText}>{errors.name}</span>}
						</div>
						
						<div>
							<label htmlFor="email">Email *</label>
							<input 
								type="email" 
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className={errors.email ? styles.errorInput : ''}
							/>
							{errors.email && <span className={styles.errorText}>{errors.email}</span>}
						</div>
						
						<div>
							<label htmlFor="phone">Phone Number *</label>
							<input 
								type="tel" 
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								className={errors.phone ? styles.errorInput : ''}
							/>
							{errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
						</div>
						
						<div>
							<label htmlFor="message">Message *</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								className={errors.message ? styles.errorInput : ''}
								rows="5"
							/>
							{errors.message && <span className={styles.errorText}>{errors.message}</span>}
						</div>
						
						<div style={{ display: 'flex', gap: '10px', width: '100%' }}>
							<button 
								type="submit" 
								disabled={isSubmitting}
								className={isSubmitting ? styles.submittingButton : ''}
								style={{ flex: 1 }}
							>
								{isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
							</button>
				
						</div>
					</form>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Contact;
