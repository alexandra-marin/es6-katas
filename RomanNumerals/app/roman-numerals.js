const numerals = {
    1: "I",
    5: "V",
}; 

export class RomanNumerals {
	get(number) {
		return numerals[number];
	}
}