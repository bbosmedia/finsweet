import React, { useState } from 'react'
import { Deatils, Requirements, Responsibilities } from '@/data/job-detail-data'

const JobDetailContent = () => {
	const [active, setActive] = useState<string>('Details')
	return (
		<section>
			<div className='max-w-[1320px] w-full px-5 mx-auto max-lsm:px-0'>
				<div className='bg-lightBlue'>
					<div className='flex justify-start items-center max-md:justify-between px-6 max-md:gap-9 gap-[95px] border-b-[4px] border-[#E0F1F2] overflow-x-auto [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:bg-transparent whitespace-nowrap'>
						<button
							className={
								active === 'Details'
									? '-mb-1 leading-6 font-semibold max-lsm:pt-6 max-lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-main text-main transition duration-400 ease-in-out max-lsm:text-[18px]'
									: '-mb-1 leading-6 font-semibold max-lsm:pt-6 max-lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-[#E0F1F2] transition duration-400 ease-in-out hover:text-main hover:border-b-main max-lsm:text-[18px]'
							}
							onClick={() => setActive('Details')}
						>
							Details
						</button>
						<button
							className={
								active === 'Requirements'
									? '-mb-1 leading-6 font-semibold max-lsm:pt-6 max-lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-main text-main transition duration-400 ease-in-out max-lsm:text-[18px]'
									: '-mb-1 leading-6 font-semibold max-lsm:pt-6 max-lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-[#E0F1F2] transition duration-400 ease-in-out hover:text-main hover:border-b-main max-lsm:text-[18px]'
							}
							onClick={() => setActive('Requirements')}
						>
							Requirements
						</button>
						<button
							className={
								active === 'Responsibilities'
									? '-mb-1 leading-6 font-semibold max-lsm:pt-6 max-lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-main text-main transition duration-400 ease-in-out max-lsm:text-[18px]'
									: '-mb-1 leading-6 font-semibold max-lsm:pt-6 max-lsm:pb-6 pt-[43px] pb-[33px] text-[24px] border-b-[4px] border-[#E0F1F2] transition duration-400 ease-in-out hover:text-main hover:border-b-main max-lsm:text-[18px]'
							}
							onClick={() => setActive('Responsibilities')}
						>
							Responsibilities
						</button>
					</div>
					<div className='flex items-center justify-center max-xsm:px-4 max-md:py-12 py-[129px] px-8 max-lsm:px-4 max-lsm:py-8'>
						<ul className='flex flex-col gap-5 max-xlsm:gap-3 max-w-[842px] list-disc'>
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
