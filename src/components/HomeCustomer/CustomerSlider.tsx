import React from 'react'
import SliderCard from './SliderCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CustomerSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	}
	return (
		<div className="cutomer-slider">
			<Slider {...settings}>
				<div className='pl-2 py-4'>
					<SliderCard></SliderCard>
				</div>
				<div className='pl-2 py-4'>
					<SliderCard></SliderCard>
				</div>
				<div className='pl-2 py-4'>
					<SliderCard></SliderCard>
				</div>
			</Slider>
		</div>
	)
}

export default CustomerSlider
