import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { BsArrowRight } from 'react-icons/bs'

const BlogTrending = () => {
	return (
		<header className='blog-trending section'>
			<div className='container'>
				<div className='blog-trending-inner'>
					<div className='left'>
						<div className='orange-box'></div>
						<h5 className='section-name'>Trending</h5>
						<Link to='/blog/1'>
							<h2 className='section-title'>
								Breaking the code How did we build our Figma plugin
							</h2>
						</Link>
						<p className='section-text'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							Maker is a decentralized. We aim to attain the.
						</p>
						<Link className='read-more-link' to='/'>
							<span>Read More</span> <BsArrowRight />
						</Link>
						<div className='post-info'>
							<div className='user'>
								<Link to='/blogger/1'>
									<img
										src={require('../../assets/images/home-customers/3.png')}
										alt=''
									/>
								</Link>
								<Link to='/blogger/1'>
									<span className='name'>Andrew Jonson</span>
								</Link>
							</div>
							<span className='date'>Posted on 27th January 2021</span>
						</div>
						<img
							className='post-img'
							src={require('../../assets/images/blog-page.png')}
							alt=''
						/>
					</div>
					<div className='right'>
						<div className='box'>
							<img
								className='btn-shape'
								src={require('../../assets/images/btn-shape.png')}
								alt=''
							/>
							<div className='box-card'>
								<Link to='/blog/1'>
									<h3 className='box-card-title'>
										Great design expectations prejudice in digital products in
										Next Year
									</h3>
								</Link>
								<div className='user'>
									<Link to='/blogger/1'>
										<img
											src={require('../../assets/images/home-customers/3.png')}
											alt=''
										/>
									</Link>
									<div className='names'>
										<Link to='/blogger/1'>
											<h6>Andrew Jonson</h6>
										</Link>
										<span className='date'>Jan 19, 2021</span>
									</div>
								</div>
							</div>
							<div className='box-card'>
								<Link to='/blog/1'>
									<h3 className='box-card-title'>
										Great design expectations prejudice in digital products in
										Next Year
									</h3>
								</Link>
								<div className='user'>
									<Link to='/blogger/1'>
										<img
											src={require('../../assets/images/home-customers/3.png')}
											alt=''
										/>
									</Link>
									<div className='names'>
										<Link to='/blogger/1'>
											<h6>Andrew Jonson</h6>
										</Link>
										<span className='date'>Jan 19, 2021</span>
									</div>
								</div>
							</div>
							<div className='box-card'>
								<Link to='/blog/1'>
									<h3 className='box-card-title'>
										Great design expectations prejudice in digital products in
										Next Year
									</h3>
								</Link>
								<div className='user'>
									<Link to='/blogger/1'>
										<img
											src={require('../../assets/images/home-customers/3.png')}
											alt=''
										/>
									</Link>
									<div className='names'>
										<Link to='/blogger/1'>
											<h6>Andrew Jonson</h6>
										</Link>
										<span className='date'>Jan 19, 2021</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default BlogTrending
