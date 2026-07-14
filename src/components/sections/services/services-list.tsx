import React from 'react'
import { serviceData } from '../../../data/services-list-data'
import ServiceItem from './service-item'

const ServicesList = () => {
	return (
		<div>
			{serviceData.map((item, index) => (
				<ServiceItem key={index} item={item} index={index} />
			))}
		</div>
	)
}

export default ServicesList
