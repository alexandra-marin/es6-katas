import { RomanNumerals } from "./../app/roman-numerals";
var should = require('should');

describe("RomanNumerals", function() {
	let numerals;

	beforeEach(() => {
        numerals = new RomanNumerals();
    });

	it("should return I for 1", function() {
        var number = numerals.get(1);
        number.should.be.exactly("I");
    });
    
    it("should return V for 5", function() {
		var number = numerals.get(5);
        number.should.be.exactly("V");
	});
});
