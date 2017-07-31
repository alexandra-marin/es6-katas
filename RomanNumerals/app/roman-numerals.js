const numerals = {
    // Additive
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
    1000: "M",
    // Subtracted
    4: "IV",
	9: "IX",
	40: "XL",
	90: "XC",
	400: "CD",
	900: "CM",
};

export class RomanNumerals {
	get(number) {
		if (numerals.hasOwnProperty(number)) {
			return numerals[number];
        }
        else {
			return this.compute(number);
		}
	}

	compute(number) {
		var result = "";
		var firstLower;

		while (number > 1) {
			firstLower = this.getFirstLowerThan(number);
			result += numerals[firstLower];
            
            number = number - firstLower;
            if (numerals.hasOwnProperty(number)) {
                result += numerals[number];
                break;
            }
		}

		return result;
    }
    
    getFirstLowerThan(number) {
        return Object.keys(numerals)
				.reverse()
                .find(x => x < number);
    }
}
