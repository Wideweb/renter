export const GET_TASKS = 'renter/tasks/LOAD';
export const GET_TASKS_SUCCESS = 'renter/tasks/LOAD_SUCCESS';
export const GET_TASKS_FAIL = 'renter/tasks/LOAD_FAIL';

export const ASSIGN_TASK = 'renter/tasks/ASSIGN';
export const ASSIGN_TASK_SUCCESS = 'renter/tasks/ASSIGN_SUCCESS';
export const ASSIGN_TASK_FAIL = 'renter/tasks/ASSIGN_FAIL';

export const UNASSIGN_TASK = 'renter/tasks/UNASSIGN';
export const UNASSIGN_TASK_SUCCESS = 'renter/tasks/UNASSIGN_SUCCESS';
export const UNASSIGN_TASK_FAIL = 'renter/tasks/UNASSIGN_FAIL';

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
        case ASSIGN_TASK:
            return { ...state, isLoading: true };
        case ASSIGN_TASK_SUCCESS:
            const index = state.list.findIndex(item => item.id === action.payload.id);
            const list = state.list.splice(index, 1);
            list.push(action.payload);
            return {
                ...state,
                isLoading: false,
                isFail: false,
                list,
            };
        case ASSIGN_TASK_FAIL:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                error: JSON.stringify(action.payload),
            };
        case UNASSIGN_TASK:
            return { ...state, isLoading: true };
        case UNASSIGN_TASK_SUCCESS:
            const index = state.list.findIndex(item => item.id === action.payload.id);
            const list = state.list.splice(index, 1);
            list.push(action.payload);
            return {
                ...state,
                isLoading: false,
                isFail: false,
                list,
            };
        case UNASSIGN_TASK_FAIL:
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

export const assignTask = () => async dispatch => {
    dispatch({ type: ASSIGN_TASK });
}

export const unassignTask = () => async dispatch => {
    dispatch({ type: UNASSIGN_TASK });
}
