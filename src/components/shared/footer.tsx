import React from 'react'
import {
	BsArrowRight,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTwitter
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const mainLinks = ['Home', 'Service', 'Company', 'Career', 'Blog']
const serviceLinks = [
	'Technical Support',
	'Development',
	'AWS/Azure',
	'Consulting',
	'Information Technology'
]
const resourceLinks = [
	'FAQ',
	'Blog',
	'Help Center',
	'Terms of Service',
	'Privacy Policy'
]

const Footer = () => {
	return (
		<footer className='mt-24 max-md:mt-10 max-lsm:mt-4 max-xlsm:mt-2'>
			<div className='max-w-[1320px] w-full px-5 mx-auto pt-12 pb-16 relative grid gap-5 [grid-template-columns:1fr_1.3fr] max-md:grid-cols-1'>
			<img
				className='absolute top-0 left-5 max-md:hidden'
				src='/images/btn-shape.webp'
				srcSet='/images/btn-shape@2x.webp 2x'
				alt=''
			/>
				<div>
					<h2 className='text-siteDark font-semibold mb-10 max-w-[453px] text-[48px] leading-[1.2] max-md:text-[36px] max-md:leading-[1.3] max-lsm:text-[28px]'>
						Let's make something special
					</h2>
					<h3 className='text-siteDark mb-7 leading-[1.5] text-[24px] max-lsm:text-[20px]'>
						Let's talk! 🤙
					</h3>
					<div className='mb-4'>
						<a className='block font-medium' href='tel:02079932905'>
							020 7993 2905
						</a>
						<a className='block font-medium' href='mailto:hi@finsweet.com'>
							hi@finsweet.com
						</a>
					</div>
					<div className='bg-black mb-4 max-w-[268px] h-[1px] opacity-[0.08]'></div>
					<p className='font-medium text-[14px] max-w-[207px]'>
						DLF Cybercity, Bhubaneswar, India, &52050
					</p>
				</div>
				<div className='flex flex-col justify-between gap-5'>
					<div className='grid grid-cols-3 max-md:grid-cols-2 max-lsm:grid-cols-1 max-lsm:gap-8'>
						<ul className='flex flex-col gap-3'>
							{mainLinks.map(link => (
								<li key={link}>
									<Link
										className='hover:text-main'
										to={`/${link.toLowerCase()}`}
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
						<div>
							<h4 className='font-semibold mb-3'>Service</h4>
							<ul className='flex flex-col gap-3'>
								{serviceLinks.map(link => (
									<li key={link}>
										<Link className='hover:text-main' to='/'>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className='font-semibold mb-3'>Resources</h4>
							<ul className='flex flex-col gap-3'>
								{resourceLinks.map(link => (
									<li key={link}>
										<Link className='hover:text-main' to='/'>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<Link
						className='flex items-center gap-2 hover:text-main self-end max-md:self-start'
						to='/contact'
					>
						<div className='w-[50px] h-[14px] bg-[linear-gradient(90deg,#FFD3AF_0%,#FFD3AF_30%,#666DFF_30%,#666DFF_100%)]'></div>
						<span>Contact Us</span>
						<BsArrowRight />
					</Link>
				</div>
			</div>
			<div className='bg-siteOrange'>
				<div className='max-w-[1320px] w-full px-5 mx-auto flex items-center justify-between py-5 max-lsm:flex-col max-lsm:gap-7'>
					<div className='flex items-center gap-4 max-lsm:order-2 max-xsm:flex-col'>
						<Link to='/' aria-label='Home'>
							<img
								className='h-[24.3px]'
								src='/images/Logo-black.webp'
								alt=''
							/>
						</Link>
						<p>&copy; {new Date().getFullYear()} Finsweet</p>
					</div>
					<div className='flex items-center gap-3 max-lsm:order-1'>
						<a href='facebook.com' aria-label='Facebook'>
							<BsFacebook />
						</a>
						<a href='facebook.com' aria-label='Twitter'>
							<BsTwitter />
						</a>
						<a href='facebook.com' aria-label='Instagram'>
							<BsInstagram />
						</a>
						<a href='facebook.com' aria-label='LinkedIn'>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
