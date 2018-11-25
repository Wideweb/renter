import { combineReducers } from 'redux'
import apartments from './apartments'
import searchSettings from './search-settings'

export default combineReducers({
	apartments,
	searchSettings
})