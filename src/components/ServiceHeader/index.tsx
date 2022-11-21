import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton'
import { serviceHeaderLinks } from './data.links'
import './index.scss'

const ServiceHeader = () => {
	return (
		<header className='service-header section'>
			<div className='container service-header-inner'>
				<div className='service-header-left'>
					<h3 className='section-name'>Our Services</h3>
					<h2 className='section-title'>
						We Build Software Solutionthat Solve Clients Business Challenges
					</h2>
					<p>
						Through True Rich Attended does no end it his mother since
						favourable real had half every him case in packages enquire we up
						ecstatic.
					</p>
					<MainButton link='/' text='Request A Quote' />
				</div>
				<div className='service-header-right'>
					<ul className='service-header-links'>
						{serviceHeaderLinks.map(link => (
							<li key={link}>
								<Link className='service-header-link' to=''>
									{link}
									<span className='icon'>
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

export default ServiceHeader
