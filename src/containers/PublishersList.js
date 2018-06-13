import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPublishers } from '../actions/publishers'
import PublishersListItem from '../components/PublishersListItem'

class PublishersList extends Component {

	componentWillMount() {
		this.props.getPublishers()
	}

	renderPublishersSelect() {
		const {publishers} = this.props
		
		if (publishers.sources) {
			// console.log(publishers.sources)
			return publishers.sources.map((publisher, index) => {
				return <PublishersListItem key={index} publisher={publisher}/>
			})
		} else {
			return <div>Loading publishers</div>
		}
	}

	render() {
		return (
			<div className="input-field col s12">
				{this.renderPublishersSelect()}
				<label>Select publisher</label>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		publishers: state.publishers
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getPublishers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishersList)