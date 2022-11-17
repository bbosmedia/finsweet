import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { companyTeam } from './data.company.meet'
import './index.scss'

const CompanyMeet = () => {
	return (
		<section className="company-meet">
			<div className="container">
				<h5 className="section-name">Meet Our Team</h5>
				<h2 className="section-title">Teamwork is the only way we work </h2>
				<p className="company-meet-text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
			</div>
			<div className="container company-meet-inner">
				{companyTeam.map((item, index) => (
					<div key={index} className="card">
						<img src={item.img} alt={item.name} />
						<div className="card-content">
							<h5>{item.name}</h5>
							<p>{item.job}</p>
							<div className="socials">
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

export default CompanyMeet
