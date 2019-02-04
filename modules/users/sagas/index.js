import { put, takeEvery } from 'redux-saga/effects';
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    ADD_STAR,
    ADD_STAR_SUCCESS,
    ADD_STAR_FAIL,
} from '../reducers/users';
import {
    getUsersAsync,
    addStarAsync,
} from '../services/users';

export function* getUsers() {
    try {
        const users = yield getUsersAsync();
        yield put({ type: GET_USERS_SUCCESS, payload: users });
    } catch (error) {
        yield put({ type: GET_USERS_FAIL, payload: error });
    }
}

export function* addStar() {
    try {
        const user = yield addStarAsync();
        yield put({ type: ADD_STAR_SUCCESS, payload: user });
    } catch (error) {
        yield put({ type: ADD_STAR_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(GET_USERS, getUsers);
    yield takeEvery(ADD_STAR, addStar);
}
