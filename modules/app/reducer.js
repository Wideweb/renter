import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import tasks from '../tasks/reducers';

export default combineReducers({
	...auth,
	...tasks,
});