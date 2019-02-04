import { put, takeEvery } from 'redux-saga/effects';
import {
	SIGN_IN,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAIL,
	SET_USER_NAME,
	SET_USER_NAME_SUCCESS,
	SET_USER_NAME_FAIL,
} from '../reducers/auth';
import {
	signInWithGoogleAsync,
	getUserInfoAsync,
	setUserNameAsync,
} from '../services/oath';

function* signInWithGoogle() {
	try {
		const accessToken = yield signInWithGoogleAsync();
		const user = yield getUserInfoAsync(accessToken);
		yield put({ type: SIGN_IN_SUCCESS, payload: { user, accessToken } });
	} catch (error) {
		yield put({ type: SIGN_IN_FAIL, payload: error });
	}
}

function* setUserName(name) {
	try {
		const user = yield setUserNameAsync({ payload: name });
		yield put({ type: SET_USER_NAME_SUCCESS, payload: user });
	} catch (error) {
		yield put({ type: SET_USER_NAME_FAIL, payload: error });
	}
}

export default function* watch() {
	yield takeEvery(SIGN_IN, signInWithGoogle);
	yield takeEvery(SET_USER_NAME, setUserName);
}
