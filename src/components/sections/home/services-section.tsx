import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PrimaryButton from '@/components/ui/primary-button'

const ServicesSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-siteOrange'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<span className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>Our Service</span>
				<h3 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[777px]'>
					We build software solutions that solve client's business challenges
				</h3>
				<PrimaryButton text='Start Project' link='/' />
				<div className='grid gap-8 grid-cols-3 mt-20 md:grid-cols-1 lsm:mt-7'>
					<div className='bg-white p-8'>
						<img
							className='mb-4 w-[47px]'
							src="/images/home-services/1.png"
							alt=''
						/>
						<h5 className='font-semibold leading-[28px]'>Technical support</h5>
						<p className='mb-6 leading-[24px] text-[#4B5563]'>
							We aim to attain the greatest satisfaction for our clients and be
							one of the prominent names when it comes to world-class service
						</p>
						<Link className='flex items-center gap-3 text-main' to='/'>
							Read More <BsArrowRight />
						</Link>
					</div>
					<div className='bg-white p-8'>
						<img
							className='mb-4 w-[47px]'
							src="/images/home-services/2.png"
							alt=''
						/>
						<h5 className='font-semibold leading-[28px]'>Testing Management</h5>
						<p className='mb-6 leading-[24px] text-[#4B5563]'>
							We aim to attain the greatest satisfaction for our clients and be
							one of the prominent names when it comes to world-class service
						</p>
						<Link className='flex items-center gap-3 text-main' to='/'>
							Read More <BsArrowRight />
						</Link>
					</div>
					<div className='bg-white p-8'>
						<img
							className='mb-4 w-[47px]'
							src="/images/home-services/3.png"
							alt=''
						/>
						<h5 className='font-semibold leading-[28px]'>Development</h5>
						<p className='mb-6 leading-[24px] text-[#4B5563]'>
							We aim to attain the greatest satisfaction for our clients and be
							one of the prominent names when it comes to world-class service
						</p>
						<Link className='flex items-center gap-3 text-main' to='/'>
							Read More <BsArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
