import { combineReducers } from 'redux'
import NewsReducer from './news'
import PublishersReducer from './publishers'

const rootReducer = combineReducers({
	news: NewsReducer,
	publishers: PublishersReducer
})

export default rootReducer