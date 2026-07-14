import React from 'react'
import ServicesHero from '@/components/sections/services/services-hero'
import ServicesList from '@/components/sections/services/services-list'
import ProcessSection from '@/components/sections/home/process-section'
import NewsletterForm from '@/components/shared/newsletter-form'

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
