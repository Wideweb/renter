import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SignIn from '../components/sign-in.component';
import UserName from '../components/user-name.component';

class AuthScreen extends React.Component {
	static navigationOptions = {
		title: 'Sign in',
	};

	render() {
		return this.props.isSignedIn ? <UserName /> : <SignIn />;
	}
}

function mapStateToProps(state) {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
}

export default connect(mapStateToProps)(AuthScreen);
