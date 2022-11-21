import React, { FC } from 'react'

interface ICard {
	order: number
	img: string
	title: string
	text: string
}

const Card: FC<ICard> = ({ order, img, text, title }) => {
	return (
		<div className='card'>
			<span className='number'>0{order}</span>
			<div className='card-inner'>
				<img src={img} alt={title} />
				<div className='content'>
					<h6>{title}</h6>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default Card
