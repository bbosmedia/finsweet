import React from 'react'
import Container from '@/components/ui/container'
import ReadMoreLink from '@/components/ui/read-more-link'

const posts = [
	{
		img: '/images/home-blog/1.webp',
		date: 'Jan 19, 2021',
		title: "Today's best design trends for digital products"
	},
	{
		img: '/images/home-blog/2.webp',
		date: 'Jan 19, 2021',
		title: "Today's best design trends for digital products"
	}
]

const LatestPostsSection = ({ title }: { title: string }) => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-lightBlue max-md:py-16 max-xlsm:py-10'>
			<Container>
				<div className='w-[16px] h-[16px] bg-main mb-5'></div>
				<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-md:text-[36px] max-lsm:text-[28px] max-[425px]:text-[32px] max-[320px]:text-[27px]'>
					{title}
				</h2>
				<div className='grid gap-5 grid-cols-2 mt-12 max-md:grid-cols-1'>
					{posts.map(post => (
						<div key={post.title} className='grid grid-cols-2 max-lg:grid-cols-1'>
							<img
								className='h-full w-full object-cover'
								src={post.img}
								alt=''
							/>
							<div className='bg-white p-8 h-full flex justify-center flex-col'>
								<span className='font-medium text-gray-500 mb-2 text-[14px] leading-[20px] text-darkBlue block'>
									{post.date}
								</span>
								<h3 className='font-semibold text-[24px] leading-[36px] text-darkBlue max-lsm:text-[18px] max-lsm:leading-[1.4]'>
									{post.title}
								</h3>
								<ReadMoreLink to='/' className='mt-6' />
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default LatestPostsSection
