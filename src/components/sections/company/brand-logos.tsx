import React from 'react'

const BrandLogos = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px]'>
			<div className='bg-lightGrey flex items-center justify-between px-16 gap-8 overflow-x-scroll [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:w-0 lsm:px-6'>
				<img
					className='h-[104px] w-[186px]'
					src='/images/black-logos/1.webp'
					alt=''
				/>
				<img
					className='h-[104px] w-[186px]'
					src='/images/black-logos/2.webp'
					alt=''
				/>
				<img
					className='h-[104px] w-[186px]'
					src='/images/black-logos/3.webp'
					alt=''
				/>
				<img
					className='h-[104px] w-[186px]'
					src='/images/black-logos/4.webp'
					alt=''
				/>
				<img
					className='h-[104px] w-[186px]'
					src='/images/black-logos/5.webp'
					alt=''
				/>
			</div>
		</section>
	)
}

export default BrandLogos
