import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNews } from '../actions/news'

class NewsList extends Component {
  	
	componentWillMount() {
		this.props.getNews()
	}

  	render() {
  		console.log(this.props.news)
    	return (
      		<div>
        		<h4>News List</h4>	
      		</div>
		)
  	}
}

const mapStateToProps = (state) => {
	return {
		news: state.news
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
