import React from 'react'
import { CareerItemApply, CareerItemHeader, CareerItemMain } from '../../components'

const CareerItem = () => {
	return (
		<main className='career-item-page'>
			<CareerItemHeader />
			<CareerItemMain />
			<CareerItemApply />
		</main>
	)
}

export default CareerItem
