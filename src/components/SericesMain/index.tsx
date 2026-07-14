import React from 'react'
import { serviceData } from './data.services'
import ServicesSection from './ServicesSection'

function ServicesMain() {
	return (
		<div className='services-main'>
			{serviceData.map((item, index) => (
				<ServicesSection key={index} item={item} index={index} />
			))}
		</div>
	)
}

export default ServicesMain
