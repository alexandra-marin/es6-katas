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
        var firstLower = Object.keys(numerals).find(x => x < number);
        var difference = number - firstLower;
        
        return numerals[firstLower] + numerals[firstLower].repeat(difference);
	}
}
