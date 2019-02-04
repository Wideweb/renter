export const SIGN_IN = 'renter/auth/sign-in';
export const SIGN_IN_SUCCESS = 'renter/auth/sign-in-success';
export const SIGN_IN_FAIL = 'renter/auth/sign-in-fail';

export const initState = {
    isSignedIn: false,
    isSigninInProgress: false,
    info: {},
    error: null,
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
        case SIGN_IN_FAIL:
            return {
                ...state,
                isSignedIn: false,
                isSigninInProgress: false,
                info: null,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const signInWithGoogle = () => async dispatch => {
    dispatch({ type: SIGN_IN });
}
