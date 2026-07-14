import React from 'react'
import Container from '@/components/ui/container'

const expertiseItems = [
	{
		icon: '/images/home-epertise/1.png',
		title: 'On Time Delivery',
		description:
			'Through True Rich Attended does no end it his mother since real had every him.'
	},
	{
		icon: '/images/home-epertise/2.png',
		title: 'Best Quality',
		description:
			'Through True Rich Attended does no end it his mother since real had every him.'
	},
	{
		icon: '/images/home-epertise/3.png',
		title: 'Support Assist',
		description:
			'Through True Rich Attended does no end it his mother since real had every him.'
	}
]

const ExpertiseSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-lightBlue'>
			<Container className='flex gap-[20px] justify-between md:flex-col md:gap-[30px]'>
				<div className='w-1/2 max-w-[624px] md:w-full'>
					<p className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>
						Our expertise
					</p>
					<h3 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-6'>
						We want to get local identification in every corner of the world in
						this era of global citizenship
					</h3>
					<p className='text-[#4B5563]'>
						Through True Rich Attended does no end it his mother since real had
						half every him case in packages enquire we up ecstatic unsatiable
						saw his giving Remain expense you position concluded.
					</p>
				</div>
				<div className='flex flex-col gap-3 relative w-1/2 max-w-[515px] md:w-full'>
					<div className='absolute -bottom-2 left-0 w-full h-2 bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]' />
					<div className='absolute -top-4 left-0 w-4 h-4 bg-main sm:hidden' />
					{expertiseItems.map(item => (
						<div
							key={item.title}
							className='bg-white flex p-8 gap-4 w-full sm:flex-col sm:items-center sm:text-center'
						>
							<img className='h-[47px] w-[47px]' src={item.icon} alt='Icon' />
							<div>
								<h5 className='font-semibold mb-2 text-[16px] leading-[28px]'>
									{item.title}
								</h5>
								<p className='font-medium w-full max-w-[303px] text-[14px] text-[#4B5563]'>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default ExpertiseSection
