import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './index.scss'

const HomeBlogs = () => {
	return (
		<section className="home-blogs section bg-lightBlue">
			<div className="container">
				<div className="w-[16px] h-[16px] bg-main mb-5"></div>
				<h2 className="section-title">Read our latest blogs & news</h2>
				<div className="home-blogs-inner">
					<div className="blog-card">
						<img src={require('../../assets/images/home-blog/1.png')} alt="" />
						<div className="content">
							<span className="date">Jan 19, 2021</span>
							<h5 className="title">Today’s best design trends for digital products</h5>
							<Link className='btn' to="/">
								Read More <BsArrowRight />
							</Link>
						</div>
					</div>
					<div className="blog-card">
						<img src={require('../../assets/images/home-blog/2.png')} alt="" />
						<div className="content">
							<span className="date">Jan 19, 2021</span>
							<h5 className="title">Today’s best design trends for digital products</h5>
							<Link className='btn' to="/">
								Read More <BsArrowRight />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeBlogs
