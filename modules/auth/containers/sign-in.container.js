import React from 'react';
import {
    View,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import {
    signInWithGoogle
} from '../reducers/auth';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Sign in',
    };

    render() {
        return (
            <View style={{ flexDirection: 'column', padding: 10 }}>
                <Button
                    onPress={() => this.props.signInWithGoogle()}
                    title="Sign in with Google"
                    color="#841584"
                    disabled={this.props.isSigninInProgress}
                />
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
