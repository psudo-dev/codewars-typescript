export function going(n: number): number {
	const resultMap = new Map<number, number>();
	resultMap.set(n, 1);
	for (let k = n - 1; k >= 1; k--) {
		const previous = resultMap.get(k + 1)!;
		resultMap.set(k, previous * (1 / (k + 1)));
	}
	const result = [...resultMap.values()].reduce(
		(acc, value) => acc + value,
		0,
	);
	return result;
}

export function going2(n: number): number {
	let result = 1;
	let previous = 1;
	for (let k = n - 1; k >= 1; k--) {
		previous *= 1 / (k + 1);
		result += previous;
	}
	return result;
}

export function going3(n: number): number {
	const factorialMap = new Map<number, number>();
	factorialMap.set(1, 1);
	for (let i = 2; i <= n; i++) {
		const previous = factorialMap.get(i - 1)!;
		factorialMap.set(i, i * previous);
	}
	console.log(factorialMap);
	const result =
		[...factorialMap.values()].reduce((acc, value) => acc + value, 0) /
		factorialMap.get(n)!;
	return result;
}
