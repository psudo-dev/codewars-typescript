export const digitize = (n: number): number[] => {
	return [...n.toString()] // turn into an array of strings
		.map(Number) // transform strings into numbers
		.reverse(); // reverse the array
};
