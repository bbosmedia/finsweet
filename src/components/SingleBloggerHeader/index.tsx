import React from 'react'
import './style.scss'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const SingleBloggerHeader = () => {
	return (
		<header className='section single-blogger-header'>
			<img src={require('../../assets/images/blogger.png')} alt='' />
			<h4 className='single-blogger-header-name'>Javena Melo</h4>
			<h5 className='single-blogger-header-job'>CEO</h5>
			<p className='single-blogger-header-text'>
				Through True Rich Attended does no end it his mother since real had half
				every him case in packages enquire we up ecstatic unsatiable.
			</p>
			<div className='socials'>
				<a>
					<BsFacebook />
				</a>
				<a>
					<BsTwitter />
				</a>
				<a>
					<BsInstagram />
				</a>
			</div>
		</header>
	)
}

export default SingleBloggerHeader
