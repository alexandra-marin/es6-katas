export class FizzBuzz {
	constructor() {}
	print(number) {
		if (number === 3) {
			return "fizz";
        } 
		if (number === 5) {
			return "buzz";
        }
        if (number === 3 * 5) {
            return "fizzbuzz";
		}
        else {
            return number;
		}
	}
}