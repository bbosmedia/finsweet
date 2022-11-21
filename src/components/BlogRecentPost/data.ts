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
        img: require("../../assets/images/blog-recent-posts/1.png"),
        title: 'Today’s best design trends for digital products',
        text: '',
        userImg: require("../../assets/images/home-customers/3.png"),
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
    {
        img: require("../../assets/images/blog-recent-posts/2.png"),
        title: 'Today’s best design trends for digital products',
        text: '',
        userImg: require("../../assets/images/home-customers/3.png"),
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
    {
        img: require("../../assets/images/blog-recent-posts/3.png"),
        title: 'Today’s best design trends for digital products',
        text: '',
        userImg: require("../../assets/images/home-customers/3.png"),
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
    {
        img: require("../../assets/images/blog-recent-posts/4.png"),
        title: 'Today’s best design trends for digital products',
        text: '',
        userImg: require("../../assets/images/home-customers/3.png"),
        userName: 'Andrew Johnson',
        date: 'Jan 19, 2021'
    },
]