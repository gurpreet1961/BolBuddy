import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'

const Result = () => {
	return(
		<p>Message sent Successfully! <br/>We will contact you soon</p>
	)
}

function Contact() {
	const [result, showResult] = useState(false);
	const [userData, setUserData] = useState({ name: "", email: "", subject: "", message: "" });

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_awy5553', 'template_s8i5csm', e.target, '3i_uUeIfH53kR550u')
			.then((result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			});
		 setUserData({name: "", email: "", subject: "", message: ""})
		 showResult(true);
	};
	setTimeout(() => {
		showResult(false);
	}, 8000);
	//Storing data in states
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [name]: value })
	}
	return (
		<>
			<div className="contacts">
				<div class="middle">
					<a class="ibtn" href="#">
						<i class="zmdi zmdi-github"></i>
					</a>
					<a class="ibtn" href="#">
						<i class="zmdi zmdi-twitter zmdi-hc-3x"></i>
					</a>
					<a class="ibtn" href="#">
						<i class="zmdi zmdi-linkedin"></i>
					</a>
					<a class="ibtn" href="#">
						<i class="zmdi zmdi-facebook"></i>
					</a>
					<a class="ibtn" href="#">
						<i class="zmdi zmdi-instagram"></i>
					</a>
				</div>
				<div className="outer-box">
					<div className="box">
						<form className="contact-content" onSubmit={sendEmail}>
							<h1 id="say-hello">Contact Us</h1>
							<div className="name">
								<input className="fld" placeholder="Name" type="text" id="name" name="name" value={userData.name} onChange={handleInput} />
							</div>
							<div className="email">
								<input className="fld" placeholder="Email" id="email" name="email" type="email" value={userData.email} onChange={handleInput} />
							</div>
							<div className="subject">
								<input className="fld" placeholder="Subject" id="subject" name="subject" type="text" value={userData.subject} onChange={handleInput} />
							</div>
							<div className="messageDiv">
								<textarea name="message" className="message" id="message" cols="50" rows="6" placeholder="Message"
									value={userData.message} onChange={handleInput} required="true"></textarea>
							</div>
							<button className="button" type="submit">Send</button>
							<div className="row">
								{result ? <Result/> : null}
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
