import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { companyTeam } from '@/data/team-data'

const TeamSection = () => {
	return (
		<section>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<h5 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>
					Meet Our Team
				</h5>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] max-w-[624px]'>
					Teamwork is the only way we work{' '}
				</h2>
				<p className='text-gray-500 mt-6 mb-16 lsm:mb-6 max-w-[505.5px]'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable.
				</p>
			</div>
			<div className='max-w-[1320px] w-full px-5 mx-auto grid grid-cols-4 relative md:grid-cols-2 lsm:grid-cols-1'>
				{companyTeam.map((item, index) => (
					<div
						key={index}
						className='group relative w-full overflow-hidden h-[320px] md:h-auto md:w-auto'
					>
						<img
							className='h-full w-full md:w-full md:h-auto'
							src={item.img}
							alt={item.name}
						/>
						<div className='absolute inset-0 bg-siteDark/90 top-0 left-0 flex p-12 flex-col justify-end text-white -translate-x-full group-hover:translate-x-0 transition-all duration-[400ms] ease-in-out'>
							<h5 className='font-semibold text-[24px] mb-2 leading-[36px]'>
								{item.name}
							</h5>
							<p className='text-white/70'>{item.job}</p>
							<div className='flex gap-6 mt-6'>
								<a href={item.instagram}>
									<BsInstagram />
								</a>
								<a href={item.twitter}>
									<BsTwitter />
								</a>
								<a href={item.linkedin}>
									<BsLinkedin />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default TeamSection
