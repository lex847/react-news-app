import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPublishers } from '../actions/publishers'

class PublishersList extends Component {

	componentWillMount() {
		this.props.getPublishers()
	}

	renderPublishersSelect() {
		const {publishers} = this.props
		
		if (publishers.sources) {
			// console.log(publishers.sources)
			return publishers.sources.map((publisher, index) => {
				return <option key={index} value={publisher.id}>{publisher.name}</option>
			})
		}
	}

	render() {
		return (
			<div className="col s12">
				<label>Select publisher</label>
				<select className="browser-default">
					{this.renderPublishersSelect()}
				</select>
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