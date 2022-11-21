import React from 'react'
import { BlogAllPosts, BlogRecentPost, BlogTrending } from '../../components'

const Blog = () => {
	return (
		<main className='blog-page'>
			<BlogTrending />
			<BlogRecentPost />
			<BlogAllPosts />
		</main>
	)
}

export default Blog
