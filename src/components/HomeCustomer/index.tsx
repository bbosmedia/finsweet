import React from 'react'
import CustomerSlider from './CustomerSlider'
import './index.scss'

const HomeCustomer = () => {
	return (
		<section className='home-customer section bg-lightGrey'>
			<div className='container'>
				<div className='home-customer-inner'>
					<div className='content'>
						<div className='box'></div>
						<h2 className='section-title'>Our customers love what we do</h2>
						<span className='bolder'>
							Transform your idea into reality with finsweet
						</span>
						<p className='text'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.
						</p>
						<div className='images'>
							<img
								src={require('../../assets/images/home-customers/1.png')}
								alt='Customer'
							/>
							<img
								src={require('../../assets/images/home-customers/2.png')}
								alt='Customer'
							/>
							<img
								src={require('../../assets/images/home-customers/3.png')}
								alt='Customer'
							/>
						</div>
						<p className='footer-text'>
							<span>30+</span> Customer Reviews
						</p>
					</div>
					<CustomerSlider></CustomerSlider>
				</div>
			</div>
		</section>
	)
}

export default HomeCustomer
