import { put, takeEvery } from 'redux-saga/effects';
import { GET_APARTMENTS, GET_APARTMENTS_SUCCESS, GET_APARTMENTS_FAIL } from '../reducers/apartments';
import { getApartmentsAsync } from '../services/apartments';

export function* getApartments({ payload: settings }) {
    try {
        const apartments = yield getApartmentsAsync(settings.priceMin, settings.priceMax, settings.rentType);
        yield put({ type: GET_APARTMENTS_SUCCESS, payload: apartments });
    } catch (error) {
        yield put({ type: GET_APARTMENTS_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(GET_APARTMENTS, getApartments)
}
