import React from 'react'
import './index.scss'

const HomeExpertice = () => {
	return (
		<section className="section bg-lightBlue">
			<div className="container home-expertice-inner">
				<div className='left'>
					<p className="section-name">Our expertise</p>
					<h3 className="section-title">We want to get local identification in every corner of the world in this era of global citizenship</h3>
					<p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
				</div>
				<div className="cards">
					<div className="card">
						<img src={require('../../assets/images/home-epertise/1.png')} alt="Icon" />
						<div>
							<h5>On Time Delivery</h5>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="card">
						<img src={require('../../assets/images/home-epertise/2.png')} alt="Icon" />
						<div>
							<h5>Best Quality</h5>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="card">
						<img src={require('../../assets/images/home-epertise/3.png')} alt="Icon" />
						<div>
							<h5>Support Assist</h5>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeExpertice
