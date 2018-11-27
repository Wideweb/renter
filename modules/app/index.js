import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';
import AppNavigator from './navigation/navigator';
import registerForPushNotificationsAsync from '../common/infrastructure/push-notifications';
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

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
                <View style={styles.container}>
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}

/*
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Origin: {this.state.notification.origin}</Text>
    <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
</View>
*/

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
