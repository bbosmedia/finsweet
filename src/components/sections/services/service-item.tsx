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
			className='pb-24 max-lg:pt-24 max-md:py-12 max-lsm:py-6 max-xlsm:py-4'
			style={{ backgroundColor: item.color }}
		>
			<Container className='flex gap-5 justify-between items-center max-lg:flex-col'>
				<div
					className={cn(
						'max-w-[624px] max-lg:w-full max-lg:max-w-none',
						isEven && 'order-2 max-lg:order-1'
					)}
				>
					<h4 className='text-siteDark opacity-90 font-semibold mb-4 text-[24px] leading-[36px] max-lsm:mb-3 max-lsm:text-[18px] max-lsm:leading-[1.4]'>
						{item.name}
					</h4>
					<h2 className='text-siteDark font-semibold mb-6 text-[36px] leading-[54px] max-lsm:mb-3 max-lsm:text-[24px] max-lsm:leading-[1.4]'>
						{item.title}
					</h2>
					<p className='text-gray-500'>{item.text}</p>
				</div>
				<img
					className={cn(
						'max-w-[515px] max-lg:w-full max-lg:max-w-none',
						isEven && 'order-1 max-lg:order-2'
					)}
					src={item.img}
					alt={item.name}
				/>
			</Container>
		</section>
	)
}

export default ServiceItem
