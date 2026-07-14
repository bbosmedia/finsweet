import type React from 'react'
import Home from '@/pages/home-page'
import Services from '@/pages/services-page'
import Company from '@/pages/company-page'
import Career from '@/pages/career-page'
import CareerItem from '@/pages/career-item-page'
import Blog from '@/pages/blog-page'
import SingleBlog from '@/pages/single-blog-page'
import SingleBlogger from '@/pages/single-blogger-page'
import Contact from '@/pages/contact-page'

interface IPageItem {
	path: string
	element: () => React.JSX.Element
}

export const dataRoutes: IPageItem[] = [
	{
		path: '/',
		element: Home
	},
	{
		path: '/services',
		element: Services
	},
	{
		path: '/company',
		element: Company
	},
	{
		path: '/career',
		element: Career
	},
	{
		path: '/career/:id',
		element: CareerItem
	},
	{
		path: '/blog',
		element: Blog
	},
	{
		path: '/blog/:id',
		element: SingleBlog
	},
	{
		path: '/blogger/:id',
		element: SingleBlogger
	},
	{
		path: '/contact',
		element: Contact
	}
]
