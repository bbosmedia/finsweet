import React from 'react'
import PrimaryButton from '@/components/ui/primary-button'

const HeroSection = () => {
	return (
		<header className='bg-darkBlue pb-8 pt-24 max-lsm:pt-[30px] max-md:pt-16 max-xlsm:pt-8'>
			<div className='max-w-[1320px] w-full px-5 mx-auto flex gap-5 items-center justify-between max-md:flex-col max-md:gap-[50px]'>
				<div className='max-w-[624px]'>
					<div className='h-6 w-6 bg-white/[0.06] mb-6'></div>
					<h2 className='font-semibold text-[56px] leading-[1.2] text-white mb-6 max-md:text-[42px] max-xlsm:text-[32px]'>
						Transform Your Idea Into Reality with Finsweet
					</h2>
					<p className='text-white/70 block mb-8 max-w-[528px]'>
						The entire Finsweet team knows what's good with Webflow and you can
						too with 1 week and a good attitude.
					</p>
					<PrimaryButton text='Request Quote' link='/'></PrimaryButton>
				</div>
				<img
					className='max-w-[563px] w-1/2 max-md:w-full'
					src='/images/header-img.webp'
					alt='Hero'
				/>
			</div>
			<div className='flex items-center gap-8 justify-between overflow-x-scroll mt-5 pb-2 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:w-0 max-w-[1320px] w-full px-5 mx-auto'>
				<div className='w-[187px] min-w-[187px]'>
					<span className='text-white/70 font-medium mb-[2px] text-[14px] leading-[20px] block'>
						Our Clients
					</span>
					<h3 className='text-white font-medium leading-[28px]'>
						We've Worked with
					</h3>
				</div>
				<img src='/images/logos/1.webp' alt='' width='186' height='105' />
				<img src='/images/logos/2.webp' alt='' width='187' height='106' />
				<img src='/images/logos/3.webp' alt='' width='187' height='105' />
				<img src='/images/logos/4.webp' alt='' width='186' height='104' />
				<img src='/images/logos/5.webp' alt='' width='187' height='105' />
			</div>
		</header>
	)
}

export default HeroSection
