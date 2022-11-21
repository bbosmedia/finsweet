import React from 'react'
import './index.scss'
import MainButton from '../MainButton'

const CareerItemHeader = () => {
	return (
		<section className='section career-item-header'>
			<div className='container'>
				<div className='inner'>
					<div className='left'>
						<h5 className='section-name'>CAREER AT Ether</h5>
						<h2 className='section-title'>Full Stack Developer</h2>
						<p className='section-text'>
							Through True Rich Attended does no end it his mother since real
							had half every him case in packages.
						</p>
						<MainButton link='' text='Apply Now' />
					</div>
					<div className='right'>
						<img src={require('../../assets/images/btn-shape.png')} alt='' />
						<h5>Job Description</h5>
						<p>Remote, India , 4 to 5 Years Of Experience</p>
						<p>Department: Product Engineering</p>
						<p>Full Time 5 Position Available.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CareerItemHeader
