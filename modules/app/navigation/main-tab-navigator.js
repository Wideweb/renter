import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../../common/components/TabBarIcon';
import RFDPTScreen from '../../tasks/containers/ready-for-pdt.screen';
import UsersScreen from '../../users/containers/user-list.screen';

const RFDPTScreenStack = createStackNavigator({
	RFDPT: RFDPTScreen,
});

RFDPTScreenStack.navigationOptions = {
	tabBarLabel: 'PDT',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
		/>
	),
};

const UsersScreenStack = createStackNavigator({
	Users: UsersScreen,
});

UsersScreenStack.navigationOptions = {
	tabBarLabel: 'Users',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
		/>
	),
};

export default createBottomTabNavigator({
    RFDPTScreenStack,
    UsersScreenStack,
});
