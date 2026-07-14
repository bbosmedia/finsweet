import React from 'react'
import { TrendingPosts, RecentPosts, AllPostsGrid, NewsletterForm } from '../../components'

const Blog = () => {
	return (
		<main>
			<TrendingPosts />
			<RecentPosts />
			<AllPostsGrid />
			<NewsletterForm />
		</main>
	)
}

export default Blog
