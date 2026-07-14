import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
	subtitle: string
	title: string
	variant?: 'dark' | 'white'
	className?: string
}

const SectionHeading = ({
	subtitle,
	title,
	variant = 'dark',
	className
}: SectionHeadingProps) => {
	const subtitleColor = variant === 'white' ? 'text-white' : 'text-black'
	const titleColor = variant === 'white' ? 'text-white' : 'text-darkBlue'

	return (
		<div className={className}>
			<span
				className={cn(
					'font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 block',
					subtitleColor
				)}
			>
				{subtitle}
			</span>
			<h2
				className={cn(
					'font-semibold text-[48px] leading-[1.2] max-[425px]:text-[32px] max-[320px]:text-[27px]',
					titleColor
				)}
			>
				{title}
			</h2>
		</div>
	)
}

export default SectionHeading
