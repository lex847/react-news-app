import { combineReducers } from 'redux'
import NewsReducer from './news'

const rootReducer = combineReducers({
	news: NewsReducer
})

export default rootReducer