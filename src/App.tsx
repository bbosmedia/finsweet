import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar, Subscription } from './components'
import { Career, CareerItem, Company, Home, Services } from './pages'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/company" element={<Company />} />
				<Route path="/career" element={<Career />} />
				<Route path="/career/:id" element={<CareerItem />} />
			</Routes>
			<Subscription />
			<Footer />
		</div>
	)
}

export default App
