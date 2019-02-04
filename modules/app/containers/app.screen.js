import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from '../navigation/navigator';
import SignInScreen from '../../auth/containers/sign-in.container';

class AppScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.isSignedIn ? <AppNavigator /> : <SignInScreen />}
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
