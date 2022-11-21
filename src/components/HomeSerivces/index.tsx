import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton'
import './index.scss'

const HomeServices = () => {
	return (
		<section className='section home-services bg-siteOrange'>
			<div className='container'>
				<span className='section-name'>Our Service</span>
				<h3 className='section-title'>
					We build software solutions that solve client's business challenges
				</h3>
				<MainButton text='Start Project' link='/' />
				<div className='cards'>
					<div className='card'>
						<img
							src={require('../../assets/images/home-services/1.png')}
							alt=''
						/>
						<h5>Technical support</h5>
						<p>
							We aim to attain the greatest satisfaction for our clients and be
							one of the prominent names when it comes to world-class service
						</p>
						<Link to='/'>
							Read More <BsArrowRight />
						</Link>
					</div>
					<div className='card'>
						<img
							src={require('../../assets/images/home-services/2.png')}
							alt=''
						/>
						<h5>Testing Management</h5>
						<p>
							We aim to attain the greatest satisfaction for our clients and be
							one of the prominent names when it comes to world-class service
						</p>
						<Link to='/'>
							Read More <BsArrowRight />
						</Link>
					</div>
					<div className='card'>
						<img
							src={require('../../assets/images/home-services/3.png')}
							alt=''
						/>
						<h5>Development</h5>
						<p>
							We aim to attain the greatest satisfaction for our clients and be
							one of the prominent names when it comes to world-class service
						</p>
						<Link to='/'>
							Read More <BsArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeServices
