import React from 'react'
import './index.scss'

const CareerHeader = () => {
	return (
		<header className="career-header section">
			<div className="container text-center flex flex-col items-center relative">
				<img className="absolute right-5 top-0 rotate-90  md:hidden" src={require('../../assets/images/btn-shape.png')} alt="" />
				<h5 className="section-name opacity-90">CAREER AT FINSWEET</h5>
				<h2 className="section-title max-w-[624px]">We hired people who are Always Passionate about what they do</h2>
				<p className="max-w-[624px] block mt-6">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
				<img className="my-16 w-full md:my-10 sm:my-6 xsm:my-4" src={require('../../assets/images/careers.png')} alt="" />
				<p className="block mb-4 font-medium">See Our open positions</p>
				<p className="block text-[24px] font-medium">👇</p>
			</div>
		</header>
	)
}

export default CareerHeader
