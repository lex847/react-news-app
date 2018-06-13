import React from 'react'

const NewsListItem = (props) => {

	const {article} = props

	return (
		<div className="col s6">
			<div className="card">
				<div className="card-image">
					<img src={article.urlToImage}/>
					<span className="card-title">{article.title}</span>
				</div>
			</div>
		</div>
	)
}

export default NewsListItem