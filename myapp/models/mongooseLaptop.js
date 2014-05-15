var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var laptop = new Schema({
	price: Number,
	screenSize: String,
	hardDrive: String,
	memorySize: String
});

module.exports = mongoose.model('laptop', laptop);