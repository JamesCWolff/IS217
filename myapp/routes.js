module.exports = function(app){
	//console.log("routes");

	//var laptop = require('./models/laptop');
	var store = require('./controlers/storecontroler');
	//console.log("routes2");
	app.get('/', store.showStore);

	//console.log("routes3");
}