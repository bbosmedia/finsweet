import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './index.scss'

const HomeAbout = () => {
	return (
		<section className="home-about section pt-[120px]">
			<div className="container">
				<h5 className="section-name">About Us</h5>
				<div className="home-about-top">
					<h3 className="section-title">The company leads entire webdesign process from concept to delivery.</h3>
					<div className="right">
						<h4 className="sub-title">The Era Of Technology.</h4>
						<p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
					</div>
				</div>
				<div className="home-about-images">
					<img src={require('../../assets/images/home-about/1.jpg')} alt="" />
					<img src={require('../../assets/images/home-about/2.jpg')} alt="" />
					<img src={require('../../assets/images/home-about/3.jpg')} alt="" />
				</div>
				<div className="home-about-footer">
					<div className="home-about-footer-cards">
						<div className="card">
							<h3 className="sub-title">1560+</h3>
							<div className="line"></div>
							<p>Project Delivered</p>
						</div>
						<div className="card">
							<h3 className="sub-title">100+</h3>
							<div className="line"></div>
							<p>Professional</p>
						</div>
						<div className="card">
							<h3 className="sub-title">950+</h3>
							<div className="line"></div>
							<p>Happy Client</p>
						</div>
						<div className="card">
							<h3 className="sub-title">10yrs</h3>
							<div className="line"></div>
							<p>Experience</p>
						</div>
					</div>
					<div>
						<Link className='home-about-footer-link' to="/">
							<span>Read about us</span> <BsArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
