import axios from 'axios'
import { GET_PUBLISHERS } from '../constants/ActionTypes'

const NEWSAPI_BASEURL 	= process.env.REACT_APP_NEWSAPI_BASEURL
const NEWSAPI_KEY 		= process.env.REACT_APP_NEWSAPI_KEY

export function getPublishers() {
	return function(dispatch) {
		axios.get(`${NEWSAPI_BASEURL}sources?apiKey=${NEWSAPI_KEY}`).then((response) => {
			dispatch({
				type: GET_PUBLISHERS,
				payload: response.data
			})
		})
	}
}