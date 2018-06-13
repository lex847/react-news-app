import axios from 'axios'
import { GET_NEWS } from '../constants/ActionTypes'

const NEWSAPI_BASEURL 	= process.env.NEWSAPI_BASEURL
const NEWSAPI_COUNTRY 	= process.env.NEWSAPI_COUNTRY
const NEWSAPI_KEY 		= process.env.NEWSAPI_KEY

console.log(process.env.REACT_APP_NEWS_BASE)

export function getNews() {
	return function(dispatch) {
		axios.get(`${NEWSAPI_BASEURL}?country=${NEWSAPI_COUNTRY}&apiKey=${NEWSAPI_COUNTRY}`).then((response) => {
			dispatch({
				type: GET_NEWS,
				payload: response.data
			})
		})
	}
}