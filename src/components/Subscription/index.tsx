import React from 'react'
import BtnShapeBigImg from '../../assets/images/btn-shape-big.png'

const Subscription = () => {
	return (
		<section className='mt-24 md:mt-10 lsm:mt-4 lsm:p-0 lsm:mb-5'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='relative p-24 bg-[#666DFF] lsm:py-10 lsm:px-6'>
					<div className='absolute top-0 right-0 h-full w-[24px] bg-[linear-gradient(180deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)] lsm:hidden' />
					<img
						className='absolute top-0 left-0 lsm:hidden h-[99px]'
						src={BtnShapeBigImg}
						alt=''
					/>
					<div className='grid grid-cols-2 items-center justify-between md:grid-cols-1 md:gap-8'>
						<div>
							<p className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-3 text-white'>NEWSLETTER</p>
							<h3 className='font-semibold text-white max-w-[488px] text-[36px] leading-[54px] lsm:text-[24px] lsm:leading-[1.4]'>
								Subscribe our News Letter to get Latest Updates.
							</h3>
						</div>
						<form className='w-full'>
							<input
								className='border-none outline-none bg-white w-full p-5 max-w-[488px]'
								type='text'
								placeholder='Paresh@Pixeto.com'
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Subscription
