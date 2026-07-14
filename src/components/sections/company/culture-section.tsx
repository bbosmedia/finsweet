import React from 'react'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { companyCulture } from '@/data/culture-data'

const CultureSection = () => {
	return (
		<section className='bg-lightGrey py-24 max-[425px]:py-[30px] max-md:py-16 max-xlsm:py-10'>
			<Container>
				<SectionHeading
					subtitle='OUR WORK & CULTURE'
					title='Come and join a team of highly skilled professionals.'
					className='max-w-[754px]'
				/>
				<p className='text-gray-500 mt-6 max-xlsm:mt-4 max-w-[622px]'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable saw
					his giving Remain expense you position concluded.
				</p>

				<div className='mt-16 grid grid-cols-3 gap-3 max-md:mt-6 max-md:grid-cols-2 max-xlsm:grid-cols-1'>
					{companyCulture.map((item, index) => (
						<div key={index} className='bg-white p-8 max-lsm:p-5'>
							<img className='mb-2 h-[40px]' src={item.img} alt={item.title} width='41' height='40' />
							<h6 className='font-semibold mb-2 leading-7 text-[16px]'>
								{item.title}
							</h6>
							<p className='text-gray-500 text-[14px]'>{item.text}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default CultureSection
