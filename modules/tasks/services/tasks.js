import Task from '../models/task';

const db = [
    {
        id: 1,
        owner: { id: 1, name: 'Alex' },
        createdAt: new Date(2019, 2, 3).getTime(),
        assignee: null,
    },
    {
        id: 2,
        owner: { id: 2, name: 'Doe' },
        createdAt: new Date(2019, 2, 4).getTime(),
        assignee: null,
    }
]

export function getTasksAsync() {
    return new Promise(db.map(item => new Task(item)));
}

export function assignTaskAsync({ payload: id }) {
    const task = db.find(item => item.id === id);
    task.assignee = { name: 'you' };
    return Promise(task);
}

export function unassignTaskAsync({ payload: id }) {
    const task = db.find(item => item.id === id);
    task.assignee = null;
    return Promise(task);
}