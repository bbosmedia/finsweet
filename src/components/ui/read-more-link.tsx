import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ReadMoreLinkProps {
	to?: string
	className?: string
}

const ReadMoreLink = ({ to = '/', className }: ReadMoreLinkProps) => {
	return (
		<Link
			className={cn('flex items-center gap-3 text-main', className)}
			to={to}
		>
			Read More <BsArrowRight />
		</Link>
	)
}

export default ReadMoreLink
