import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import HomeAbout1 from '../../assets/images/home-about/1.jpg'
import HomeAbout2 from '../../assets/images/home-about/2.jpg'
import HomeAbout3 from '../../assets/images/home-about/3.jpg'

const HomeAbout = () => {
	return (
		<section className='home-about py-24 max-[425px]:py-[30px] pt-[120px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<h5 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>About Us</h5>
				<div className='flex gap-5 justify-between md:flex-col'>
					<h3 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[640px]'>
						The company leads entire webdesign process from concept to delivery.
					</h3>
					<div className='max-w-[547px]'>
						<h4 className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3]'>The Era Of Technology.</h4>
						<p>
							Through True Rich Attended does no end it his mother since real
							had half every him case in packages enquire we up ecstatic
							unsatiable saw his giving Remain expense you position concluded.
						</p>
					</div>
				</div>
			<div className='grid grid-cols-3 gap-3 pr-4 mt-12 relative md:grid-cols-1 md:pr-0 md:mt-5'>
				<img className='w-full object-cover h-[400px]' src={HomeAbout1} alt='' />
				<img className='w-full object-cover h-[400px]' src={HomeAbout2} alt='' />
				<img className='w-full object-cover h-[400px]' src={HomeAbout3} alt='' />
				<div className='absolute right-0 top-0 h-full w-[18px] bg-[linear-gradient(180deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)] z-[-1] md:hidden' />
			</div>
				<div className='flex justify-between items-center mt-12 gap-5 md:flex-col'>
					<div className='flex items-center max-w-[634px] justify-between w-full gap-3 lsm:grid lsm:grid-cols-2 max-[900px]:flex-wrap'>
						<div className='card'>
						<h3 className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3] mb-2'>1560+</h3>
						<div className='mb-1 w-[72px] h-[6px] bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'></div>
							<p className='font-normal text-[16px] leading-[24px]'>Project Delivered</p>
						</div>
						<div className='card'>
						<h3 className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3] mb-2'>100+</h3>
						<div className='mb-1 w-[72px] h-[6px] bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'></div>
							<p className='font-normal text-[16px] leading-[24px]'>Professional</p>
						</div>
						<div className='card'>
						<h3 className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3] mb-2'>950+</h3>
						<div className='mb-1 w-[72px] h-[6px] bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'></div>
							<p className='font-normal text-[16px] leading-[24px]'>Happy Client</p>
						</div>
						<div className='card'>
						<h3 className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3] mb-2'>10yrs</h3>
						<div className='mb-1 w-[72px] h-[6px] bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'></div>
							<p className='font-normal text-[16px] leading-[24px]'>Experience</p>
						</div>
					</div>
					<div>
						<Link className='flex items-center gap-2' to='/'>
							<span className='text-main'>Read about us</span> <BsArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
