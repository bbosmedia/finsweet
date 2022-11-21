import React from 'react'
import MainButton from '../MainButton'
import './index.scss'

const HomeHeader = () => {
	return (
		<header className='home-header'>
			<div className='container home-header-inner'>
				<div className='home-heder-left'>
					<div className='samll-box'></div>
					<h2>Transform Your Idea Into Reality with Finsweet</h2>
					<p>
						The entire Finsweet team knows what's good with Webflow and you can
						too with 1 week and a good attitude.
					</p>
					<MainButton text='Request Quote' link='/'></MainButton>
				</div>
				<img src={require('./header-img.png')} alt='Abbos Nurgulshanov' />
			</div>
			<div className='home-header-footer container'>
				<div>
					<span>Our Clients</span>
					<h4>We've Worked with</h4>
				</div>
				<img src={require('../../assets/images/logos/1.png')} alt='' />
				<img src={require('../../assets/images/logos/2.png')} alt='' />
				<img src={require('../../assets/images/logos/3.png')} alt='' />
				<img src={require('../../assets/images/logos/4.png')} alt='' />
				<img src={require('../../assets/images/logos/5.png')} alt='' />
			</div>
		</header>
	)
}

export default HomeHeader
