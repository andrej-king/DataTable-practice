const mongodb       = require('mongodb');
const MongoClient   = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
	MongoClient.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.uqgyu.mongodb.net/aboutSpecialistsDB?retryWrites=true&w=majority`, {useUnifiedTopology: true})
		.then(client => {
			console.log('connected');
			_db = client.db();
			cb();
		})
		.catch(error => {
			throw error;
		});
}

const getDb = () => {
	if (_db) {
		return _db;
	}
	throw 'No db found';
}

exports.mongoConnect    = mongoConnect;
exports.getDb           = getDb;