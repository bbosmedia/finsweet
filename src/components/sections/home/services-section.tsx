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
		<section className='py-24 max-[425px]:py-[30px] bg-siteOrange max-md:py-16 max-xlsm:py-10'>
			<Container>
				<SectionHeading
					subtitle='Our Service'
					title="We build software solutions that solve client's business challenges"
					className='max-w-[777px] mb-8 max-lsm:mb-5'
				/>
				<PrimaryButton text='Start Project' link='/' />
				<div className='grid gap-8 grid-cols-3 mt-20 max-md:grid-cols-1 max-md:gap-6 max-lsm:mt-7'>
					{services.map(service => (
						<div key={service.title} className='bg-white p-8'>
							<img className='mb-4 w-[47px]' src={service.icon} alt='' width='47' height='47' />
						<h3 className='font-semibold leading-[28px] mb-2'>{service.title}</h3>
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
