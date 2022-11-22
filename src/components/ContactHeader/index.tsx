import React from 'react'
import './style.scss'
import {
	BsFacebook,
	BsTwitter,
	BsInstagram,
	BsLinkedin,
	BsArrowRight
} from 'react-icons/bs'
import { Field, Form, Formik } from 'formik'

const ContactHeader = () => {
	return (
		<header className='contact-header section'>
			<div className='container'>
				<div className='contact-header-inner'>
					<div className='left'>
						<div className='orange-box'></div>
						<h2 className='section-title'>
							Have a Question ? <br /> Let’s Get in Touch with us 👋
						</h2>
						<p className='section-text'>
							Fill up the Form and ou team will get back to within 24 hrs
						</p>
						<Formik
							initialValues={{
								name: '',
								email: '',
								subject: '',
								message: ''
							}}
							onSubmit={values => {
								// same shape as initial values
								console.log(values)
							}}
						>
							{({ errors, touched }) => (
								<Form>
									<div className='contact-input-groups'>
										<div className='controller'>
											<label htmlFor='name'>Name</label>
											<Field
												className='contact-header-input'
												name='name'
												placeholder='Name'
											/>
											{errors.name && touched.name && (
												<p className='error'>{errors.name}</p>
											)}
										</div>
										<div className='controller'>
											<label htmlFor='email'>Email</label>
											<Field
												className='contact-header-input'
												name='email'
												placeholder='Email'
											/>
											{errors.email && touched.email && (
												<p className='error'>{errors.email}</p>
											)}
										</div>

										<div className='controller'>
											<label htmlFor='subject'>Subject</label>
											<Field
												className='contact-header-input'
												name='subject'
												placeholder='Write your subject'
											/>
											{errors.subject && touched.subject && (
												<p className='error'>{errors.subject}</p>
											)}
										</div>
										<div className='controller'>
											<label htmlFor='message'>Message</label>
											<Field
												as='textarea'
												className='contact-header-input'
												name='message'
												rows={3}
												placeholder='Type your Messege'
											/>
											{errors.message && touched.message && (
												<p className='error'>{errors.message}</p>
											)}
										</div>
									</div>
									<button className='bg-main px-8 py-5 relative text-white mt-14'>
										<img
											className='absolute top-0 left-0'
											src={require('../../assets/images/btn-shape.png')}
										/>
										<span className='flex items-center gap-3'>
											Send Messege <BsArrowRight />
										</span>
									</button>
								</Form>
							)}
						</Formik>
					</div>
					<div className='right'>
						<div className='content'>
							<div className='card'>
								<h5 className='name'>Location</h5>
								<div className='line'></div>
								<h3>DLF Cybercity, Bhubaneswar, India, &52050</h3>
							</div>
							<div className='card'>
								<h5 className='name'>Working Hour</h5>
								<div className='line'></div>
								<h3>Monday To Friday</h3>
								<h3>9:00 AM to 8:00 PM</h3>
								<h5>Our Support Team is available 24Hrs</h5>
							</div>
							<div className='card'>
								<h5 className='name'>Contact Us</h5>
								<div className='line'></div>
								<h3>020 7993 2905</h3>
								<h5>Hello@ether.com</h5>
							</div>
							<div className='socials'>
								<a href='#'>
									<BsFacebook />
								</a>
								<a href='#'>
									<BsTwitter />
								</a>
								<a href='#'>
									<BsInstagram />
								</a>
								<a href='#'>
									<BsLinkedin />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default ContactHeader
