import React from 'react'
import ProcessCard from '@/components/cards/process-card'
import { processdata } from '@/data/process-data'

const ProcessSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<span className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>
					Our Process
				</span>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-4 max-w-[733px]'>
					The process we are working With Our client Worldwide
				</h2>
				<p className='max-w-[642px]'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable.
				</p>

				<div className='grid gap-12 grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-6 mt-[68px]'>
					{processdata.map((process, index) => (
						<ProcessCard
							key={process.order}
							order={process.order}
							img={process.img}
							title={process.title}
							text={process.text}
							isFirst={index === 0}
							isLast={index === processdata.length - 1}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProcessSection
