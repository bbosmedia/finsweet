import React from 'react'
import './index.scss'
import { HomeProcess, ServiceHeader, ServicesMain, Subscription } from '../../components'

const Services = () => {
	return (
		<main className='services-page'>
			<ServiceHeader />
			<HomeProcess />
			<ServicesMain />
			<Subscription />
		</main>
	)
}

export default Services
