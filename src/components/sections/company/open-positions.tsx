import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { dataVacancies } from '@/data/vacancies-data'

const OpenPositions = () => {
	return (
		<section className='mb-16 max-lsm:mb-6 max-md:mb-10 max-xlsm:mb-4'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='bg-lightBlue grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-6 max-xlsm:p-4 max-xlsm:gap-4 p-[72px] gap-[32px] max-lsm:p-5 max-lsm:gap-5'>
					{dataVacancies.map((item, index) => (
						<div key={index} className='bg-white p-12 max-sm:p-4'>
							<h3 className='font-semibold mb-3 text-siteDark leading-7 text-[16px]'>
								{item.name}
							</h3>
							<p className='leading-4 text-gray-500 mb-1 text-[16px]'>
								{item.time}
							</p>
							<p className='leading-4 text-gray-500 mb-1 text-[16px]'>
								{item.salary}
							</p>
							<Link className='flex items-center gap-4 mt-12' to={item.link}>
								<span className='text-main font-medium text-[16px]'>
									Apply Now
								</span>{' '}
								<BsArrowRight />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OpenPositions
