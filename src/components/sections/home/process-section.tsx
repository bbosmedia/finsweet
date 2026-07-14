import React from 'react'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import ProcessCard from '@/components/cards/process-card'
import { processdata } from '@/data/process-data'

const ProcessSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px]'>
			<Container>
				<SectionHeading
					subtitle='Our Process'
					title='The process we are working With Our client Worldwide'
					className='mb-4 max-w-[733px]'
				/>
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
			</Container>
		</section>
	)
}

export default ProcessSection
