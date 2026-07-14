import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const NewsletterForm = () => {
	return (
		<section className='mt-24 max-md:mt-10 max-lsm:mt-4 max-lsm:mb-5'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='relative p-24 bg-[#5258E6] max-md:p-10 max-lsm:py-10 max-lsm:px-5'>
					<div className='absolute top-0 right-0 h-full w-[24px] bg-[linear-gradient(180deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)] max-lsm:hidden' />
					<img
						className='absolute top-0 left-0 max-md:hidden h-[99px]'
						src='/images/btn-shape-big.webp'
						alt=''
					/>
					<div className='flex flex-col gap-8 max-md:gap-6'>
						<div>
							<p className='font-medium [letter-spacing:3px] uppercase opacity-100 mb-3 text-white'>
								NEWSLETTER
							</p>
							<h3 className='font-semibold text-white max-w-[488px] text-[36px] leading-[54px] max-md:text-[28px] max-md:leading-[1.3] max-lsm:text-[22px] max-lsm:leading-[1.3]'>
								Subscribe our News Letter to get Latest Updates.
							</h3>
						</div>
						<form className='w-full flex'>
							<input
								className='border-none outline-none bg-white p-5 flex-1 min-w-0 text-[16px]'
								type='text'
								placeholder='Paresh@Pixeto.com'
							/>
							<button
								type='submit'
								className='bg-[#FFA155] px-6 flex items-center justify-center hover:bg-[#e6923d] transition-colors'
								aria-label='Subscribe'
							>
								<BsArrowRight className='text-white text-[20px]' />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NewsletterForm
