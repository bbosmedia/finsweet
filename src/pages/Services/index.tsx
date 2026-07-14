import React from 'react'
import { HomeProcess, ServiceHeader, ServicesMain, Subscription } from '../../components'

const Services = () => {
	return (
		<main className='services-page'>
			<ServiceHeader />
			<div className='bg-lightGrey'>
				<HomeProcess />
			</div>
			<ServicesMain />
			<Subscription />
		</main>
	)
}

export default Services
