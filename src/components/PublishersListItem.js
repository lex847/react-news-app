import React from 'react'

const PublishersListItem = (props) => {

	const {publisher} = props
	console.log(publisher)
	return (
		<select>
			<option value={publisher.id}>{publisher.name}</option>
		</select>
	)
}

export default PublishersListItem