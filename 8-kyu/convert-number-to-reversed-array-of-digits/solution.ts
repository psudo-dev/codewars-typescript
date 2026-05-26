export const digitize = (n: number): number[] => {
	return n
		.toString() // turn into a string
		.split("") // return an array
		.map((numberString) => Number(numberString)) // transform strings into numbers
		.reverse(); // reverse the array
};
