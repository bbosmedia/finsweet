import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Container from '@/components/ui/container'
import FormField from '@/components/ui/form-field'
import SubmitButton from '@/components/ui/submit-button'

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

const JobApplicationForm = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px]'>
			<Container>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-7 lsm:mb-4'>
					Apply Now
				</h2>
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
						// TODO: implement form submission
						void values
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<div className='grid grid-cols-2 gap-8 mb-8 md:grid-cols-1 lsm:gap-4 lsm:mb-4'>
								<FormField
									name='firstname'
									placeholder='First Name'
									error={errors.firstname}
									touched={touched.firstname}
								/>
								<FormField
									name='lastname'
									placeholder='Last Name'
									error={errors.lastname}
									touched={touched.lastname}
								/>
								<FormField
									name='email'
									placeholder='Email Id'
									error={errors.email}
									touched={touched.email}
								/>
								<FormField
									name='mobile'
									placeholder='Mobile No'
									error={errors.mobile}
									touched={touched.mobile}
								/>
							</div>
							<FormField
								as='textarea'
								name='message'
								rows={5}
								placeholder='Why do you thing you are good fit for Ether?'
								error={errors.message}
								touched={touched.message}
							/>
							<div className='flex gap-6 mt-8 lsm:mt-4'>
								<FormField
									type='checkbox'
									name='confirm'
									className='h-[36px] w-[36px]'
								/>
								<p className='max-w-[842px] text-[16px] leading-[24px]'>
									I agree to accept the privacy policy, We will add your contact
									details provided in this form to our system for contacting you
									regarding your request.
								</p>
							</div>
							<SubmitButton label='Submit Application' />
						</Form>
					)}
				</Formik>
			</Container>
		</section>
	)
}

export default JobApplicationForm
