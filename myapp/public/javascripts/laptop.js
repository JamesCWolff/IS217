//Prototype Laptop
var laptop = {
	pcPrice : 1000,
	screenPrice : 0,
	drivePrice : 0,
	memoryPrice : 0,
	screenSize : "11 inches",
	hardDrive : "128GB",
	memorySize : "8GB",

	changeScreen:function(s,p){
		this.screenSize = s;
		this.screenPrice = p;
	},

	changeDrive:function(s,p){
		this.hardDrive = s;
		this.drivePrice = p;
	},

	changeMemory:function(s,p){
		this.memorysize = s;
		this.memoryPrice = p;
	}
};

var pc = laptop;

//Decorator Pattern
pc.price = function(){
	return this.pcPrice + this.screenPrice + this.drivePrice + this.memoryPrice;
};