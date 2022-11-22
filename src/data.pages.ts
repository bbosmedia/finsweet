import { Blog, Career, CareerItem, Company, Contact, Home, Services, SingleBlog, SingleBlogger } from "./pages"

interface IPageItem{
    path: string
    element: ()=> JSX.Element
}

export const dataRoutes:IPageItem[] = [
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
    },
]