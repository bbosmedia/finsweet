import React from 'react'
import TrendingPosts from '@/components/sections/blog/trending-posts'
import RecentPosts from '@/components/sections/blog/recent-posts'
import AllPostsGrid from '@/components/sections/blog/all-posts-grid'
import NewsletterForm from '@/components/shared/newsletter-form'

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
