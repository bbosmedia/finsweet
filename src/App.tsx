import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import { dataRoutes } from '@/data.pages'

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
