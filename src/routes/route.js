const express = require('express');
const Router = express.Router();
const vehical = require('../controllers/vehicleController')
const violation = require('../controllers/violationController')
const rateLimit = require('../middleware/rateLimitter');

//=====( Routes for Vehicles )

Router.post('/vehicleCreate',rateLimit, vehical.create);
Router.get('/vehicleRead',rateLimit, vehical.read);
Router.patch('/vehicleUpdate/:id',rateLimit, vehical.update);
Router.delete('/vehicleDelete/:id',rateLimit, vehical.deleteData);

//=====( Routes for Violation )

Router.post('/violationCreate',rateLimit, violation.create);
Router.get('/violationRead',rateLimit, violation.read);
Router.patch('/violationUpdate/:id',rateLimit, violation.update);
Router.delete('/violationDelete/:id',rateLimit, violation.deleteData);


module.exports = Router