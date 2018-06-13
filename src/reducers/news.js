import { GET_NEWS } from '../constants/ActionTypes'

export default function(state = [], action) {
	switch(action.type) {
		case GET_NEWS:
			return action.payload
	}

	return state
}