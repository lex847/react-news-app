import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNews } from '../actions/news'
import NewsListItem from '../components/NewsListItem'

class NewsList extends Component {
  	
	componentWillMount() {
		this.props.getNews()
	}

	renderNews() {
		const {news} = this.props

		if (news.articles) {
			return news.articles.map((article, index) => {
				return <NewsListItem key={index} article={article}/>
			})
		} else {
			return <div>Loading news</div>
		}
	}

  	render() {
    	return (
      		<div>
        		<h4>News List</h4>
        		<hr/>
        		<div className="row">
        			{this.renderNews()}
        		</div>
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
