import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

const Container = ({ children, className, style }: ContainerProps) => {
	return (
		<div
			className={cn('max-w-[1320px] w-full px-5 mx-auto', className)}
			style={style}
		>
			{children}
		</div>
	)
}

export default Container
