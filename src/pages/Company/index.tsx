import React from 'react'
import {
	CompanyHero,
	BrandLogos,
	OurStory,
	VisionStatement,
	TeamSection,
	ExpertiseSection
} from '../../components'

const Company = () => {
	return (
		<main>
			<CompanyHero />
			<OurStory />
			<BrandLogos />
			<ExpertiseSection />
			<VisionStatement />
			<TeamSection />
		</main>
	)
}

export default Company
