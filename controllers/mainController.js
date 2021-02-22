const Specialist    = require('../models/specialistModel');


exports.getData = (req, res) => {
	Specialist.fetchAll()
		.then(specialist => {
			res.render('index.ejs', {
				pageTitle: 'Home',
				specialists: specialist
			});
		})
		.catch(error => {
			console.log('Failed to fetch for specialist (Get Controller)');
		});
}

exports.postData = (req, res) => {
	const specialist = new Specialist(
		req.body.name,
		req.body.position,
		req.body.office,
		req.body.age,
		req.body.startDate,
		'$' + req.body.salary
	);

	specialist.save()
		.then(result => {
			console.log('save new specialist success (Post Controller)');
			res.redirect('/');
		})
		.catch(error => {
			console.log('failed save new specialist (Post Controller)');
		})
}

exports.postFetch = (req, res) => {
	let specialistsArray = [];
	Specialist.fetchAll()
		.then(specialist => {
			for (let i =0; i < specialist.length; i++) {
				specialistsArray[i] = [
					specialist[i].name,
					specialist[i].position,
					specialist[i].office,
					specialist[i].age,
					specialist[i].startDate,
					specialist[i].sallary,
				];
			}
			res.send(specialistsArray);
		})
		.catch(error => {
			console.log('Failed to fetch for specialist (Post Controller)');
		})

}