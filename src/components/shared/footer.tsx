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
		<footer className='mt-24 md:mt-10 lsm:mt-4'>
			<div className='max-w-[1320px] w-full px-5 mx-auto pt-12 pb-16 relative grid gap-5 [grid-template-columns:1fr_1.3fr] md:grid-cols-1'>
				<img
					className='absolute top-0 left-5'
					src='/images/btn-shape.webp'
					alt=''
				/>
				<div>
					<h3 className='text-siteDark font-semibold mb-10 max-w-[453px] text-[48px] leading-[1.2]'>
						Let's make something special
					</h3>
					<h5 className='text-siteDark mb-7 leading-[1.5] text-[24px]'>
						Let's talk! 🤙
					</h5>
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
					<div className='grid grid-cols-3 lsm:grid-cols-1 lsm:gap-8'>
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
							<h6 className='font-semibold mb-3'>Service</h6>
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
							<h6 className='font-semibold mb-3'>Resources</h6>
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
						className='flex items-center gap-2 hover:text-main self-end'
						to='/contact'
					>
						<div className='w-[50px] h-[14px] bg-[linear-gradient(90deg,#FFD3AF_0%,#FFD3AF_30%,#666DFF_30%,#666DFF_100%)]'></div>
						<span>Contact Us</span>
						<BsArrowRight />
					</Link>
				</div>
			</div>
			<div className='bg-siteOrange'>
				<div className='max-w-[1320px] w-full px-5 mx-auto flex items-center justify-between py-5 lsm:flex-col lsm:gap-7'>
					<div className='flex items-center gap-4 lsm:order-2 xsm:flex-col'>
						<Link to='/'>
							<img
								className='h-[24.3px]'
								src='/images/Logo-black.webp'
								alt=''
							/>
						</Link>
						<p>&copy; {new Date().getFullYear()} Finsweet</p>
					</div>
					<div className='flex items-center gap-3 lsm:order-1'>
						<a href='facebook.com'>
							<BsFacebook />
						</a>
						<a href='facebook.com'>
							<BsTwitter />
						</a>
						<a href='facebook.com'>
							<BsInstagram />
						</a>
						<a href='facebook.com'>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
