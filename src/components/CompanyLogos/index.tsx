import React from 'react'
import BlackLogos1 from '../../assets/images/black-logos/1.png'
import BlackLogos2 from '../../assets/images/black-logos/2.png'
import BlackLogos3 from '../../assets/images/black-logos/3.png'
import BlackLogos4 from '../../assets/images/black-logos/4.png'
import BlackLogos5 from '../../assets/images/black-logos/5.png'

const CompanyLogos = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px]'>
			<div className='bg-lightGrey flex items-center justify-between px-16 gap-8 overflow-x-scroll [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:w-0 lsm:px-6'>
				<img className='h-[104px] w-[186px]' src={BlackLogos1} alt='' />
				<img className='h-[104px] w-[186px]' src={BlackLogos2} alt='' />
				<img className='h-[104px] w-[186px]' src={BlackLogos3} alt='' />
				<img className='h-[104px] w-[186px]' src={BlackLogos4} alt='' />
				<img className='h-[104px] w-[186px]' src={BlackLogos5} alt='' />
			</div>
		</section>
	)
}

export default CompanyLogos
