import React from 'react'
import { recentPostsData } from './data'
import './style.scss'

const BlogRecentPost = () => {
	return (
		<section className='blog-recent-posts'>
			<div className='container'>
				<h2 className='section-title'>Read Recent Post</h2>
				<div className='blog-recent-posts-cards'>
					{recentPostsData.map((post, index) => (
						<div className='card'>
							<div className='card-img'>
								<img
									src={post.img}
									alt={post.title}
								/>
							</div>
							<div className='card-content'>
								<h6 className='card-title'>
									{post.title}
								</h6>
								<div className='user'>
									<img
										src={post.userImg}
										alt={post.userName}
									/>
									<div>
										<p className='name'>{post.userName}</p>
										<p className='date'>{post.date}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default BlogRecentPost
