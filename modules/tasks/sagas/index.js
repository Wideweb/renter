import { put, takeEvery } from 'redux-saga/effects';
import {
    GET_TASKS,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAIL,
    ASSIGN_TASK,
    ASSIGN_TASK_SUCCESS,
    ASSIGN_TASK_FAIL,
    UNASSIGN_TASK,
    UNASSIGN_TASK_SUCCESS,
    UNASSIGN_TASK_FAIL,
} from '../reducers/tasks';
import {
    getTasksAsync,
    assignTaskAsync,
    unassignTaskAsync,
} from '../services/tasks';

export function* getTasks() {
    try {
        const tasks = yield getTasksAsync();
        yield put({ type: GET_TASKS_SUCCESS, payload: tasks });
    } catch (error) {
        yield put({ type: GET_TASKS_FAIL, payload: error });
    }
}

export function* assignTask() {
    try {
        const task = yield assignTaskAsync();
        yield put({ type: ASSIGN_TASK_SUCCESS, payload: task });
    } catch (error) {
        yield put({ type: ASSIGN_TASK_FAIL, payload: error });
    }
}

export function* unassignTask() {
    try {
        const task = yield unassignTaskAsync();
        yield put({ type: UNASSIGN_TASK_SUCCESS, payload: task });
    } catch (error) {
        yield put({ type: UNASSIGN_TASK_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(GET_TASKS, getTasks);
    yield takeEvery(ASSIGN_TASK, assignTask);
    yield takeEvery(UNASSIGN_TASK, unassignTask);
}
