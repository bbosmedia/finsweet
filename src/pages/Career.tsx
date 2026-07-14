import React from 'react'
import CareerHero from '@/components/sections/career/career-hero'
import OpenPositions from '@/components/sections/company/open-positions'
import CultureSection from '@/components/sections/company/culture-section'
import NewsletterForm from '@/components/shared/newsletter-form'

const Career = () => {
	return (
		<main>
			<CareerHero />
			<OpenPositions />
			<CultureSection />
			<NewsletterForm />
		</main>
	)
}

export default Career
