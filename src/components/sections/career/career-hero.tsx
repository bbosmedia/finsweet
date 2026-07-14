import React from 'react'

const CareerHero = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto text-center flex flex-col items-center relative'>
				<img
					className='absolute right-5 top-0 rotate-90  md:hidden'
					src='/images/btn-shape.webp'
					alt=''
				/>
				<h5 className='font-medium [letter-spacing:3px] uppercase text-gray-500 mb-4'>
					CAREER AT FINSWEET
				</h5>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[624px]'>
					We hired people who are Always Passionate about what they do
				</h2>
				<p className='max-w-[624px] block mt-6'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable saw
					.
				</p>
				<img
					className='my-16 w-full md:my-10 sm:my-6 xsm:my-4'
					src='/images/careers.webp'
					alt=''
				/>
				<p className='block mb-4 font-medium'>See Our open positions</p>
				<p className='block text-[24px] font-medium'>👇</p>
			</div>
		</header>
	)
}

export default CareerHero
