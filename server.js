var express = require('express');
var passport = require('passport');
var credentialSetup = require('./serverAssist/passport.js')
var app = express();

//initialize passport for spotify strategy
credentialSetup.passportInit(app, passport);
//get credentials from the passport setup
var credentials = credentialSetup.credentials;

// middleware
require('./serverAssist/middleware.js')(app, express, passport, credentials);


console.log('listening on port 8888');
app.listen(8888);
