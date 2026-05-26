export function positiveSum(arr: number[]): number {
	return arr
		.filter((number) => number > 0) // only positives
		.reduce((acc, num) => acc + num, 0); // sum of the positives
}
