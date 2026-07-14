import React from 'react'
import { companyCulture } from '@/data/culture-data'

const CultureSection = () => {
	return (
		<section className='bg-lightGrey py-24 max-[425px]:py-[30px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<h5 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>OUR WORK & CULTURE</h5>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[754px]'>
					Come and join a team of highly skilled professionals.
				</h2>
				<p className='text-gray-500 mt-6 xlsm:mt-4 max-w-[622px]'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable saw
					his giving Remain expense you position concluded.
				</p>

				<div className='mt-16 grid grid-cols-3 gap-3 md:mt-6 md:grid-cols-2 xlsm:grid-cols-1'>
					{companyCulture.map((item, index) => (
						<div key={index} className='bg-white p-8'>
							<img className='mb-2 h-[40px]' src={item.img} alt={item.title} />
							<h6 className='font-semibold mb-2 leading-7 text-[16px]'>{item.title}</h6>
							<p className='text-gray-500 text-[14px]'>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CultureSection
