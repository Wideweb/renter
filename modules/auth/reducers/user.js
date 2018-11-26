import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export const SIGN_IN = 'renter/auth/sign-in';
export const SET_USER = 'renter/auth/user-set';

export const initState = {
	isSignedIn: false,
	isSigninInProgress: false,
	info: {}
}

export default function reducer(state = initState, action) {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				isSigninInProgress: true,
			};
		case SET_USER:
			return {
				...state,
				isSignedIn: true,
				isSigninInProgress: false,
				info: action.payload
			};
		default:
			return state;
	}
}

export function signIn() {
	GoogleSignin.configure({
		scopes: []
	});

	try {
		const userInfo = await GoogleSignin.signIn();
	} catch (error) {
		BackAndroid.exitApp();
	}А

	return {
		type: SIGN_IN_START
	};
}

export function setUser(user) {
	return {
		type: SET_USER,
		payload: user
	};
}
