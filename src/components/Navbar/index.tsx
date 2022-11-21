import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [active, setActive] = useState<boolean>(false)
	return (
		<nav className='navbar'>
			<div className='container navbar-inner'>
				<Link to='/'>
					<img src={require('../../assets/images/Logo.png')} alt='Site Logo' />
				</Link>
				<button
					className={active ? 'toggle-nav-btn active' : 'toggle-nav-btn'}
					onClick={() => setActive(!active)}
				>
					<span className='open'>
						<HiOutlineMenuAlt4 />
					</span>
					<span className='close'>
						<AiOutlineClose />
					</span>
				</button>
				<ul className={active ? 'nav-list active' : 'nav-list'}>
					<li>
						<Link className='nav-link active' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/services'>
							Service
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/company'>
							Company
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/career'>
							Career
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/blog'>
							Blog
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/'>
							Contact Us
						</Link>
					</li>
					<li>
						<Link className='nav-link live' to='/'>
							Clone Project <BsArrowRight />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
