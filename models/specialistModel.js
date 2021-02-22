const getDb = require('./db').getDb; // import db connection


class Specialist {
	constructor(name, position, office, age, startDate, sallary) {
		this.name = name;
		this.position = position;
		this.office = office;
		this.age = age;
		this.startDate = startDate;
		this.sallary = sallary;
	}

	save() {
		const db = getDb();
		let dbOperationResult;

		dbOperationResult = db.collection('aboutSpecialistsDB').insertOne(this);

		return dbOperationResult.then(result => {
			console.log('success add info about specialist (Model)');
		})
		.catch(error => {
			console.log('failed add info about specialist (Model)');
		});
	}

	static fetchAll() {
		const db = getDb();

		return db.collection('aboutSpecialistsDB').find().toArray()
			.then(about => {
				return about;
			})
			.then(error => {
				return error;
			})
	}

}

module.exports = Specialist;