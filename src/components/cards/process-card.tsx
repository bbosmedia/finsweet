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
		<div className='border p-8 relative max-lsm:p-4 max-xlsm:p-3'>
			{isFirst && <div className={cn(gradientBar, '-bottom-2 max-md:hidden')} />}
			{isLast && <div className={cn(gradientBar, '-top-2 max-md:hidden')} />}
			<span className='absolute top-3 right-3 opacity-60 font-semibold text-[24px] leading-[32px] text-darkBlue max-xlsm:text-[20px]'>
				0{order}
			</span>
			<div className='flex gap-4 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-3 max-lsm:flex-col max-lsm:items-center max-lsm:text-center'>
				<img className='w-[47px] h-[47px]' src={img} alt={title} width='47' height='47' />
				<div>
					<h3 className='font-semibold leading-[28px] text-[16px]'>{title}</h3>
					<p className='text-gray-500 text-darkBlue max-lsm:text-[14px]'>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default ProcessCard
