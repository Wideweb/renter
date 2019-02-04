import { put, takeEvery } from 'redux-saga/effects';
import { 
    GET_TASKS, 
    GET_TASKS_SUCCESS, 
    GET_TASKS_FAIL,
    ASIGN_TASK,
    ASIGN_TASK_SUCCESS,
    ASIGN_TASK_FAIL,
 } from '../reducers/tasks';
import { getTasksAsync } from '../services/tasks';

export function* getTasks() {
    try {
        const tasks = yield getTasksAsync();
        yield put({ type: GET_TASKS_SUCCESS, payload: tasks });
    } catch (error) {
        yield put({ type: GET_TASKS_FAIL, payload: error });
    }
}

export function* asignTask() {
    try {
        const task = yield asignTaskAsync();
        yield put({ type: ASIGN_TASK_SUCCESS, payload: task });
    } catch (error) {
        yield put({ type: ASIGN_TASK_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(GET_TASKS, getTasks);
    yield takeEvery(ASIGN_TASK, asignTask);
}
