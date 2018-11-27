import { BackAndroid } from 'react-native';
import { signInWithGoogleAsync } from '../services/oath';

export const SIGN_IN = 'renter/auth/sign-in';
export const SIGN_IN_SUCCESS = 'renter/auth/sign-in-success';

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
        case SIGN_IN_SUCCESS:
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

export const signInWithGoogle = () => async dispatch => {
    dispatch({ type: SIGN_IN, payload: null });

    const result = await signInWithGoogleAsync();

    if (result.error || result.cancelled) {
        BackAndroid.exitApp();
    }

    dispatch({ type: SIGN_IN_SUCCESS, payload: result.user });
}


