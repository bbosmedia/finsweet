import React from 'react'
import './style.scss'

const SingleBlogHeader = () => {
	return (
		<header className='single-blog-header section'>
			<div className='container relative'>
				<div className='orange-box'></div>
				<img
					className='btn-shape'
					src={require('../../assets/images/btn-shape.png')}
					alt=''
				/>
				<h2 className='section-title'>
					Breaking the code How did we build our Figma plugin
				</h2>
				<p className='section-text'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The Maker is a
					decentralized. We aim to attain the greatest satisfaction for our
					clients
				</p>
				<div className='user'>
					<img
						src={require('../../assets/images/home-customers/3.png')}
						alt=''
					/>
					<div className='info'>
						<p className='name'>Andrew Jonson</p>
						<p className='date'>Posted on 27th January 2021</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default SingleBlogHeader
