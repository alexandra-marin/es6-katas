import { RomanNumerals } from "./../app/roman-numerals";
var should = require('should');

describe("RomanNumerals", function() {
	let numerals;

	beforeEach(() => {
        numerals = new RomanNumerals();
    });

	it("should return single digits representation", function() {
        numerals.get(1)   .should.be.exactly("I");
        numerals.get(5)   .should.be.exactly("V");
        numerals.get(10)  .should.be.exactly("X");
        numerals.get(50)  .should.be.exactly("L");
        numerals.get(100) .should.be.exactly("C");
        numerals.get(500) .should.be.exactly("D");
        numerals.get(1000).should.be.exactly("M");
    });

    it("should return added digits representation", function() {
        numerals.get(2)   .should.be.exactly("II");
        numerals.get(3)   .should.be.exactly("III");
        numerals.get(7)   .should.be.exactly("VII");
        numerals.get(8)   .should.be.exactly("VIII");
        numerals.get(11)  .should.be.exactly("XI");
        numerals.get(152) .should.be.exactly("CLII");
        numerals.get(153) .should.be.exactly("CLIII");
        numerals.get(1550).should.be.exactly("MDL");
        numerals.get(1560).should.be.exactly("MDLX");
        numerals.get(1551).should.be.exactly("MDLI");
        numerals.get(1553).should.be.exactly("MDLIII");
    });

    it("should return subtracted digits representation", function() {
        numerals.get(4).should.be.exactly("IV");
        numerals.get(49).should.be.exactly("XLIX");
        numerals.get(1649).should.be.exactly("MDCXLIX");
    });
});
