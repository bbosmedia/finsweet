import React from 'react'
import Container from '@/components/ui/container'
import StatCard from '@/components/ui/stat-card'

const stats = [
	{ value: '1560+', label: 'Project Delivered' },
	{ value: '100+', label: 'Professional' },
	{ value: '950+', label: 'Happy Client' },
	{ value: '10yrs', label: 'Experience' }
]

const OurStory = () => {
	return (
		<section className='pt-24 lsm:pt-6'>
			<Container className='grid grid-cols-2 gap-5 md:grid-cols-1'>
				<div>
					<div className='h-7 w-7 bg-main mb-6'></div>
					<h4 className='font-medium [letter-spacing:3px] uppercase text-gray-500 mb-4'>
						Our Story 👇{' '}
					</h4>
					<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-6 max-w-[549px] lsm:mb-4'>
						From Startups to Titans of Industry
					</h2>
					<p className='max-w-[550px]'>
						Through True Rich Attended does no end it his mother since
						favourable real had half every him case in packages enquire we up
						ecstatic unsatiable saw his giving Remain expense of gay produce
						excited do an a china mean its so ye when in explained Hearts am
						next over match mr partiality not shoud latter thus as out no passed
						forming middleton exercise up
					</p>
				</div>
				<div className='bg-siteOrange/60 flex items-center justify-center p-5'>
					<div className='grid grid-cols-2 gap-[62px] lsm:grid-cols-1'>
						{stats.map(stat => (
							<StatCard
								key={stat.value}
								value={stat.value}
								label={stat.label}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default OurStory
