import React from 'react'

const TestimonialCard = () => {
	return (
		<div className='bg-white p-10 lsm:p-4 relative'>
			<div className='absolute top-0 -left-2 w-4 h-full bg-[linear-gradient(180deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)] lsm:hidden' />
			<img
				className='absolute -top-4 right-6'
				src='/images/quote.png'
				alt='Quote'
			/>
			<h4 className='font-semibold opacity-90 max-w-[490px] mb-6 text-darkBlue text-[18px] lsm:text-[18px] md:text-[24px] leading-[1.4] md:leading-[36px]'>
				Finsweet has been a wonderful partner to work with. I have been a
				customer now for the past few months now and I have had nothing but
				positive experiences!
			</h4>
			<div className='flex justify-between lsm:flex-col lsm:gap-3 lsm:items-start'>
				<div className='flex items-center'>
					<img
						className='w-[38px] h-[38px] mr-4'
						src='/images/home-customers/1.png'
						alt='Man'
					/>
					<aside>
						<h6 className='font-semibold opacity-90'>Johnny Andro</h6>
						<p className='font-medium text-gray-500 text-[14px] leading-[20px]'>
							Director, Company
						</p>
					</aside>
				</div>
				<img
					className='h-[25px] w-auto object-contain'
					src='/images/logos/1.png'
					alt='Logo'
				/>
			</div>
		</div>
	)
}

export default TestimonialCard
