import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';
import thunk from 'redux-thunk';
import registerForPushNotificationsAsync from '../common/infrastructure/push-notifications';
import AppScreen from './containers/app.screen';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
	//state = {
	//	notification: {},
	//};
//
	//componentDidMount() {
	//	registerForPushNotificationsAsync();
	//	this._notificationSubscription = Notifications.addListener(this._handleNotification);
	//}
//
	//_handleNotification = (notification) => {
	//	this.setState({ notification });
	//};

	render() {
		return (
			<Provider store={store}>
				<AppScreen />
			</Provider>
		);
	}
}
