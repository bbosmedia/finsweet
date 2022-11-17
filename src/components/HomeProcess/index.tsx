import React from 'react'
import Card from './Card'
import { processdata } from './data'
import './index.scss'

const HomeProcess = () => {
	return (
		<section className="section home-process">
			<div className="container">
				<span className="section-name">Our Process</span>
				<h2 className="section-title">The process we are working With Our client Worldwide</h2>
				<p className="section-text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>

				<div className="cards">
					{processdata.map((process) => (
						<Card key={process.order} order={process.order} img={process.img} title={process.title} text={process.text} />
					))}
				</div>
			</div>
		</section>
	)
}

export default HomeProcess
