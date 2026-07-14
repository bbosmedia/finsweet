import React from 'react'
import { LatestPostsSection, AuthorProfileHeader } from '../../components'

const SingleBlogger = () => {
  return (
		<main>
			<AuthorProfileHeader />
			<LatestPostsSection title='Blog posts from Javena' />
		</main>
	)
}

export default SingleBlogger
