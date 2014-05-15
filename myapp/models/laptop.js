//Question 5 Use of one other design pattern
//For question 5 I used a prototype design pattern to create the initial laptop
//I chose this because prototypes and decorators synergize well together. 
var laptop = {
	pcPrice : 1000,
	screenPrice : 0,
	drivePrice : 0,
	memoryPrice : 0,
	screenSize : "11 inches",
	hardDrive : "128GB",
	memorySize : "8GB",

};

var pc = laptop;

//Question 4 Use of the decorator pattern for the configuration

pc.changeScreen = function(s,p){
	this.screenSize = s;
	this.screenPrice = p;
},

pc.changeDrive=function(s,p){
	this.hardDrive = s;
	this.drivePrice = p;
},

pc.changeMemory=function(s,p){
	this.memorysize = s;
	this.memoryPrice = p;
}

pc.price = function(){
	return this.pcPrice + this.screenPrice + this.drivePrice + this.memoryPrice;
};

module.exports = exports = pc;