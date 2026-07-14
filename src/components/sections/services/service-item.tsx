import React from 'react'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'
import type { IServicesData } from '@/data/services-list-data'

const ServiceItem = ({
	item,
	index
}: {
	item: IServicesData
	index: number
}) => {
	const isEven = index % 2 === 1

	return (
		<section
			className='pb-24 lg:pt-24 md:py-12 lsm:py-6'
			style={{ backgroundColor: item.color }}
		>
			<Container className='flex gap-5 justify-between items-center lg:flex-col'>
				<div
					className={cn(
						'max-w-[624px] lg:w-full lg:max-w-none',
						isEven && 'order-2 lg:order-1'
					)}
				>
					<h4 className='text-siteDark opacity-90 font-semibold mb-4 text-[24px] leading-[36px] lsm:mb-3 lsm:text-[18px] lsm:leading-[1.4]'>
						{item.name}
					</h4>
					<h2 className='text-siteDark font-semibold mb-6 text-[36px] leading-[54px] lsm:mb-3 lsm:text-[24px] lsm:leading-[1.4]'>
						{item.title}
					</h2>
					<p className='text-gray-500'>{item.text}</p>
				</div>
				<img
					className={cn(
						'max-w-[515px] lg:w-full lg:max-w-none',
						isEven && 'order-1 lg:order-2'
					)}
					src={item.img}
					alt={item.name}
				/>
			</Container>
		</section>
	)
}

export default ServiceItem
