var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var path = require('path');

var app = express();

//Middleware module
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

var apiPortal = require('./routes/apiPortal')(app, express);
app.use('/', apiPortal);


app.listen(config.port, function(err){
	if(err) {
		console.log(err);
	} else {

		console.log("Listening on port " + config.port );
	}
});