$(document).ready(function(){

	//var laptop = JSON.parse($("#localdata").val());
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

	price();

	function price(){
		$("#pcPrice").val(pc.price());
		$("#price").html(pc.price()) ;
	}

	$("input[name='screenSize']").on('change', function(){
		var radio = $('input[name=screenSize]:checked', '#storeForm').val();

		if(radio == '15 inches')
			pc.changeScreen('15 inches',200);
		else if(radio == '11 inches')
			pc.changeScreen('11 inches',0);

		price();
	});

	$("input[name='hardDrive']").on('change', function(){
		var radio = $('input[name=hardDrive]:checked', '#storeForm').val();

		if(radio == '256GB')
			pc.changeDrive('256GB',200);
		else if(radio == '128GB')
			pc.changeDrive('128GB',0);

		price();
	});

	$("input[name='memorySize']").on('change', function(){
		var radio = $('input[name=memorySize]:checked', '#storeForm').val();

		if(radio == '16GB')
			pc.changeMemory('16GB',200);
		else if(radio == '8GB')
			pc.changeMemory('8GB',0);

		price();
	});

});