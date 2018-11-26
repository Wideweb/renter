import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import AppNavigator from './navigation/AppNavigator';
import registerForPushNotificationsAsync from './infrastructure/push-notifications';

import reducer from './modules/app/reducer';

const client = axios.create({
    baseURL: 'https://ak.api.onliner.by/search/apartments?currency=usd&bounds%5Blb%5D%5Blat%5D=53.77793497204605&bounds%5Blb%5D%5Blong%5D=27.38754272460938&bounds%5Brt%5D%5Blat%5D=54.0239066230473&bounds%5Brt%5D%5Blong%5D=27.73086547851563&page=1&_=0.9482241707756398',
    responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
    state = {
        notification: {},
    };

    componentDidMount() {
        registerForPushNotificationsAsync();
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = (notification) => {
        this.setState({ notification });
    };

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Origin: {this.state.notification.origin}</Text>
                    <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
                </View>
            </Provider>
        );
    }
}

/*
<View style={styles.container}>
    <AppNavigator />
</View>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    }
});
