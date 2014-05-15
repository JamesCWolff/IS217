var mongoose = require('mongoose'),
mongooseLaptop = mongoose.model('laptop');

exports.showStore = function(req, res){
	res.render('store', {title: 'Laptop Store:'});
}

//Question2 saving the quote
exports.save = function(req,res){
	var laptop = new mongooseLaptop({
		price: req.body['pcPrice'],
		screenSize: req.body['screenSize'],
		hardDrive: req.body['hardDrive'],
		memorySize: req.body['memorySize']
	})

	laptop.save(function(err,laptops){
        if(err) return console.error(err);
    });

	res.render('store', {title: 'Laptop Store: Come again!'});
}