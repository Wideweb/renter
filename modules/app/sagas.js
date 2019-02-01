import appartmentSaga from '../apartment/sagas'

export default function* rootSaga() {
    yield all([
        appartmentSaga(),
    ])
}
