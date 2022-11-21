import React from 'react'
import {
	HomeAbout,
	HomeBlogs,
	HomeCustomer,
	HomeHeader,
	HomeProcess,
	HomeSerivces
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
			<HomeBlogs />
		</main>
	)
}

export default Home
