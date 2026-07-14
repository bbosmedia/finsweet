import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import PrimaryButton from '@/components/ui/primary-button'
import { serviceHeaderLinks } from '@/data/services-hero-data'

const ServicesHero = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px] bg-siteOrange max-md:py-16 max-xlsm:py-10'>
		<Container
			className='grid grid-cols-[1.2fr_1fr] max-md:grid-cols-1 max-md:gap-6'
		>
				<div>
					<SectionHeading
						subtitle='Our Services'
						title='We Build Software Solutionthat Solve Clients Business Challenges'
						className='mb-6 max-lsm:mb-4'
					/>
					<p className='text-gray-500 block my-6 max-w-[624px]'>
						Through True Rich Attended does no end it his mother since
						favourable real had half every him case in packages enquire we up
						ecstatic.
					</p>
					<PrimaryButton link='/' text='Request A Quote' />
				</div>
				<div className='flex items-center justify-center max-[475px]:justify-start'>
					<ul className='flex flex-col gap-4'>
						{serviceHeaderLinks.map(link => (
							<li key={link}>
								<Link
									className='font-semibold text-siteDark flex items-center gap-3 text-[24px] leading-[1.5] hover:[&>.icon]:inline-block max-[475px]:items-start max-[475px]:text-[18px] max-[475px]:leading-[1.2]'
									to=''
								>
									{link}
									<span className='icon hidden'>
										<BsArrowRight />
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</header>
	)
}

export default ServicesHero
