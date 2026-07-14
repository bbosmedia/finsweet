import React, { FC } from 'react'

interface IProcessCard {
	order: number
	img: string
	title: string
	text: string
	isFirst?: boolean
	isLast?: boolean
}

const gradientBar = 'absolute left-0 w-full h-2 bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'

const ProcessCard: FC<IProcessCard> = ({ order, img, text, title, isFirst, isLast }) => {
	return (
		<div className='border p-8 relative lsm:p-4'>
			{isFirst && <div className={`${gradientBar} -bottom-2`} />}
			{isLast && <div className={`${gradientBar} -top-2`} />}
			<span className='absolute top-3 right-3 opacity-30 font-semibold text-[24px] leading-[32px] text-darkBlue'>0{order}</span>
			<div className='flex gap-4 lsm:flex-col'>
				<img className='w-[47px] h-[47px]' src={img} alt={title} />
				<div>
					<h6 className='font-semibold leading-[28px]'>{title}</h6>
					<p className='text-gray-500 text-darkBlue'>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default ProcessCard
