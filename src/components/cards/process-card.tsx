import React, { type FC } from 'react'
import { cn } from '@/lib/utils'

interface IProcessCard {
	order: number
	img: string
	title: string
	text: string
	isFirst?: boolean
	isLast?: boolean
}

const gradientBar =
	'absolute left-0 w-full h-2 bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'

const ProcessCard: FC<IProcessCard> = ({
	order,
	img,
	text,
	title,
	isFirst,
	isLast
}) => {
	return (
		<div className='border p-8 relative lsm:p-4'>
			{isFirst && <div className={cn(gradientBar, '-bottom-2')} />}
			{isLast && <div className={cn(gradientBar, '-top-2')} />}
			<span className='absolute top-3 right-3 opacity-60 font-semibold text-[24px] leading-[32px] text-darkBlue'>
				0{order}
			</span>
			<div className='flex gap-4 lsm:flex-col'>
				<img className='w-[47px] h-[47px]' src={img} alt={title} width='47' height='47' />
				<div>
					<h3 className='font-semibold leading-[28px]'>{title}</h3>
					<p className='text-gray-500 text-darkBlue'>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default ProcessCard
