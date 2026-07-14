import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const TrendingPosts = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto'>
				<div className='flex justify-between gap-5 md:flex-col'>
					<div className='w-1/2 md:w-full'>
						<div className='h-7 w-7 bg-siteOrange mb-6'></div>
						<h3 className='font-medium [letter-spacing:3px] uppercase opacity-[0.87] mb-4 text-black'>
							Trending
						</h3>
						<Link to='/blog/1'>
							<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-6 lsm:mb-4'>
								Breaking the code How did we build our Figma plugin
							</h2>
						</Link>
						<p className='block mb-6 lsm:mb-4'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							Maker is a decentralized. We aim to attain the.
						</p>
						<Link className='flex items-center gap-3 mb-10 lsm:mb-5' to='/'>
							<span className='text-main'>Read More</span> <BsArrowRight />
						</Link>
						<div className='flex items-center gap-3 mb-14 lsm:flex-col lsm:items-start'>
							<div className='flex items-center gap-3 pr-3 border-r border-r-black/20 lsm:border-r-0'>
								<Link to='/blogger/1'>
									<img src='/images/home-customers/3.webp' alt='' width='48' height='48' />
								</Link>
								<Link to='/blogger/1'>
									<span>Andrew Jonson</span>
								</Link>
							</div>
							<span className='text-gray-500'>Posted on 27th January 2021</span>
						</div>
						<img className='w-full' src='/images/blog-page.webp' alt='' width='624' height='390' />
					</div>
					<div className='w-1/2 md:w-full max-w-[515px]'>
						<div className='w-full bg-siteOrange flex flex-col gap-16 relative lsm:gap-6 p-[72px] lsm:p-5'>
							<img
								className='absolute top-0 right-0 rotate-90 lsm:hidden'
								src='/images/btn-shape.webp'
								srcSet='/images/btn-shape@2x.webp 2x'
								alt=''
								width='28'
								height='28'
							/>
							<div>
								<Link to='/blog/1'>
									<h3 className='font-semibold text-siteDark mb-4 text-[24px] leading-[36px] lsm:text-[20px] lsm:leading-[1.4]'>
										Great design expectations prejudice in digital products in
										Next Year
									</h3>
								</Link>
								<div className='flex gap-3'>
									<Link to='/blogger/1'>
										<img src='/images/home-customers/3.webp' alt='' width='48' height='48' />
									</Link>
									<div>
										<Link to='/blogger/1'>
											<h6>Andrew Jonson</h6>
										</Link>
										<span className='font-medium text-gray-500 text-[14px] leading-[20px]'>
											Jan 19, 2021
										</span>
									</div>
								</div>
							</div>
							<div>
								<Link to='/blog/1'>
									<h3 className='font-semibold text-siteDark mb-4 text-[24px] leading-[36px] lsm:text-[20px] lsm:leading-[1.4]'>
										Great design expectations prejudice in digital products in
										Next Year
									</h3>
								</Link>
								<div className='flex gap-3'>
									<Link to='/blogger/1'>
										<img src='/images/home-customers/3.webp' alt='' width='48' height='48' />
									</Link>
									<div>
										<Link to='/blogger/1'>
											<h6>Andrew Jonson</h6>
										</Link>
										<span className='font-medium text-gray-500 text-[14px] leading-[20px]'>
											Jan 19, 2021
										</span>
									</div>
								</div>
							</div>
							<div>
								<Link to='/blog/1'>
									<h3 className='font-semibold text-siteDark mb-4 text-[24px] leading-[36px] lsm:text-[20px] lsm:leading-[1.4]'>
										Great design expectations prejudice in digital products in
										Next Year
									</h3>
								</Link>
								<div className='flex gap-3'>
									<Link to='/blogger/1'>
										<img src='/images/home-customers/3.webp' alt='' width='48' height='48' />
									</Link>
									<div>
										<Link to='/blogger/1'>
											<h6>Andrew Jonson</h6>
										</Link>
										<span className='font-medium text-gray-500 text-[14px] leading-[20px]'>
											Jan 19, 2021
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default TrendingPosts
