import { all } from 'redux-saga/effects';
import authSaga from '../auth/sagas';
import tasksSaga from '../tasks/sagas';
import usersSaga from '../users';

export default function* watch() {
    yield all([
        authSaga(),
        tasksSaga(),
        usersSaga(),
    ])
}
