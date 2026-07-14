import type React from 'react'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Company from '@/pages/Company'
import Career from '@/pages/Career'
import CareerItem from '@/pages/CareerItem'
import Blog from '@/pages/Blog'
import SingleBlog from '@/pages/SingleBlog'
import SingleBlogger from '@/pages/SingleBlogger'
import Contact from '@/pages/Contact'

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
