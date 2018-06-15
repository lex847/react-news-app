import React, { Component } from 'react'
import { CountryTypes } from '../constants/CountryTypes'

class CountriesList extends Component {

	constructor(props) {
		super(props)

		this.state = {
			countries: CountryTypes
		}
	}

	renderCountriesSelect() {
		const countries = Object.keys(this.state.countries).map(country =>
			<option value={country} key={country}>{this.state.countries[country]}</option>
		)

		return countries
	}

	getSelectedCountry(e) {
		this.props.getSelectedCountryCallback(e.target.value)
	}

	render() {
		return (
			<div className="col s12">
				<label>Select country</label>
				<select className="browser-default" onChange={(e) => this.getSelectedCountry(e)}>
					<option value="default">Choose your country</option>
					{this.renderCountriesSelect()}
				</select>
			</div>
		)
	}
}

export default CountriesList