import React, { Component } from 'react'
import './App.css'
import NewsList from './NewsList'
import Navbar from '../components/Navbar'

class App extends Component {
  	
  	render() {
    	return (
    		<div>
    			<Navbar/>
      			<NewsList/>
      		</div>
		)
  	}
}

export default App
