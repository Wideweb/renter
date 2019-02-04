export default class Task {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.owner = data.owner.name;
        this.assignee = data.assignee.name;
        this.createdAt = data.createdAt;
	}
}