import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const AuthorProfileHeader = () => {
	return (
		<header className='py-24 max-[425px]:py-[30px] px-4 flex flex-col items-center'>
			<img
				className='w-full h-auto mb-12 md:mb-4 max-w-[320px] lsm:max-w-[180px]'
				src='/images/blogger.webp'
				alt='Javena Melo'
			/>
			<h2 className='font-semibold text-siteDark text-[36px] leading-[54px]'>
				Javena Melo
			</h2>
			<p className='font-medium text-gray-500 mt-2 mb-4 text-[14px] leading-[20px]'>
				CEO
			</p>
			<p className='text-center mb-8 max-w-[505px] opacity-[0.87]'>
				Through True Rich Attended does no end it his mother since real had half
				every him case in packages enquire we up ecstatic unsatiable.
			</p>
			<div className='flex gap-6 text-siteDark opacity-90'>
				<a
					aria-label='Facebook'
					className='text-[16px] transition-all duration-[400ms] ease-in-out hover:text-main'
				>
					<BsFacebook />
				</a>
				<a
					aria-label='Twitter'
					className='text-[16px] transition-all duration-[400ms] ease-in-out hover:text-main'
				>
					<BsTwitter />
				</a>
				<a
					aria-label='Instagram'
					className='text-[16px] transition-all duration-[400ms] ease-in-out hover:text-main'
				>
					<BsInstagram />
				</a>
			</div>
		</header>
	)
}

export default AuthorProfileHeader
