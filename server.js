var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/generalModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/generalAPI');
app.use(bodyParser.raw({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/generalRoutes'); //importing route
routes(app); //register the route


app.listen(port);
// error checking. responds to routes that do not exisist
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('General RESTful API server started on: ' + port);
