import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const navListBase =
	'flex gap-[32px] items-center transition-all duration-[400ms] ease-in-out max-[900px]:absolute max-[900px]:left-0 max-[900px]:bg-darkBlue max-[900px]:flex-col max-[900px]:py-5 max-[900px]:w-full max-[900px]:gap-5 max-[900px]:top-[80px] max-[900px]:h-[calc(100%-80px)] max-[900px]:-translate-x-full max-[900px]:z-[99]'

const navLinkBase =
	'h-[80px] flex items-center text-white/70 font-normal border-t-[3px] border-t-transparent transition-all duration-[400ms] ease-in-out max-[990px]:h-auto hover:text-white hover:border-t-[#FFA155] max-[900px]:hover:border-none'

const navLinkActive =
	'h-[80px] flex items-center text-white font-normal border-t-[3px] border-t-[#FFA155] transition-all duration-[400ms] ease-in-out max-[990px]:h-auto hover:text-white hover:border-t-[#FFA155] max-[900px]:border-none max-[900px]:hover:border-none'

const Navbar = () => {
	const [active, setActive] = useState<boolean>(false)
	const { pathname } = useLocation()
	return (
		<nav className='bg-darkBlue border-b border-b-white/5 z-[99]'>
			<div className='max-w-[1320px] w-full px-5 mx-auto flex items-center justify-between h-[80px]'>
				<Link to='/'>
					<img src='/images/Logo.png' alt='Site Logo' />
				</Link>
				<button
					className='border-none text-white outline-none hidden text-[24px] h-[80px] max-[990px]:block'
					onClick={() => setActive(!active)}
				>
					<span className={active ? 'max-[990px]:hidden' : 'max-[990px]:block'}>
						<HiOutlineMenuAlt4 />
					</span>
					<span className={active ? 'max-[990px]:block' : 'max-[990px]:hidden'}>
						<AiOutlineClose />
					</span>
				</button>
				<ul
					className={`${navListBase} ${
						active ? 'max-[900px]:translate-x-0' : ''
					}`}
				>
					<li>
						<Link
							className={pathname === '/' ? navLinkActive : navLinkBase}
							to='/'
							onClick={() => setActive(false)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={pathname === '/services' ? navLinkActive : navLinkBase}
							to='/services'
							onClick={() => setActive(false)}
						>
							Service
						</Link>
					</li>
					<li>
						<Link
							className={pathname === '/company' ? navLinkActive : navLinkBase}
							to='/company'
							onClick={() => setActive(false)}
						>
							Company
						</Link>
					</li>
					<li>
						<Link
							className={pathname === '/career' ? navLinkActive : navLinkBase}
							to='/career'
							onClick={() => setActive(false)}
						>
							Career
						</Link>
					</li>
					<li>
						<Link
							className={pathname === '/blog' ? navLinkActive : navLinkBase}
							to='/blog'
							onClick={() => setActive(false)}
						>
							Blog
						</Link>
					</li>
					<li>
						<Link
							className={pathname === '/contact' ? navLinkActive : navLinkBase}
							to='/contact'
							onClick={() => setActive(false)}
						>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							className={`${navLinkBase} !text-[#FFA155] !text-white gap-1`}
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
