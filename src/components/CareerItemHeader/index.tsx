import React from 'react'
import MainButton from '../MainButton'
import BtnShapeImg from '../../assets/images/btn-shape.png'

const CareerItemHeader = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] career-item-header'>
			<div className='max-w-[1320px] w-full px-5 mx-auto max-w-[1100px]'>
				<div className='grid grid-cols-2 gap-5 md:grid-cols-1'>
					<div className='left'>
						<h5 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>CAREER AT Ether</h5>
						<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px]'>Full Stack Developer</h2>
						<p className='section-text opacity-90 mb-10 max-w-[430px]'>
							Through True Rich Attended does no end it his mother since real
							had half every him case in packages.
						</p>
						<MainButton link='' text='Apply Now' />
					</div>
					<div className='bg-siteOrange relative p-20 flex flex-col gap-6 lsm:p-5 sm:gap-3'>
						<img className='absolute right-0 top-0 rotate-90 xlsm:hidden' src={BtnShapeImg} alt='' />
						<h5 className='font-semibold leading-9 text-[24px]'>Job Description</h5>
						<p>Remote, India , 4 to 5 Years Of Experience</p>
						<p>Department: Product Engineering</p>
						<p>Full Time 5 Position Available.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CareerItemHeader
