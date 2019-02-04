export const GET_USERS = 'renter/users/LOAD';
export const GET_USERS_SUCCESS = 'renter/users/LOAD_SUCCESS';
export const GET_USERS_FAIL = 'renter/users/LOAD_FAIL';

export const ADD_STAR = 'renter/users/ADD_STAR';
export const ADD_STAR_SUCCESS = 'renter/users/ADD_STAR_SUCCESS';
export const ADD_STAR_FAIL = 'renter/users/ADD_STAR_FAIL';

export const initState = {
    isLoading: false,
    isFail: false,
    error: null,
    list: [],
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, isLoading: true };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFail: false,
                list: action.payload,
            };
        case GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                error: JSON.stringify(action.payload),
            };
        case ADD_STAR:
            return { ...state, isLoading: true };
        case ADD_STAR_SUCCESS:
            const index = state.list.findIndex(item => item.id === action.payload.id);
            const list = state.list.splice(index, 1);
            list.push(action.payload);
            return {
                ...state,
                isLoading: false,
                isFail: false,
                list,
            };
        case ADD_STAR_FAIL:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                error: JSON.stringify(action.payload),
            };
        default:
            return state;
    }
}

export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS });
}

export const addStar = () => async dispatch => {
    dispatch({ type: ADD_STAR });
}
