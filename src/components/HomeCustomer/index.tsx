import React from 'react'
import CustomerSlider from './CustomerSlider'
import HomeCustomers1 from '../../assets/images/home-customers/1.png'
import HomeCustomers2 from '../../assets/images/home-customers/2.png'
import HomeCustomers3 from '../../assets/images/home-customers/3.png'

const HomeCustomer = () => {
	return (
		<section className='home-customer py-24 max-[425px]:py-[30px] bg-lightGrey'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='grid gap-5 md:gap-7 md:grid-cols-1' style={{ gridTemplateColumns: '50% 50%' }}>
					<div className='content'>
					<div className='h-4 w-4 bg-main mb-4'></div>
					<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-4 max-w-[492px]'>Our customers love what we do</h2>
						<span className='font-medium mb-4 block text-[18px] leading-[28px]'>
							Transform your idea into reality with finsweet
						</span>
						<p className='mb-6 block max-w-[492px] text-darkBlue opacity-[0.87]'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.
						</p>
						<div className='flex gap-3 mb-3'>
							<img
								src={HomeCustomers1}
								alt='Customer'
							/>
							<img
								src={HomeCustomers2}
								alt='Customer'
							/>
							<img
								src={HomeCustomers3}
								alt='Customer'
							/>
						</div>
						<p className='font-medium text-[12px]'>
							<span className='text-[16px]'>30+</span> Customer Reviews
						</p>
					</div>
					<CustomerSlider></CustomerSlider>
				</div>
			</div>
		</section>
	)
}

export default HomeCustomer
