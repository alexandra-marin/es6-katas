import { FizzBuzz } from "./../app/fizzbuzz";

describe("FizzBuzz", function() {
	let fizzbuzz;

	beforeEach(() => {
		fizzbuzz = new FizzBuzz();
	});
    
    it("should print 42 for 42", function() {
		var result = fizzbuzz.print(42);
		expect(result).toBe(42);
	});

	it("should print Fizz for 3", function() {
		var result = fizzbuzz.print(3);
		expect(result).toBe("fizz");
	});

	it("should print Buzz for 5", function() {
		var result = fizzbuzz.print(5);
		expect(result).toBe("buzz");
	});

	it("should print FizzBuzz for 3 and 5", function() {
		var result = fizzbuzz.print(3 * 5);
		expect(result).toBe("fizzbuzz");
    });
});
