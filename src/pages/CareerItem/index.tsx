import React from 'react'
import { CareerItemApply, CareerItemHeader, CareerItemMain, Subscription } from '../../components'

const CareerItem = () => {
	return (
		<main className='career-item-page'>
			<CareerItemHeader />
			<CareerItemMain />
			<CareerItemApply />
			<Subscription />
		</main>
	)
}

export default CareerItem
