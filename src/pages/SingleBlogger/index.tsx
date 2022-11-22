import React from 'react'
import { HomeBlogs, SingleBloggerHeader } from '../../components'

const SingleBlogger = () => {
  return (
		<main className='single-blogger'>
			<SingleBloggerHeader />
			<HomeBlogs title='Blog posts from Javena' />
		</main>
	)
}

export default SingleBlogger