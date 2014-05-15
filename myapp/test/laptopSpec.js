var expect = require("chai").expect;
var laptop = require("../models/laptop.js");

//Question 3 Unit Testing
describe("laptop", function(){
   it("should return the total value of the laptop ", function(){
        var pc = laptop;
        pc.changeScreen("15 inches",200)
        pc.changeDrive("256GB",200)
        pc.changeMemory("16GB",200)

        results = pc.price();
        expect(results).to.equal(1600);
    });

    it("should return the total value of the laptop ", function(){
        var pc = laptop;
        pc.changeScreen("15 inches",200)
        pc.changeDrive("128GB",0)
        pc.changeMemory("16GB",200)

        results = pc.price();
        expect(results).to.equal(1400);
    });

    it("should return the total value of the laptop ", function(){
        var pc = laptop;
        pc.changeScreen("15 inches",200)
        pc.changeDrive("128GB",0)
        pc.changeMemory("8BG",0)

        results = pc.price();
        expect(results).to.equal(1200);
    });

    it("should return the total value of the laptop ", function(){
        var pc = laptop;
        pc.changeScreen("11 inches",0)
        pc.changeDrive("128GB",0)
        pc.changeMemory("8BG",0)

        results = pc.price();
        expect(results).to.equal(1000);
    });
});
