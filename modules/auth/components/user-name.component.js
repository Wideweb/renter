import React from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
	setUserName
} from '../reducers/auth';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	btn: {
		color: "#FFFFFF",
	},
	actionsContainer: {
		flexDirection: 'column',
		padding: 20,
		paddingBottom: 50,
	},
	form: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		paddingRight: 20,
		paddingLeft: 20,
	},
	input: { 
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1,
		width: '100%',
	},
});

class UserName extends React.Component {
	state = {
		name: '',
	}

	_submit = () => {
		this.props.setUserName(this.state.name);
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.form}>
					<Text>
						Name:
					</Text>
					<TextInput
						style={styles.input}
						onChangeText={(name) => this.setState({ name })}
						value={this.state.name}
					/>
				</View>
				<View style={styles.actionsContainer}>
					<Button
						buttonStyle={styles.btn}
						onPress={() => this._submit()}
						title="OK"
						disabled={this.props.isLoading}
					/>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLoading: state.auth.isLoading
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUserName: (name) => dispatch(setUserName(name))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserName);
