import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar, Subscription } from './components'
import { dataRoutes } from './data.pages'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				{dataRoutes.map((route, index) => (
					<Route key={index} path={route.path} element={<route.element />} />
				))}
			</Routes>
			<Footer />
		</div>
	)
}

export default App
