import React from 'react'
import PostDetailHeader from '@/components/sections/blog/post-detail-header'
import PostDetailBody from '@/components/sections/blog/post-detail-body'
import NewsletterForm from '@/components/shared/newsletter-form'

const SingleBlog = () => {
	return (
		<main>
			<PostDetailHeader />
			<PostDetailBody />
			<NewsletterForm />
		</main>
	)
}

export default SingleBlog
