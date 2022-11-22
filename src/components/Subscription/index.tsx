import React from 'react'
import './index.scss'

const Subscription = () => {
	return (
		<section className='subscription mt-24 md:mt-10 lsm:mt-4'>
			<div className='container'>
				<div className='subscription-inner'>
					<img
						className='angle'
						src={require('../../assets/images/btn-shape-big.png')}
						alt=''
					/>
					<div>
						<div className='content'>
							<p className='section-name'>NEWSLETTER</p>
							<h3>Subscribe our News Letter to get Latest Updates.</h3>
						</div>
						<form>
							<input type='text' placeholder='Paresh@Pixeto.com' />
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Subscription
