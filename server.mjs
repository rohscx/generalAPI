import express from 'express';
import mongoose from 'mongoose';
import * as modelSchema from './api/models/generalModel'; // ties the schema to
import bodyParser from 'body-parser';
import {appRoutes} from './api/routes/generalRoutes';


const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
const options = {
  useMongoClient: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://generalapi_generalmongo_1/generalAPI',options);
// used with POST, body type raw JSON
app.use(bodyParser.raw({ extended: true }));
// used with POST, body type x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

appRoutes(app); //register the route


app.listen(port);
// error checking. responds to routes that do not exisist
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('General RESTful API server started on: ' + port);
