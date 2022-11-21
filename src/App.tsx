import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar, Subscription } from './components'
import { Blog, Career, CareerItem, Company, Home, Services, SingleBlog } from './pages'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/company' element={<Company />} />
				<Route path='/career' element={<Career />} />
				<Route path='/career/:id' element={<CareerItem />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/:id' element={<SingleBlog />} />
			</Routes>
			<Subscription />
			<Footer />
		</div>
	)
}

export default App
