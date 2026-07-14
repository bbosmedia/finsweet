import React from 'react'
import { dataAllPosts } from '@/data/all-posts-data'
import { Link } from 'react-router-dom'

const AllPostsGrid = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-lightGrey max-md:py-16 max-xlsm:py-10'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-md:text-[36px] max-lsm:text-[28px] max-[425px]:text-[32px] max-[320px]:text-[27px]'>
					All Posts
				</h2>
				<div className='grid grid-cols-3 gap-8 mt-16 max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1 max-md:mt-6'>
					{dataAllPosts.map((post, index) => (
						<div key={index}>
							<div>
								<img className='w-full h-auto' src={post.img} alt='' width='405' height='266' />
							</div>
							<div className='bg-white p-8 max-md:p-4 max-lsm:p-3'>
								<h6 className='font-semibold mb-4 text-[24px] leading-[36px] max-lsm:text-[18px] max-lsm:leading-[1.4]'>
									{post.title}
								</h6>
								<p className='opacity-90 mb-6 max-lsm:text-[16px]'>{post.text}</p>
								<div className='flex items-center gap-4'>
									<Link to='/blogger/1'>
										<img className='h-8 w-8' src={post.userImg} alt='' width='32' height='32' />
									</Link>
									<div>
										<Link to='/blogger/1'>
											<p>{post.userName}</p>
										</Link>
										<p className='text-gray-500 text-[14px]'>{post.date}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AllPostsGrid
