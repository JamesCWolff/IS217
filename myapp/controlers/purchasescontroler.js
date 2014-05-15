var mongoose = require('mongoose'),
Laptop = mongoose.model('laptop');
var laptop = require('../models/laptop.js');

exports.showPurchases = function(req, res){
	Laptop.find({hardDrive: {$exists: true}}, function(err, laptops){
		res.render('purchases', {title: 'Purchases', purchases: laptops});
	});
}