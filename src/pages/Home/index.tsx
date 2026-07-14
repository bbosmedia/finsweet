import React from 'react'
import HeroSection from '@/components/sections/home/hero-section'
import AboutSection from '@/components/sections/home/about-section'
import ExpertiseSection from '@/components/sections/home/expertise-section'
import ServicesSection from '@/components/sections/home/services-section'
import ProcessSection from '@/components/sections/home/process-section'
import TestimonialsSection from '@/components/sections/home/testimonials-section'
import LatestPostsSection from '@/components/sections/home/latest-posts-section'
import NewsletterForm from '@/components/shared/newsletter-form'

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
