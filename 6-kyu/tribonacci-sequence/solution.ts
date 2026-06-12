export function tribonacci(
	signature: [number, number, number],
	n: number,
): number[] {
	if (n === 0) {
		return [];
	}
	const result: number[] = [];
	for (let i = 0; i < n; i++) {
		if (i < 3) {
			result[i] = signature[i];
		} else {
			result[i] = result[i - 3] + result[i - 2] + result[i - 1];
		}
	}
	return result;
}

export function tribonacci2(
	signature: [number, number, number],
	n: number,
): number[] {
	if (n <= 3) {
		signature.slice(0, n);
	}
	const result = [...signature];
	for (let i = 3; i < n; i++) {
		result[i] = result[i - 3] + result[i - 2] + result[i - 1];
	}
	return result;
}

export function tribonacci3(
	[a, b, c]: [number, number, number],
	n: number,
): number[] {
	const result = [a, b, c];
	for (let i = 3; i < n; i++) {
		result[i] = result[i - 3] + result[i - 2] + result[i - 1];
	}
	return result.slice(0, n);
}
