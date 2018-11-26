import { combineReducers } from 'redux'
import apartments from '../apartment/reducers'
import auth from '../auth/reducers'

export default combineReducers({
	...apartments,
	...auth
})