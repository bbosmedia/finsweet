import React from 'react'
import { IServicesData } from './data.services'

const ServicesSection = ({ item }: { item: IServicesData }) => {
	return (
		<section
			className='services-page-section'
			style={{ backgroundColor: item.color }}
		>
			<div className='container services-section-inner'>
				<div className='content'>
					<h4 className='services-page-section-name'>{item.name}</h4>
					<h2 className='services-page-section-title'>{item.title}</h2>
					<p className='services-page-text'>{item.text}</p>
				</div>
				<img src={item.img} alt={item.name} />
			</div>
		</section>
	)
}

export default ServicesSection
