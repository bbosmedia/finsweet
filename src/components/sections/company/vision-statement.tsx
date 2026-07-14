import React from 'react'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'

const VisionStatement = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px]'>
			<Container>
				<SectionHeading
					subtitle='Our Vision'
					title='We want to get local identification in every corner of the world in this era of global citizenship.'
					className='max-w-[701px]'
				/>
				<p className='text-gray-500 mt-6 mb-16 block lsm:mb-6 max-w-[622px]'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable saw
					his giving Remain expense you position concluded.
				</p>
				<img
					className='w-full object-cover min-h-[200px]'
					src='/images/company-vision.png'
					alt=''
				/>
			</Container>
		</section>
	)
}

export default VisionStatement
