import React from 'react';
import {
	View,
} from 'react-native';
import { connect } from 'react-redux';
import {
	signIn
} from '../reducers/user';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class SignInScreen extends React.Component {
	static navigationOptions = {
		title: 'Sign in',
	};

	render() {
		return (
			<View style={{ flexDirection: 'column', padding: 10 }}>
				<View>
					<GoogleSigninButton
						style={{ width: 48, height: 48 }}
						size={GoogleSigninButton.Size.Icon}
						color={GoogleSigninButton.Color.Dark}
						onPress={() => this.props.signIn()}
						disabled={this.state.isSigninInProgress} />
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return { 
		isSigninInProgress: state.auth.isSigninInProgress };
}

const mapDispatchToProps = {
	setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
