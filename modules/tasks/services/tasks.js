import Task from '../models/task';

const db = [
    {
        id: 1,
        owner: { id: 1, name: 'Alex' },
        createdAt: new Date(2019, 2, 3).getTime(),
        asignee: null,
    },
    {
        id: 2,
        owner: { id: 2, name: 'Doe' },
        createdAt: new Date(2019, 2, 4).getTime(),
        asignee: null,
    }
]

export function getTasksAsync() {
    return new Promise(db.map(item => new Task(item)));
}

export function asignTaskAsync({ payload: id }) {
    const task = db.find(item => item.id === id);
    task.asignee = { name: 'you' };
    return Promise(task);
}