import axios from 'axios'
import { GET_NEWS } from '../constants/ActionTypes'

const NEWSAPI_BASEURL 	= process.env.REACT_APP_NEWSAPI_BASEURL
const NEWSAPI_COUNTRY 	= process.env.REACT_APP_NEWSAPI_COUNTRY
const NEWSAPI_KEY 		= process.env.REACT_APP_NEWSAPI_KEY

export function getNews() {
	return function(dispatch) {
		axios.get(`${NEWSAPI_BASEURL}?country=${NEWSAPI_COUNTRY}&apiKey=${NEWSAPI_KEY}`).then((response) => {
			dispatch({
				type: GET_NEWS,
				payload: response.data
			})
		})
	}
}