import React from 'react'

const NewsListItem = (props) => {

	const {article} = props
	
	return (
		<div className="col s6 card">
			<div className="row col s12">
				<div className="col s8">
					<div className="card-content">
						<p><a href={article.url}><strong>{article.title}</strong></a></p>
						<p>{article.description}</p>
						<div className="space-between">
							<p>{renderAuthor(article.author)}</p>
							<p>{formatDate(article.publishedAt)}</p>
						</div>
					</div>
				</div>
				<div className="col s4">
					<div className="card-image">
						<img className="article-img" src={article.urlToImage}/>
					</div>
				</div>
			</div>
		</div>	
	)

	function renderAuthor(author) {
		if (author) {
			return author
		}

		return
	}

	function formatDate(date) {

		const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		]
		const d = new Date(date)

		const year 		= d.getFullYear()
		const monthName = monthNames[d.getMonth()]	
		const day  		= d.getDate()

		return "Published on " + monthName + " " + day + ", " + year
	}
}

export default NewsListItem