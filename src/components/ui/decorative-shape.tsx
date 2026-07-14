import React from 'react'

interface DecorativeShapeProps {
	className?: string
}

const DecorativeShape = ({ className = '' }: DecorativeShapeProps) => {
	return (
		<img
			className={`absolute right-5 top-0 rotate-90 ${className}`}
			src='/images/btn-shape.webp'
			alt=''
		/>
	)
}

export default DecorativeShape
