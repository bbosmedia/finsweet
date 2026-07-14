import React from 'react'
import TestimonialCard from '@/components/cards/testimonial-card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
	dots: true,
	infinite: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false
}

const slides = [1, 2, 3]

const TestimonialSlider = () => {
	return (
		<div>
			<Slider {...settings}>
				{slides.map(slide => (
					<div key={slide} className='pl-2 py-4'>
						<TestimonialCard />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default TestimonialSlider
