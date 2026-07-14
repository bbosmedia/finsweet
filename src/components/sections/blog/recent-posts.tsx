import React from 'react'
import { Link } from 'react-router-dom'
import { recentPostsData } from '@/data/recent-posts-data'

const RecentPosts = () => {
	return (
		<section className='pb-24 max-md:pb-6 max-md:pb-10 max-lsm:pb-4'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-md:text-[36px] max-lsm:text-[28px] max-[425px]:text-[32px] max-[320px]:text-[27px] mb-16 max-md:mb-6'>
					Read Recent Post
				</h2>
				<div className='grid grid-cols-2 gap-8 max-md:grid-cols-1'>
					{recentPostsData.map(post => (
						<div className='grid grid-cols-2 gap-0 max-lg:grid-cols-1'>
							<div className='w-full h-full'>
								<img
									className='h-full w-full object-cover'
									src={post.img}
									alt={post.title}
								/>
							</div>
							<div className='bg-lightGrey p-8 w-full max-md:p-4 max-lsm:p-3'>
								<h6 className='font-semibold mb-8 max-md:mb-4 text-[24px] leading-[30px] max-lsm:text-[18px] max-lsm:leading-[1.4]'>
									{post.title}
								</h6>
								<div className='flex gap-3 items-center'>
									<Link to='/blogger/1'>
										<img
											className='h-8'
											src={post.userImg}
											alt={post.userName}
										/>
									</Link>
									<div>
										<Link to='/blogger/1'>
											<p className='text-[16px] leading-[24px]'>
												{post.userName}
											</p>
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

export default RecentPosts
