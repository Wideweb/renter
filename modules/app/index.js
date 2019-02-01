import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import AppScreen from './containers/app.screen';

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
