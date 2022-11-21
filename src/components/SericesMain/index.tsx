import React from 'react'
import { serviceData } from './data.services'
import ServicesSection from './ServicesSection'
import './index.scss'

function ServicesMain() {
	return (
		<div className='services-main'>
			{serviceData.map((item, index) => (
				<ServicesSection key={index} item={item} />
			))}
		</div>
	)
}

export default ServicesMain
