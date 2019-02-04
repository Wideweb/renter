import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import tasks from '../tasks/reducers';
import users from '../users/reducers';

export default combineReducers({
	...auth,
	...tasks,
	...users,
});