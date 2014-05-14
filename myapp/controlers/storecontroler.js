//var laptop = require('../models/laptop.js');
//console.log("store controler1");

exports.showStore = function(req, res){
	//console.log("store controler2");
	res.render('store', {title: 'Laptop Store'});
}