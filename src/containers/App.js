import React, { Component } from 'react'
import './App.css'
import NewsList from './NewsList'
import Navbar from '../components/Navbar'
import PublishersList from './PublishersList'

class App extends Component {
  	
  	render() {
    	return (
    		<div>
    			<Navbar/>
    			<PublishersList/>
      		<NewsList/>
      		</div>
		)
  	}
}

export default App
