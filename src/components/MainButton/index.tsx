import React, { FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './index.scss'

interface IMainButton {
	link: string
	text: string
}

const MainButton: FC<IMainButton> = ({ link, text }) => {
	return (
		<Link to={link} className="main-btn">
			<img className="angle" alt="Abbos Nurgulshanov" src={require('../../assets/images/btn-shape.png')} />
			<span>{text}</span>
			<BsArrowRight />
		</Link>
	)
}

export default MainButton
