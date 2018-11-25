import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SearchSettingsScreen from '../modules/apartment/containers/SearchSettingsScreen';
import SearchResultsScreen from '../modules/apartment/containers/SearchResultsScreen';

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
	SearchSettingsStack,
	SearchResultsStack,
});
