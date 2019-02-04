import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from '../navigation/navigator';
import AuthScreen from '../../auth/containers/auth.container';

class AppScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AppNavigator />
			</View>
		);
	}
}

//{this.props.isReady ? <AppNavigator /> : <AuthScreen />}

function mapStateToProps(state) {
	return {
		isReady: state.auth.isReady
	};
}

export default connect(mapStateToProps)(AppScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 50
	}
});
