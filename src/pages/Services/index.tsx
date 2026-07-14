import React from 'react'
import { ServicesHero, ProcessSection, ServicesList, NewsletterForm } from '../../components'

const Services = () => {
	return (
		<main>
			<ServicesHero />
			<div className='bg-lightGrey'>
				<ProcessSection />
			</div>
			<ServicesList />
			<NewsletterForm />
		</main>
	)
}

export default Services
