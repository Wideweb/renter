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
				list: action.payload
			};
		case GET_APARTMENTS_FAIL:
			return {
				...state,
				isLoading: false,
				isFail: true,
				error: JSON.stringify(action.payload)
			};
		default:
			return state;
	}
}

export const getApartments = (settings) => async dispatch => {
	dispatch({ type: GET_APARTMENTS, payload: settings });
}
