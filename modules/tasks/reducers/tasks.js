export const GET_TASKS = 'renter/tasks/LOAD';
export const GET_TASKS_SUCCESS = 'renter/tasks/LOAD_SUCCESS';
export const GET_TASKS_FAIL = 'renter/tasks/LOAD_FAIL';

export const ASIGN_TASK = 'renter/tasks/ASIGN';
export const ASIGN_TASK_SUCCESS = 'renter/tasks/ASIGN_SUCCESS';
export const ASIGN_TASK_FAIL = 'renter/tasks/ASIGN_FAIL';

export const initState = {
    isLoading: false,
    isFail: false,
    error: null,
    list: [],
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_TASKS:
            return { ...state, isLoading: true };
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFail: false,
                list: action.payload,
            };
        case GET_TASKS_FAIL:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                error: JSON.stringify(action.payload),
            };
        case ASIGN_TASK:
            return { ...state, isLoading: true };
        case ASIGN_TASK_SUCCESS:
            const index = state.list.findIndex(item => item.id === action.payload.id);
            const list = state.list.splice(index, 1);
            list.push(action.payload);
            return {
                ...state,
                isLoading: false,
                isFail: false,
                list,
            };
        case ASIGN_TASK_FAIL:
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

export const getTasks = () => async dispatch => {
    dispatch({ type: GET_TASKS });
}

export const asignTask = () => async dispatch => {
    dispatch({ type: ASIGN_TASK });
}
