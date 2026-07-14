import React from 'react'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import PrimaryButton from '@/components/ui/primary-button'
import ReadMoreLink from '@/components/ui/read-more-link'

const services = [
	{
		icon: '/images/home-services/1.webp',
		title: 'Technical support',
		description:
			'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service'
	},
	{
		icon: '/images/home-services/2.webp',
		title: 'Testing Management',
		description:
			'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service'
	},
	{
		icon: '/images/home-services/3.webp',
		title: 'Development',
		description:
			'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service'
	}
]

const ServicesSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-siteOrange'>
			<Container>
				<SectionHeading
					subtitle='Our Service'
					title="We build software solutions that solve client's business challenges"
					className='max-w-[777px]'
				/>
				<PrimaryButton text='Start Project' link='/' />
				<div className='grid gap-8 grid-cols-3 mt-20 md:grid-cols-1 lsm:mt-7'>
					{services.map(service => (
						<div key={service.title} className='bg-white p-8'>
							<img className='mb-4 w-[47px]' src={service.icon} alt='' />
							<h5 className='font-semibold leading-[28px]'>{service.title}</h5>
							<p className='mb-6 leading-[24px] text-[#4B5563]'>
								{service.description}
							</p>
							<ReadMoreLink />
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default ServicesSection
