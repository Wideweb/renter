import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga'
=======
import registerForPushNotificationsAsync from '../common/infrastructure/push-notifications';
import AppScreen from './containers/app.screen';
>>>>>>> 5a1397563379196182fd84533bb36e01d9c573a1

import reducer from './reducer';
import sagas from './sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(sagas)

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
