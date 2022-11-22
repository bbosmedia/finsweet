import React from 'react'
import {
	HomeAbout,
	HomeBlogs,
	HomeCustomer,
	HomeHeader,
	HomeProcess,
	HomeSerivces,
	Subscription
} from '../../components'
import HomeExpertice from '../../components/HomeExpertise'

const Home = () => {
	return (
		<main className='home-page'>
			<HomeHeader />
			<HomeAbout />
			<HomeExpertice />
			<HomeSerivces />
			<HomeProcess />
			<HomeCustomer />
			<HomeBlogs title='Read our latest blogs & news' />
			<Subscription />
		</main>
	)
}

export default Home
