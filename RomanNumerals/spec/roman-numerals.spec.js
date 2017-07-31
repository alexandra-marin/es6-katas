import { RomanNumerals } from "./../app/roman-numerals";

describe("RomanNumerals", function() {
	let numerals;

	beforeEach(() => {
        numerals = new RomanNumerals();
    });

	it("should return I for 1", function() {
		var number = numerals.get(1);
		expect(number).toBe("I");
    });
    
    it("should return V for 5", function() {
		var number = numerals.get(5);
		expect(number).toBe("V");
	});
});
