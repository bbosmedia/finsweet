import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

interface SubmitButtonProps {
	label: string
	type?: 'submit' | 'button' | 'reset'
	className?: string
}

const SubmitButton = ({
	label,
	type = 'submit',
	className = ''
}: SubmitButtonProps) => {
	return (
		<button
			type={type}
			className={`bg-main px-8 py-5 relative text-white mt-14 ${className}`}
		>
			<img
				className='absolute top-0 left-0'
				src='/images/btn-shape.webp'
				alt=''
			/>
			<span className='flex items-center gap-3'>
				{label} <BsArrowRight />
			</span>
		</button>
	)
}

export default SubmitButton
