const numerals = {
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M"
};

export class RomanNumerals {
	get(number) {
		if (numerals.hasOwnProperty(number)) {
			return numerals[number];
		} else {
			return this.compute(number);
		}
	}

	compute(number) {
		var result = "";
		var firstLower = Object.keys(numerals).reverse().find(x => x < number);
		result += numerals[firstLower];
		var difference = number - firstLower;

		if (difference > 1) {
			firstLower = Object.keys(numerals)
				.reverse()
				.find(x => x < difference);
			result += numerals[firstLower];
			difference = difference - firstLower;
		}

		return result + numerals[1].repeat(difference);
	}
}
