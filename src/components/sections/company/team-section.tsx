import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { companyTeam } from '@/data/team-data'

const TeamSection = () => {
	return (
		<section className='max-md:py-10 max-xlsm:py-6'>
			<Container>
				<SectionHeading
					subtitle='Meet Our Team'
					title='Teamwork is the only way we work'
					className='max-w-[624px]'
				/>
				<p className='text-gray-500 mt-6 mb-16 max-lsm:mb-6 max-w-[505.5px]'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable.
				</p>
			</Container>
			<Container className='grid grid-cols-4 relative max-md:grid-cols-2 max-lsm:grid-cols-1'>
				{companyTeam.map((item, index) => (
					<div
						key={index}
						className='group relative w-full overflow-hidden h-[320px] max-md:h-auto max-md:w-auto'
					>
						<img
							className='h-full w-full max-md:w-full max-md:h-auto'
							src={item.img}
							alt={item.name}
						/>
						<div className='absolute inset-0 bg-siteDark/90 top-0 left-0 flex p-12 flex-col justify-end text-white -translate-x-full group-hover:translate-x-0 transition-all duration-[400ms] ease-in-out'>
							<h3 className='font-semibold text-[24px] mb-2 leading-[36px]'>
								{item.name}
							</h3>
							<p className='text-white/70'>{item.job}</p>
							<div className='flex gap-6 mt-6'>
								<a href={item.instagram} aria-label={`${item.name} on Instagram`}>
									<BsInstagram />
								</a>
								<a href={item.twitter} aria-label={`${item.name} on Twitter`}>
									<BsTwitter />
								</a>
								<a href={item.linkedin} aria-label={`${item.name} on LinkedIn`}>
									<BsLinkedin />
								</a>
							</div>
						</div>
					</div>
				))}
			</Container>
		</section>
	)
}

export default TeamSection
