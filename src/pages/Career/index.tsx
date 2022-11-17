import React from 'react'
import { CareerHeader, CompanyCulture, CompanyVacancies } from '../../components'
import './index.scss'

const Career = () => {
	return (
		<main className="career-page">
			<CareerHeader />
			<CompanyVacancies />
			<CompanyCulture />
		</main>
	)
}

export default Career
