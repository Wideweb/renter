export const SET_SEARCH_SETTINGS = 'renter/apartments/search-settings';
export const SET_PRICE_MIN = 'renter/apartments/price-min';
export const SET_PRICE_MAX = 'renter/apartments/price-max';
export const ADD_RENT_TYPE = 'renter/apartments/rent-type-add';
export const REMOVE_RENT_TYPE = 'renter/apartments/rent-type-remove';

export const initState = {
	priceMin: '50',
	priceMax: '300',
	rentType: ['1_room', '2_rooms'],
}

export default function reducer(state = initState, action) {
	switch (action.type) {
		case SET_SEARCH_SETTINGS:
			return { ...state, ...action.payload };
		case SET_PRICE_MIN:
			return { ...state, priceMin: action.payload };
		case SET_PRICE_MAX:
			return { ...state, priceMax: action.payload };
		case ADD_RENT_TYPE:
			return { ...state, rentType: state.rentType.concat(action.payload) };
		case REMOVE_RENT_TYPE:
			return { ...state, rentType: state.rentType.filter(type => type !== action.payload) };
		default:
			return state;
	}
}

export function setSearchSettings(settings) {
	return {
		type: SET_SEARCH_SETTINGS,
		payload: settings
	};
}

export function setPriceMin(price) {
	return {
		type: SET_PRICE_MIN,
		payload: price
	};
}

export function setPriceMax(price) {
	return {
		type: SET_PRICE_MAX,
		payload: price
	};
}

export function addRentType(rentType) {
	return {
		type: ADD_RENT_TYPE,
		payload: rentType
	};
}

export function removeRentType(rentType) {
	return {
		type: REMOVE_RENT_TYPE,
		payload: rentType
	};
}