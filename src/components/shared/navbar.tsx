import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { cn } from '@/lib/utils'

const navListBase =
	'flex gap-[32px] items-center transition-all duration-[400ms] ease-in-out max-[900px]:absolute max-[900px]:left-0 max-[900px]:bg-darkBlue max-[900px]:flex-col max-[900px]:py-5 max-[900px]:w-full max-[900px]:gap-5 max-[900px]:top-[80px] max-[900px]:h-[calc(100%-80px)] max-[900px]:-translate-x-full max-[900px]:z-[99]'

const navLinkBase =
	'h-[80px] flex items-center text-white/70 font-normal border-t-[3px] border-t-transparent transition-all duration-[400ms] ease-in-out max-[990px]:h-auto hover:text-white hover:border-t-[#FFA155] max-[900px]:hover:border-none'

const navLinkActive =
	'h-[80px] flex items-center text-white font-normal border-t-[3px] border-t-[#FFA155] transition-all duration-[400ms] ease-in-out max-[990px]:h-auto hover:text-white hover:border-t-[#FFA155] max-[900px]:border-none max-[900px]:hover:border-none'

const navLinks = [
	{ path: '/', label: 'Home' },
	{ path: '/services', label: 'Service' },
	{ path: '/company', label: 'Company' },
	{ path: '/career', label: 'Career' },
	{ path: '/blog', label: 'Blog' },
	{ path: '/contact', label: 'Contact Us' }
]

const Navbar = () => {
	const [active, setActive] = useState<boolean>(false)
	const { pathname } = useLocation()
	return (
		<nav className='bg-darkBlue border-b border-b-white/5 z-[99]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto flex items-center justify-between h-[80px]'>
				<Link to='/'>
					<img src='/images/Logo.webp' srcSet='/images/Logo@2x.webp 2x' alt='Site Logo' width='122' height='25' />
				</Link>
				<button
					aria-label={active ? 'Close menu' : 'Open menu'}
					className='border-none text-white outline-none hidden text-[24px] h-[80px] max-[990px]:block'
					onClick={() => setActive(!active)}
				>
					<span
						className={cn(active ? 'max-[990px]:hidden' : 'max-[990px]:block')}
					>
						<HiOutlineMenuAlt4 />
					</span>
					<span
						className={cn(active ? 'max-[990px]:block' : 'max-[990px]:hidden')}
					>
						<AiOutlineClose />
					</span>
				</button>
				<ul className={cn(navListBase, active && 'max-[900px]:translate-x-0')}>
					{navLinks.map(link => (
						<li key={link.path}>
							<Link
								className={cn(
									pathname === link.path ? navLinkActive : navLinkBase
								)}
								to={link.path}
								onClick={() => setActive(false)}
							>
								{link.label}
							</Link>
						</li>
					))}
					<li>
						<Link
							className={cn(
								navLinkBase,
								'!text-[#FFA155]',
								'!text-white',
								'gap-1'
							)}
							to='/'
							onClick={() => setActive(false)}
						>
							Clone Project <BsArrowRight />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
