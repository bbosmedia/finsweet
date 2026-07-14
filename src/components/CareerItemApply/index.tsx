import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { BsArrowRight } from 'react-icons/bs'
import BtnShapeImg from '../../assets/images/btn-shape.png'

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
		<section className='py-24 max-[425px]:py-[30px] apply-now'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-7 lsm:mb-4'>Apply Now</h2>
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
							<div className='grid grid-cols-2 gap-8 mb-8 md:grid-cols-1 lsm:gap-4 lsm:mb-4'>
								<div className='controller'>
									<Field
										className='py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block lsm:py-2 lsm:px-3 lsm:font-normal placeholder:text-siteDark placeholder:opacity-80'
										name='firstname'
										placeholder='First Name'
									/>
									{errors.firstname && touched.firstname && (
										<p className='text-red-500 font-medium mt-1'>{errors.firstname}</p>
									)}
								</div>

								<div className='controller'>
									<Field
										className='py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block lsm:py-2 lsm:px-3 lsm:font-normal placeholder:text-siteDark placeholder:opacity-80'
										name='lastname'
										placeholder='Last Name'
									/>
									{errors.lastname && touched.lastname && (
										<p className='text-red-500 font-medium mt-1'>{errors.lastname}</p>
									)}
								</div>

								<div className='controller'>
									<Field
										className='py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block lsm:py-2 lsm:px-3 lsm:font-normal placeholder:text-siteDark placeholder:opacity-80'
										name='email'
										placeholder='Email Id'
									/>
									{errors.email && touched.email && (
										<p className='text-red-500 font-medium mt-1'>{errors.email}</p>
									)}
								</div>

								<div className='controller'>
									<Field
										className='py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block lsm:py-2 lsm:px-3 lsm:font-normal placeholder:text-siteDark placeholder:opacity-80'
										name='mobile'
										placeholder='Mobile No'
									/>
									{errors.mobile && touched.mobile && (
										<p className='text-red-500 font-medium mt-1'>{errors.mobile}</p>
									)}
								</div>
							</div>
							<Field
								as='textarea'
								className='py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block lsm:py-2 lsm:px-3 lsm:font-normal placeholder:text-siteDark placeholder:opacity-80'
								name='message'
								rows={5}
								placeholder='Why do you thing you are good fit for Ether?'
							/>
							{errors.message && touched.message && (
								<p className='text-red-500 font-medium mt-1'>{errors.message}</p>
							)}
							<div className='flex gap-6 mt-8 lsm:mt-4'>
								<Field
									className='py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block lsm:py-2 lsm:px-3 lsm:font-normal placeholder:text-siteDark placeholder:opacity-80 h-[36px] w-[36px]'
									type='checkbox'
									name='confirm'
								/>
								<p className='max-w-[842px] text-[16px] leading-[24px]'>
									I agree to accept the privacy policy, We will add your contact
									details provided in this form to our system for contacting you
									regarding your request.
								</p>
							</div>
							<button className='bg-main px-8 py-5 relative text-white mt-14'>
								<img
									className='absolute top-0 left-0'
									src={BtnShapeImg}
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
