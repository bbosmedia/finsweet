import React from 'react'

const CompanyHero = () => {
	return (
		<header className='pt-24 max-lsm:pt-10 max-md:pt-16 max-xlsm:pt-8'>
			<div className='max-w-[1320px] w-full px-5 mx-auto relative'>
			<img
				className='absolute right-5 top-0 rotate-90 max-lsm:hidden'
				src='/images/btn-shape.webp'
				srcSet='/images/btn-shape@2x.webp 2x'
				alt=''
			/>
				<div className='h-7 w-7 bg-siteOrange mb-6'></div>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-md:text-[36px] max-lsm:text-[28px] max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[664px]'>
					Award-winning Company seen and used by millions around the world.
				</h2>
				<p className='mt-6 mb-16 max-lsm:mb-6 max-w-[719px]'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The Maker is a
					decentralized.
				</p>
			</div>
			<div className='max-w-[1320px] w-full px-5 mx-auto relative grid grid-cols-3 gap-3 max-lsm:grid-cols-1 max-lsm:gap-5'>
				<div className='bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)] w-full absolute -top-6 right-5 h-6 max-w-[346px] max-lsm:hidden' />
				<img className='w-full' src='/images/home-about/1.webp' alt='' width='418' height='446' />
				<img className='w-full' src='/images/home-about/2.webp' alt='' width='419' height='446' />
				<img className='w-full' src='/images/home-about/3.webp' alt='' width='403' height='446' />
			</div>
		</header>
	)
}

export default CompanyHero
