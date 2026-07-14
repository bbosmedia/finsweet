import BlogRecentPosts1 from '../../assets/images/blog-recent-posts/1.png'
import BlogRecentPosts2 from '../../assets/images/blog-recent-posts/2.png'
import BlogRecentPosts3 from '../../assets/images/blog-recent-posts/3.png'
import BlogRecentPosts4 from '../../assets/images/blog-recent-posts/4.png'
import HomeCustomers3 from '../../assets/images/home-customers/3.png'

export interface IBlog{
    img: string
    title: string
    text: string
    userImg: string
    userName: string
    date: string
}

export const recentPostsData:IBlog[] = [
    {
        img: BlogRecentPosts1,
        title: "Today's best design trends for digital products",
        text: '',
        userImg: HomeCustomers3,
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
    {
        img: BlogRecentPosts2,
        title: "Today's best design trends for digital products",
        text: '',
        userImg: HomeCustomers3,
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
    {
        img: BlogRecentPosts3,
        title: "Today's best design trends for digital products",
        text: '',
        userImg: HomeCustomers3,
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
    {
        img: BlogRecentPosts4,
        title: "Today's best design trends for digital products",
        text: '',
        userImg: HomeCustomers3,
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
]
