import React from 'react'

const SliderCard = () => {
	return (
		<div className='slider-card'>
			<img
				className='quote'
				src={require('../../assets/images/quote.png')}
				alt='Quote'
			/>
			<h4>
				Finsweet has been a wonderful partner to work with. I have been a
				customer now for the past few months now and I have had nothing but
				positive experiences!
			</h4>
			<div className='footer-info'>
				<div className='left'>
					<img
						src={require('../../assets/images/home-customers/1.png')}
						alt='Man'
					/>
					<aside>
						<h6 className='name'>Johnny Andro</h6>
						<p className='job'>Director, Company</p>
					</aside>
				</div>
				<img src={require('../../assets/images/logo-1.png')} alt='Logo' />
			</div>
		</div>
	)
}

export default SliderCard
