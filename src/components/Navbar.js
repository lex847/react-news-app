import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {

	return (
		<nav>
			<div className="nav-wrapper">
				<img src={logo} className="app-logo" alt="logo"/>
				<ul className="right">
					<li><a href="https://newsapi.org/">Powered by News API</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar