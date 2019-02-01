import { put, takeEvery } from 'redux-saga/effects'
import { GET_APARTMENTS, GET_APARTMENTS_SUCCESS, GET_APARTMENTS_FAIL } from '../reducers/apartments';
import { getApartmentsAsync } from '../services/apartments';

export function* getApartments(settings) {
    try {
        const apartments = yield getApartmentsAsync(settings.priceMin, settings.priceMax, settings.rentType);
        put({ type: GET_APARTMENTS_SUCCESS, payload: apartments });
    } catch (error) {
        put({ type: GET_APARTMENTS_FAIL, payload: error });
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_APARTMENTS, getApartments)
}
