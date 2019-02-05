export default class Task {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.owner = data.owner.name;
		this.ownerId = data.owner.id;
        this.assignee = data.assignee.name;
        this.assigneeId = data.assignee.id;
        this.createdAt = data.createdAt;
	}
}