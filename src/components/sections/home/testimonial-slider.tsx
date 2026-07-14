import React from 'react'
import TestimonialCard from '@/components/cards/testimonial-card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	}
	return (
		<div>
			<Slider {...settings}>
				<div className='pl-2 py-4'>
					<TestimonialCard></TestimonialCard>
				</div>
				<div className='pl-2 py-4'>
					<TestimonialCard></TestimonialCard>
				</div>
				<div className='pl-2 py-4'>
					<TestimonialCard></TestimonialCard>
				</div>
			</Slider>
		</div>
	)
}

export default TestimonialSlider
