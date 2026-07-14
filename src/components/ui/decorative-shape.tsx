import React from 'react'
import { cn } from '@/lib/utils'

interface DecorativeShapeProps {
	className?: string
}

const DecorativeShape = ({ className }: DecorativeShapeProps) => {
	return (
		<img
			className={cn('absolute right-5 top-0 rotate-90 max-md:hidden', className)}
			src='/images/btn-shape.webp'
			srcSet='/images/btn-shape@2x.webp 2x'
			alt=''
		/>
	)
}

export default DecorativeShape
