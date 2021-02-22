require('dotenv').config();
const express       = require('express');
const ejs           = require('ejs');
const bodyParser    = require('body-parser');
const mongoConnect  = require('./models/db').mongoConnect;
const mainRouter    = require('./routes/mainRouter');
const PORT          = process.env.PORT || 3000;
const app           = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// routes
app.use(mainRouter);

// show page 404
app.use((req, res) => {
	res.status(404).render('404.ejs');
});

mongoConnect(() => {
	app.listen(PORT, () => {
		console.log(`${PORT} is running`);
	});
})