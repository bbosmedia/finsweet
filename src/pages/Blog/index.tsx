import React from 'react'
import { BlogAllPosts, BlogRecentPost, BlogTrending, Subscription } from '../../components'

const Blog = () => {
	return (
		<main className='blog-page'>
			<BlogTrending />
			<BlogRecentPost />
			<BlogAllPosts />
			<Subscription />
		</main>
	)
}

export default Blog
