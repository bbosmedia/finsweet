import React from 'react'

const PostDetailHeader = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto relative'>
				<div className='h-7 w-7 bg-siteOrange mb-6'></div>
				<img
					className='absolute top-0 right-0 rotate-90 md:hidden'
					src='/images/btn-shape.webp'
					alt=''
				/>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-[425px]:text-[32px] max-[320px]:text-[27px] mb-6 md:mb-4 max-w-[729px]'>
					Breaking the code How did we build our Figma plugin
				</h2>
				<p className='block mb-8 md:mb-3 max-w-[719px]'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The Maker is a
					decentralized. We aim to attain the greatest satisfaction for our
					clients
				</p>
				<div className='flex items-center gap-3'>
					<img className='h-8' src='/images/home-customers/3.webp' alt='' />
					<div className='flex items-center gap-3 md:flex-col md:items-start md:gap-0'>
						<p className='pr-3 border-r border-r-black/20 md:border-r-0'>
							Andrew Jonson
						</p>
						<p className='text-gray-500'>Posted on 27th January 2021</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default PostDetailHeader
