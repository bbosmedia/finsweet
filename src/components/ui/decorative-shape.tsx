import React from 'react'
import { cn } from '@/lib/utils'

interface DecorativeShapeProps {
	className?: string
}

const DecorativeShape = ({ className }: DecorativeShapeProps) => {
	return (
		<img
			className={cn('absolute right-5 top-0 rotate-90', className)}
			src='/images/btn-shape.webp'
			alt=''
		/>
	)
}

export default DecorativeShape
