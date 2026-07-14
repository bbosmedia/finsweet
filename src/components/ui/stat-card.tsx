import React from 'react'

interface StatCardProps {
	value: string
	label: string
}

const StatCard = ({ value, label }: StatCardProps) => {
	return (
		<div>
			<p className='font-semibold text-[36px] leading-[1.5] text-darkBlue max-[425px]:text-[22px] max-[425px]:leading-[1.3] mb-2'>
				{value}
			</p>
			<div className='mb-1 w-[72px] h-[6px] bg-[linear-gradient(90deg,#FFA155_0%,#FFA155_25%,#FFE6D2_25%,#FFE6D2_75%,#444CFC_75%,#444CFC_100%)]'></div>
			<p className='font-normal text-[16px] leading-[24px]'>{label}</p>
		</div>
	)
}

export default StatCard
