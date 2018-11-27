import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../../common/components/TabBarIcon';
import SearchSettingsScreen from '../../apartment/containers/search-settings.screen';
import SearchResultsScreen from '../../apartment/containers/search-results.screen';
import SignInScreen from '../../auth/containers/sign-in.container';

const SignInStack = createStackNavigator({
	SignIn: SignInScreen,
});

SignInStack.navigationOptions = {
	tabBarLabel: 'Sign in',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-log-in`
					: 'md-log-in'
			}
		/>
	),
};

const SearchSettingsStack = createStackNavigator({
	Settings: SearchSettingsScreen,
});

SearchSettingsStack.navigationOptions = {
	tabBarLabel: 'Search Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-settings`
					: 'md-settings'
			}
		/>
	),
};

const SearchResultsStack = createStackNavigator({
	SearchResults: SearchResultsScreen,
});

SearchResultsStack.navigationOptions = {
	tabBarLabel: 'Search Results',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
		/>
	),
};

export default createBottomTabNavigator({
    SignInStack,
	SearchSettingsStack,
	SearchResultsStack,
});
