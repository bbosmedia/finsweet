import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { cn } from '@/lib/utils'

interface SubmitButtonProps {
	label: string
	type?: 'submit' | 'button' | 'reset'
	className?: string
}

const SubmitButton = ({
	label,
	type = 'submit',
	className
}: SubmitButtonProps) => {
	return (
		<button
			type={type}
			className={cn('bg-main px-8 py-5 relative text-white mt-14', className)}
		>
			<img
				className='absolute top-0 left-0 max-md:hidden'
				src='/images/btn-shape.webp'
				srcSet='/images/btn-shape@2x.webp 2x'
				alt=''
			/>
			<span className='flex items-center gap-3'>
				{label} <BsArrowRight />
			</span>
		</button>
	)
}

export default SubmitButton
