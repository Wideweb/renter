import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from '../navigation/navigator';
import SignInScreen from '../../auth/containers/sign-in.container';

//{this.props.isSignedIn ? <AppNavigator /> : <SignInScreen />}

class AppScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AppNavigator />
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		isSignedIn: state.auth.isSignedIn
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
