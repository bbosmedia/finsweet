import React from 'react'
import './index.scss'
import { CompanyHeader, CompanyLogos, CompanyOurStory, CompanyVision, CompanyMeet, HomeExpertise } from '../../components'


const Company = () => {
	return (
		<main className="company-page">
			<CompanyHeader />
			<CompanyOurStory />
			<CompanyLogos />
			<HomeExpertise />
			<CompanyVision />
			<CompanyMeet />
		</main>
	)
}

export default Company
