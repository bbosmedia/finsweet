import React from 'react'
import TestimonialCard from '@/components/cards/testimonial-card'
import Slider from '@/components/ui/slider'

const slides = [1, 2, 3]

const TestimonialSlider = () => {
	return (
		<Slider dots autoPlay interval={3000}>
			{slides.map(slide => (
				<div key={slide} className='pl-2 py-4'>
					<TestimonialCard />
				</div>
			))}
		</Slider>
	)
}

export default TestimonialSlider
