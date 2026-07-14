import React from 'react'
import CompanyHero from '@/components/sections/company/company-hero'
import OurStory from '@/components/sections/company/our-story'
import BrandLogos from '@/components/sections/company/brand-logos'
import VisionStatement from '@/components/sections/company/vision-statement'
import TeamSection from '@/components/sections/company/team-section'
import ExpertiseSection from '@/components/sections/home/expertise-section'

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
