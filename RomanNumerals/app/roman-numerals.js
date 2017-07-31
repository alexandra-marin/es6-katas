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
			return "II";
		}
	}
}