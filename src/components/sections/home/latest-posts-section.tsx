import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const LatestPostsSection = ({title}:{title: string}) => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-lightBlue'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='w-[16px] h-[16px] bg-main mb-5'></div>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px]'>{title}</h2>
				<div className='grid gap-5 grid-cols-2 mt-12 md:grid-cols-1'>
					<div className='grid grid-cols-2 lg:grid-cols-1'>
						<img className='h-full w-full object-cover' src="/images/home-blog/1.png" alt='' />
						<div className='bg-white p-8 h-full flex justify-center flex-col'>
							<span className='font-medium text-gray-500 mb-2 text-[14px] leading-[20px] text-darkBlue block'>Jan 19, 2021</span>
							<h5 className='font-semibold text-[24px] leading-[36px] text-darkBlue lsm:text-[18px] lsm:leading-[1.4]'>
								Today's best design trends for digital products
							</h5>
							<Link className='flex text-main items-center mt-6' to='/'>
								Read More <BsArrowRight />
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-2 lg:grid-cols-1'>
						<img className='h-full w-full object-cover' src="/images/home-blog/2.png" alt='' />
						<div className='bg-white p-8 h-full flex justify-center flex-col'>
							<span className='font-medium text-gray-500 mb-2 text-[14px] leading-[20px] text-darkBlue block'>Jan 19, 2021</span>
							<h5 className='font-semibold text-[24px] leading-[36px] text-darkBlue lsm:text-[18px] lsm:leading-[1.4]'>
								Today's best design trends for digital products
							</h5>
							<Link className='flex text-main items-center mt-6' to='/'>
								Read More <BsArrowRight />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LatestPostsSection
