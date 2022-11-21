import React from 'react'
import { companyCulture } from './data.company.culture'
import './index.scss'

const CompanyCulture = () => {
	return (
		<section className='company-culture section'>
			<div className='container'>
				<h5 className='section-name'>OUR WORK & CULTURE</h5>
				<h2 className='section-title'>
					Come and join a team of highly skilled professionals.
				</h2>
				<p className='section-text'>
					Through True Rich Attended does no end it his mother since real had
					half every him case in packages enquire we up ecstatic unsatiable saw
					his giving Remain expense you position concluded.
				</p>

				<div className='cards'>
					{companyCulture.map((item, index) => (
						<div key={index} className='card'>
							<img src={item.img} alt={item.title} />
							<h6>{item.title}</h6>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CompanyCulture
