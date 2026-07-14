import React from 'react'
import JobDetailHeader from '@/components/sections/career/job-detail-header'
import JobDetailContent from '@/components/sections/career/job-detail-content'
import JobApplicationForm from '@/components/sections/career/job-application-form'
import NewsletterForm from '@/components/shared/newsletter-form'

const CareerItem = () => {
	return (
		<main>
			<JobDetailHeader />
			<JobDetailContent />
			<JobApplicationForm />
			<NewsletterForm />
		</main>
	)
}

export default CareerItem
