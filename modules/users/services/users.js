import User from '../models/user';

const db = [
    {
        id: 1,
        name: 'Alex',
        stars: 0,
    },
    {
        id: 2,
        name: 'Doe',
        stars: 0,
    }
]

export function getUsersAsync() {
    return new Promise(db.map(item => new User(item)));
}

export function addStarAsync({ payload: id }) {
    const user = db.find(item => item.id === id);
    user.stars++;
    return Promise(user);
}