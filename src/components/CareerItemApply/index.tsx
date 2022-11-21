import { ErrorMessage, Field, Form, Formik } from 'formik'
import './style.scss'
import React from 'react'
import * as Yup from 'yup'
import { BsArrowRight } from 'react-icons/bs'

const SignupSchema = Yup.object().shape({
	firstname: Yup.string()
		.min(2, 'Too Short!')
		.max(70, 'Too Long!')
		.required('Required'),
	lastname: Yup.string()
		.min(2, 'Too Short!')
		.max(70, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	mobile: Yup.string().required('Required'),
	message: Yup.string().required('Required')
})

const CareerItemApply = () => {
	return (
		<section className='section apply-now'>
			<div className='container'>
				<h2 className='section-title'>Apply Now</h2>
				<Formik
					initialValues={{
						firstname: '',
						lastname: '',
						email: '',
						mobile: '',
						message: ''
					}}
					validationSchema={SignupSchema}
					onSubmit={values => {
						// same shape as initial values
						console.log(values)
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<div className='input-groups'>
								<div className='controller'>
									<Field
										className='apply-now-input'
										name='firstname'
										placeholder='First Name'
									/>
									{errors.firstname && touched.firstname && (
										<p className='error'>{errors.firstname}</p>
									)}
								</div>

								<div className='controller'>
									<Field
										className='apply-now-input'
										name='lastname'
										placeholder='Last Name'
									/>
									{errors.lastname && touched.lastname && (
										<p className='error'>{errors.lastname}</p>
									)}
								</div>

								<div className='controller'>
									<Field
										className='apply-now-input'
										name='email'
										placeholder='Email Id'
									/>
									{errors.email && touched.email && (
										<p className='error'>{errors.email}</p>
									)}
								</div>

								<div className='controller'>
									<Field
										className='apply-now-input'
										name='mobile'
										placeholder='Mobile No'
									/>
									{errors.mobile && touched.mobile && (
										<p className='error'>{errors.mobile}</p>
									)}
								</div>
							</div>
							<Field
								as='textarea'
								className='apply-now-input'
								name='message'
								rows={5}
								placeholder='Why do you thing you are good fit for Ether?'
							/>
							{errors.message && touched.message && (
								<p className='error'>{errors.message}</p>
							)}
							<div className='checkbox'>
								<Field
									className='apply-now-input'
									type='checkbox'
									name='confirm'
								/>
								<p className='checkbox-text'>
									I agree to accept the privacy policy, We will add your contact
									details provided in this form to our system for contacting you
									regarding your request.
								</p>
							</div>
							<button className='bg-main px-8 py-5 relative text-white mt-14'>
								<img
									className='absolute top-0 left-0'
									src={require('../../assets/images/btn-shape.png')}
								/>
								<span className='flex items-center gap-3'>
									Submit Application <BsArrowRight />
								</span>
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</section>
	)
}

export default CareerItemApply
