import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { dataVacancies } from '../../../data/vacancies-data'

const OpenPositions = () => {
	return (
		<section className='mb-16 lsm:mb-6'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='bg-lightBlue grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:p-6 xlsm:p-4 xlsm:gap-4 p-[72px] gap-[32px]'>
					{dataVacancies.map((item, index) => (
						<div key={index} className='bg-white p-12 sm:p-4'>
							<h5 className='font-semibold mb-3 text-siteDark leading-7 text-[16px]'>{item.name}</h5>
							<p className='leading-4 text-gray-500 mb-1 text-[16px]'>{item.time}</p>
							<p className='leading-4 text-gray-500 mb-1 text-[16px]'>{item.salary}</p>
							<Link className='flex items-center gap-4 mt-12' to={item.link}>
								<span className='text-main font-medium text-[16px]'>Apply Now</span> <BsArrowRight />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OpenPositions
