export const SIGN_IN = 'renter/auth/sign-in';
export const SIGN_IN_SUCCESS = 'renter/auth/sign-in-success';
export const SIGN_IN_FAIL = 'renter/auth/sign-in-fail';

export const SET_USER_NAME = 'renter/auth/set-user-name';
export const SET_USER_NAME_SUCCESS = 'renter/auth/set-user-name-success';
export const SET_USER_NAME_FAIL = 'renter/auth/set-user-name-fail';

export const initState = {
	isSignedIn: false,
	isLoading: false,
	info: {},
	accessToken: null,
	error: null,
	isReady: false,
}

export default function reducer(state = initState, action) {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				isLoading: true,
			};
		case SIGN_IN_SUCCESS:
			return {
				...state,
				isSignedIn: true,
				isLoading: false,
				info: action.payload.user,
				accessToken: action.payload.accessToken,
				isReady: action.payload.user && action.payload.user.name,
			};
		case SIGN_IN_FAIL:
			return {
				...state,
				isSignedIn: false,
				isLoading: false,
				error: action.payload,
			};
		case SET_USER_NAME:
			return {
				...state,
				isLoading: true,
			};
		case SET_USER_NAME_SUCCESS:
			return {
				...state,
				isLoading: false,
				info: action.payload,
				isReady: !!action.payload.name,
			};
		case SET_USER_NAME_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
}

export const signInWithGoogle = () => async dispatch => {
	dispatch({ type: SIGN_IN });
}

export const setUserName = (name) => async dispatch => {
	dispatch({ type: SET_USER_NAME, payload: name });
}
