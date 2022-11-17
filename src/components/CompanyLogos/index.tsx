import React from 'react'
import './index.scss'

const CompanyLogos = () => {
	return (
		<section className="company-logos section">
			<div className="container">
				<img src={require('../../assets/images/black-logos/1.png')} alt="" />
				<img src={require('../../assets/images/black-logos/2.png')} alt="" />
				<img src={require('../../assets/images/black-logos/3.png')} alt="" />
				<img src={require('../../assets/images/black-logos/4.png')} alt="" />
				<img src={require('../../assets/images/black-logos/5.png')} alt="" />
			</div>
		</section>
	)
}

export default CompanyLogos
