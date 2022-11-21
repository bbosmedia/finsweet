import React from 'react'
import './style.scss'
import { dataAllPosts } from './data';

const BlogAllPosts = () => {
  return (
		<section className='section blog-all-posts'>
			<div className='container'>
				<h2 className='section-title'>All Posts</h2>
				<div className='blog-all-posts-inner'>
                    {dataAllPosts.map((post, index)=>(
                        <div className="card">
                            <div className="card-top">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="card-body">
                                <h6 className='card-title'>{post.title}</h6>
                                <p className='card-text'>{post.text}</p>
                                <div className='card-auth'>
                                    <img src={post.userImg} alt="" />
                                    <div>
                                        <p>{post.userName}</p>
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

export default BlogAllPosts