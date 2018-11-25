import Apartment from '../models/apartment';

export const GET_APARTMENTS = 'renter/apartments/LOAD';
export const GET_APARTMENTS_SUCCESS = 'renter/apartments/LOAD_SUCCESS';
export const GET_APARTMENTS_FAIL = 'renter/apartments/LOAD_FAIL';

export const initState = {
	isLoading: false,
	isFail: false,
	error: null,
	list: [],
}

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_APARTMENTS:
			return { ...state, isLoading: true };
		case GET_APARTMENTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isFail: false,
				//error: JSON.stringify(action.payload)
				list: action.payload.data.apartments.map(item => new Apartment(item))
			};
		case GET_APARTMENTS_FAIL:
			return {
				...state,
				isLoading: false,
				isFail: true,
				error: JSON.stringify(action)
			};
		default:
			return state;
	}
}

export function getApartments(settings) {
	let url = '';
	url += `&price%5Bmin%5D=${settings.priceMin}`;
	url += `&price%5Bmax%5D=${settings.priceMax}`;

	for (let room of settings.rentType) {
		url += `&rent_type%5B%5D=${room}`;
	}

	return {
		type: GET_APARTMENTS,
		payload: {
			request: {
				url
			}
		}
	};
}
