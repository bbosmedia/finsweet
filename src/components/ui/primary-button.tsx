import React, { type FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface IPrimaryButton {
	link: string
	text: string
}

const PrimaryButton: FC<IPrimaryButton> = ({ link, text }) => {
	return (
		<Link
			to={link}
			className='font-medium text-white py-5 px-8 relative flex items-center bg-main text-[16px] gap-[10px] leading-[24px] w-fit transition-all duration-[400ms] ease-in-out hover:shadow-xl hover:-translate-y-[2px]'
		>
			<img
				className='absolute top-0 left-0'
				alt=''
				src='/images/btn-shape.png'
			/>
			<span>{text}</span>
			<BsArrowRight />
		</Link>
	)
}

export default PrimaryButton
