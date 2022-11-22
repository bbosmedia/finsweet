import React from 'react'
import { SingleBlogBody, SingleBlogHeader, Subscription } from '../../components'

const SingleBlog = () => {
	return (
		<main className='single-blog'>
			<SingleBlogHeader />
			<SingleBlogBody />
			<Subscription />
		</main>
	)
}

export default SingleBlog
