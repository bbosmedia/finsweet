import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PrimaryButton from '@/components/ui/primary-button'
import { serviceHeaderLinks } from '@/data/services-hero-data'

const ServicesHero = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px] bg-siteOrange'>
			<div className='max-w-[1320px] w-full px-5 mx-auto grid md:grid-cols-1 md:gap-6' style={{ gridTemplateColumns: '1.2fr 1fr' }}>
				<div>
					<h3 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>Our Services</h3>
					<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px]'>
						We Build Software Solutionthat Solve Clients Business Challenges
					</h2>
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
								<Link className='font-semibold text-siteDark flex items-center gap-3 text-[24px] leading-[1.5] hover:[&>.icon]:inline-block max-[475px]:items-start max-[475px]:text-[18px] max-[475px]:leading-[1.2]' to=''>
									{link}
									<span className='icon hidden'>
										<BsArrowRight />
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default ServicesHero
