import React from 'react'
import {
	BsFacebook,
	BsTwitter,
	BsInstagram,
	BsLinkedin,
	BsArrowRight
} from 'react-icons/bs'
import { Field, Form, Formik } from 'formik'

const ContactHero = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='grid grid-cols-[1.2fr_1fr] gap-5 md:grid-cols-1 md:gap-7'>
					<div>
						<div className='h-7 w-7 bg-siteOrange mb-6'></div>
						<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-6'>
							Have a Question ? <br /> Let's Get in Touch with us 👋
						</h2>
						<p className='text-gray-500 block mb-8 max-w-[719px]'>
							Fill up the Form and our team will get back to within 24 hrs
						</p>
						<Formik
							initialValues={{
								name: '',
								email: '',
								subject: '',
								message: ''
							}}
							onSubmit={values => {
								console.log(values)
							}}
						>
							{({ errors, touched }) => (
								<Form>
									<div className='gap-6 flex flex-col mt-16 lsm:mt-5 max-w-[405px]'>
										<div className='flex flex-col'>
											<label
												className='text-siteDark mb-2 text-[14px] leading-[20px]'
												htmlFor='name'
											>
												Name
											</label>
											<Field
												className='p-0 pb-2 outline-none border-0 border-b border-b-gray-300'
												name='name'
												placeholder='Name'
											/>
											{errors.name && touched.name && (
												<p className='text-red-500 mt-1 text-[14px]'>
													{errors.name}
												</p>
											)}
										</div>
										<div className='flex flex-col'>
											<label
												className='text-siteDark mb-2 text-[14px] leading-[20px]'
												htmlFor='email'
											>
												Email
											</label>
											<Field
												className='p-0 pb-2 outline-none border-0 border-b border-b-gray-300'
												name='email'
												placeholder='Email'
											/>
											{errors.email && touched.email && (
												<p className='text-red-500 mt-1 text-[14px]'>
													{errors.email}
												</p>
											)}
										</div>

										<div className='flex flex-col'>
											<label
												className='text-siteDark mb-2 text-[14px] leading-[20px]'
												htmlFor='subject'
											>
												Subject
											</label>
											<Field
												className='p-0 pb-2 outline-none border-0 border-b border-b-gray-300'
												name='subject'
												placeholder='Write your subject'
											/>
											{errors.subject && touched.subject && (
												<p className='text-red-500 mt-1 text-[14px]'>
													{errors.subject}
												</p>
											)}
										</div>
										<div className='flex flex-col'>
											<label
												className='text-siteDark mb-2 text-[14px] leading-[20px]'
												htmlFor='message'
											>
												Message
											</label>
											<Field
												as='textarea'
												className='p-0 pb-2 outline-none border-0 border-b border-b-gray-300'
												name='message'
												rows={3}
												placeholder='Type your Message'
											/>
											{errors.message && touched.message && (
												<p className='text-red-500 mt-1 text-[14px]'>
													{errors.message}
												</p>
											)}
										</div>
									</div>
									<button className='bg-main px-8 py-5 relative text-white mt-14'>
										<img
											className='absolute top-0 left-0'
											src='/images/btn-shape.png'
										/>
										<span className='flex items-center gap-3'>
											Send Message <BsArrowRight />
										</span>
									</button>
								</Form>
							)}
						</Formik>
					</div>
					<div className='bg-main/80 mt-6 ml-6 py-20 relative px-24 text-white lg:px-14 md:mt-0 md:ml-0 lsm:py-6 lsm:px-6'>
						<div className='bg-[linear-gradient(90deg,#FFD3AF_0%,#FFD3AF_25%,#8389FF_25%,#8389FF_55%,#FFA155_55%,#FFA155_100%)] -top-6 right-0 absolute h-6 w-[133px] md:hidden' />
						<div className='bg-[linear-gradient(180deg,#FFA155_0%,#FFA155_25%,#FFD3AF_25%,#FFD3AF_75%,#3A41DC_75%,#3A41DC_100%)] -left-6 bottom-0 absolute w-6 h-[186px] md:hidden' />
						<div className='w-full flex flex-col gap-6 lsm:gap-5 max-w-[280px]'>
							<div>
								<h5 className='text-white/70 text-[14px]'>Location</h5>
								<div className='w-full my-3 bg-white opacity-[0.08] h-px'></div>
								<h3 className='font-medium text-[18px] leading-[28px]'>
									DLF Cybercity, Bhubaneswar, India, &52050
								</h3>
							</div>
							<div>
								<h5 className='text-white/70 text-[14px]'>Working Hour</h5>
								<div className='w-full my-3 bg-white opacity-[0.08] h-px'></div>
								<h3 className='font-medium text-[18px] leading-[28px]'>
									Monday To Friday
								</h3>
								<h3 className='font-medium text-[18px] leading-[28px]'>
									9:00 AM to 8:00 PM
								</h3>
								<h5 className='text-white/70 text-[14px]'>
									Our Support Team is available 24Hrs
								</h5>
							</div>
							<div>
								<h5 className='text-white/70 text-[14px]'>Contact Us</h5>
								<div className='w-full my-3 bg-white opacity-[0.08] h-px'></div>
								<h3 className='font-medium text-[18px] leading-[28px]'>
									020 7993 2905
								</h3>
								<h5 className='text-white/70 text-[14px]'>Hello@ether.com</h5>
							</div>
							<div className='flex gap-6 mt-14 lsm:mt-6'>
								<a
									className='text-white/70 transition-[all] duration-[400ms] ease-in-out hover:text-white'
									href='#'
								>
									<BsFacebook />
								</a>
								<a
									className='text-white/70 transition-[all] duration-[400ms] ease-in-out hover:text-white'
									href='#'
								>
									<BsTwitter />
								</a>
								<a
									className='text-white/70 transition-[all] duration-[400ms] ease-in-out hover:text-white'
									href='#'
								>
									<BsInstagram />
								</a>
								<a
									className='text-white/70 transition-[all] duration-[400ms] ease-in-out hover:text-white'
									href='#'
								>
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

export default ContactHero
