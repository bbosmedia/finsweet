import React, { useState } from 'react'
import { Deatils, Requirements, Responsibilities } from '@/data/job-detail-data'

const JobDetailContent = () => {
	const [active, setActive] = useState<string>('Details')
	return (
		<section>
			<div className='max-w-[1320px] w-full px-5 mx-auto lsm:px-0'>
				<div className='bg-lightBlue'>
					<div className='flex justify-center items-center md:justify-between px-6 md:gap-9 gap-[95px] border-b-[4px] border-[#E0F1F2] overflow-x-scroll [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:bg-transparent'>
						<button
							className={
								active === 'Details'
									? '-mb-1 leading-6 font-semibold lsm:pt-6 lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-main text-main transition duration-400 ease-in-out lsm:text-[18px]'
									: '-mb-1 leading-6 font-semibold lsm:pt-6 lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-[#E0F1F2] transition duration-400 ease-in-out hover:text-main hover:border-b-main lsm:text-[18px]'
							}
							onClick={() => setActive('Details')}
						>
							Details
						</button>
						<button
							className={
								active === 'Requirements'
									? '-mb-1 leading-6 font-semibold lsm:pt-6 lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-main text-main transition duration-400 ease-in-out lsm:text-[18px]'
									: '-mb-1 leading-6 font-semibold lsm:pt-6 lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-[#E0F1F2] transition duration-400 ease-in-out hover:text-main hover:border-b-main lsm:text-[18px]'
							}
							onClick={() => setActive('Requirements')}
						>
							Requirements
						</button>
						<button
							className={
								active === 'Responsibilities'
									? '-mb-1 leading-6 font-semibold lsm:pt-6 lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-main text-main transition duration-400 ease-in-out lsm:text-[18px]'
									: '-mb-1 leading-6 font-semibold lsm:pt-6 lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-[#E0F1F2] transition duration-400 ease-in-out hover:text-main hover:border-b-main lsm:text-[18px]'
							}
							onClick={() => setActive('Responsibilities')}
						>
							Responsibilities
						</button>
					</div>
					<div className='flex items-center justify-center xsm:px-6 md:py-12 py-[129px] px-8'>
						<ul className='flex flex-col gap-5 xlsm:gap-3 max-w-[842px] list-disc'>
							{active === 'Details' &&
								Deatils.map((item, index) => <li key={index}>{item}</li>)}
							{active === 'Requirements' &&
								Requirements.map((item, index) => <li key={index}>{item}</li>)}
							{active === 'Responsibilities' &&
								Responsibilities.map((item, index) => (
									<li key={index}>{item}</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default JobDetailContent
