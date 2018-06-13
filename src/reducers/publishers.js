import { GET_PUBLISHERS } from '../constants/ActionTypes'

export default function(state = [], action) {
	switch(action.type) {
		case GET_PUBLISHERS:
			return action.payload
	}

	return state
}