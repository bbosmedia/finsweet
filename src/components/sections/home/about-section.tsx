import React from 'react'
import Container from '@/components/ui/container'
import ReadMoreLink from '@/components/ui/read-more-link'
import StatCard from '@/components/ui/stat-card'

const stats = [
	{ value: '1560+', label: 'Project Delivered' },
	{ value: '100+', label: 'Professional' },
	{ value: '950+', label: 'Happy Client' },
	{ value: '10yrs', label: 'Experience' }
]

const AboutSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] max-md:py-16 max-xlsm:py-10 pt-[120px] max-md:pt-[80px] max-xlsm:pt-[60px]'>
			<Container>
				<h3 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>
					About Us
				</h3>
				<div className='flex gap-5 justify-between max-md:flex-col'>
					<h3 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-md:text-[36px] max-lsm:text-[28px] max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[640px]'>
						The company leads entire webdesign process from concept to delivery.
					</h3>
					<div className='max-w-[547px]'>
						<h4 className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3]'>
							The Era Of Technology.
						</h4>
						<p>
							Through True Rich Attended does no end it his mother since real
							had half every him case in packages enquire we up ecstatic
							unsatiable saw his giving Remain expense you position concluded.
						</p>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-3 pr-4 mt-12 relative max-md:grid-cols-1 max-md:pr-0 max-md:mt-5'>
					<img
						className='w-full object-cover h-[400px]'
						src='/images/home-about/1.webp'
						alt=''
					/>
					<img
						className='w-full object-cover h-[400px]'
						src='/images/home-about/2.webp'
						alt=''
					/>
					<img
						className='w-full object-cover h-[400px]'
						src='/images/home-about/3.webp'
						alt=''
					/>
					<div className='absolute right-0 top-0 h-full w-[18px] bg-[linear-gradient(180deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)] z-[-1] max-md:hidden' />
				</div>
				<div className='flex justify-between items-center mt-12 gap-5 max-md:flex-col max-md:items-start'>
					<div className='flex items-center max-w-[634px] justify-between w-full gap-3 max-lsm:grid max-lsm:grid-cols-2 max-lsm:gap-4 max-[900px]:flex-wrap'>
						{stats.map(stat => (
							<StatCard
								key={stat.value}
								value={stat.value}
								label={stat.label}
							/>
						))}
					</div>
					<div>
						<ReadMoreLink to='/' className='gap-2'>
							<span className='text-main'>Read about us</span>
						</ReadMoreLink>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default AboutSection
