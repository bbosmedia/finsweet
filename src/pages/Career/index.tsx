import React from 'react'
import {
	CareerHeader,
	CompanyCulture,
	CompanyVacancies,
	Subscription
} from '../../components'

const Career = () => {
	return (
		<main className='career-page'>
			<CareerHeader />
			<CompanyVacancies />
			<CompanyCulture />
			<Subscription />
		</main>
	)
}

export default Career
