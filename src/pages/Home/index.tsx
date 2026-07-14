import React from 'react'
import {
	AboutSection,
	LatestPostsSection,
	TestimonialsSection,
	HeroSection,
	ProcessSection,
	ExpertiseSection,
	ServicesSection,
	NewsletterForm
} from '../../components'

const Home = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ExpertiseSection />
			<ServicesSection />
			<ProcessSection />
			<TestimonialsSection />
			<LatestPostsSection title='Read our latest blogs & news' />
			<NewsletterForm />
		</main>
	)
}

export default Home
