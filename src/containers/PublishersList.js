import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPublishers } from '../actions/publishers'
import CountriesList from '../components/CountriesList'

class PublishersList extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedCountry: 'us' 
		}
	}

	componentWillMount() {
		this.props.getPublishers(this.state.selectedCountry)
	}

	renderPublishersSelect() {
		const {publishers} = this.props
		
		if (publishers.sources) {
			return publishers.sources.map((publisher, index) => {
				return <option key={index} value={publisher.id}>{publisher.name}</option>
			})
		}
	}

	getSelectedPublisher(e) {
		this.props.getSelectedPublisherCallback(e.target.value)
	}

	getSelectedCountryCallback(country) {
		this.setState({
			selectedCountry: country
		}, function() {
			this.props.getPublishers(this.state.selectedCountry)
		})
	}

	render() {
		return (
			<div>
				<CountriesList getSelectedCountryCallback={this.getSelectedCountryCallback.bind(this)}/>
				<div className="col s12">
					<label>Select publisher</label>
					<select className="browser-default" onChange={(e) => this.getSelectedPublisher(e)}>
						<option value="default">Choose your publisher</option>
						{this.renderPublishersSelect()}
					</select>
				</div>
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