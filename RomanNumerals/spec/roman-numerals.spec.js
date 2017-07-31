import { RomanNumerals } from "./../app/roman-numerals";
var should = require('should');

describe("RomanNumerals", function() {
	let numerals;

	beforeEach(() => {
        numerals = new RomanNumerals();
    });

	it("should return single digits", function() {
        numerals.get(1)   .should.be.exactly("I");
        numerals.get(5)   .should.be.exactly("V");
        numerals.get(10)  .should.be.exactly("X");
        numerals.get(50)  .should.be.exactly("L");
        numerals.get(100) .should.be.exactly("C");
        numerals.get(500) .should.be.exactly("D");
        numerals.get(1000).should.be.exactly("M");
    });
});
