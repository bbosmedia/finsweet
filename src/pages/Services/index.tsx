import React from 'react'
import './index.scss'
import { HomeProcess, ServiceHeader, ServicesMain } from '../../components'

const Services = () => {
	return (
		<main className="services-page">
			<ServiceHeader />
			<HomeProcess />
			<ServicesMain />
		</main>
	)
}

export default Services
