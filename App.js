import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import AppNavigator from './navigation/AppNavigator';

import reducer from './modules/app/reducer';

const client = axios.create({
	baseURL: 'https://ak.api.onliner.by/search/apartments?currency=usd&bounds%5Blb%5D%5Blat%5D=53.77793497204605&bounds%5Blb%5D%5Blong%5D=27.38754272460938&bounds%5Brt%5D%5Blat%5D=54.0239066230473&bounds%5Brt%5D%5Blong%5D=27.73086547851563&page=1&_=0.9482241707756398',
	responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppNavigator />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 50
	}
});
