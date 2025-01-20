import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Movie from './pages/Movies/Movies'
import Series from './pages/Series/Series'
import Header from './components/Header/Header'

import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movie />} />
				<Route path="/series" element={<Series />} />
			</Routes>
		</Router>
	</React.StrictMode>
);