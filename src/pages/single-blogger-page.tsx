import React from 'react'
import AuthorProfileHeader from '@/components/sections/blog/author-profile-header'
import LatestPostsSection from '@/components/sections/home/latest-posts-section'

const SingleBlogger = () => {
	return (
		<main>
			<AuthorProfileHeader />
			<LatestPostsSection title='Blog posts from Javena' />
		</main>
	)
}

export default SingleBlogger
