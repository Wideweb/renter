import { put, takeEvery } from 'redux-saga/effects';
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from '../reducers/auth';
import { signInWithGoogleAsync, getUserInfoAsync } from '../services/oath';

export function* signInWithGoogle() {
    try {
        const accessToken = yield signInWithGoogleAsync();
        const user = yield getUserInfoAsync(accessToken);
        yield put({ type: SIGN_IN_SUCCESS, payload: { user, accessToken }});
    } catch (error) {
        yield put({ type: SIGN_IN_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(SIGN_IN, signInWithGoogle)
}
