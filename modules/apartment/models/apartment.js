export default class Apartment {
	constructor(data) {
		this.id = `${data.id}`;
		this.address = data.location.address;
		this.amount = `${data.price.amount}`;
	}
}