import React from 'react';
import {
	View,
	Button,
	StyleSheet,
	Image,
} from 'react-native';
import { connect } from 'react-redux';
import {
	signInWithGoogle
} from '../reducers/auth';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	signInBtn: {
		color: "#FFFFFF",
	},
	actionsContainer: {
		flexDirection: 'column',
		padding: 20,
		paddingBottom: 50,
	},
	logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 50,
		height: 50,
	}
});

class SignInScreen extends React.Component {
	static navigationOptions = {
		title: 'Sign in',
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../../../assets/images/home.png')}
					/>
				</View>
				<View style={styles.actionsContainer}>
					<Button
						buttonStyle={styles.signInBtn}
						onPress={() => this.props.signInWithGoogle()}
						title="Sign in with Google"
						disabled={this.props.isSigninInProgress}
					/>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		isSigninInProgress: state.auth.isSigninInProgress
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		signInWithGoogle: () => dispatch(signInWithGoogle())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
