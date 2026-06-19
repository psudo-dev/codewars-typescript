export const decompose = (n: number): null | number[] => {
	if (n === 1) return null;
	let result: number[] = [];
	const squares = new Map<number, number>();
	const restMap = new Map<number, number[] | null>();
	for (let i = n - 1; i > 0; i--) {
		squares.set(i, i * i);
	}
	const fn = (rest: number): null | number[] => {
		const cachedRest = restMap.get(rest);
		if (cachedRest !== undefined) {
			return cachedRest;
		}
		for (const [key, value] of squares.entries()) {
			if (rest === value) {
				restMap.set(rest, [key]);
				return [key];
			}
			if (rest > value) {
				if (rest - value >= value) {
					return null;
				}
				const newRest = rest - value;
				const array = fn(newRest);
				if (array) {
					return [key, ...array];
				}
			}
		}
		restMap.set(rest, null);
		return null;
	};
	for (let i = n - 1; i > 0; i--) {
		const nextSq = i * i;
		const rest = n * n - nextSq;
		squares.delete(i);
		const array = fn(rest);
		if (rest > nextSq) {
			return null;
		}
		if (array !== null) {
			result = [i, ...array];
			break;
		}
	}
	if (result.length > 1) {
		return result.sort((a, b) => a - b);
	} else {
		return null;
	}
};

export const decompose2 = (n: number): null | number[] => {
	if (n <= 1) return null;
	const getDecomposed = (
		rest: number,
		maxNumber: number,
	): null | number[] => {
		if (rest < 1 || maxNumber < 1) return null;
		for (let number = maxNumber; number >= 1; number--) {
			const square = number * number;
			if (rest === square) {
				return [number];
			}
			if (rest - square >= square) return null;
			const partialResult = getDecomposed(rest - square, number - 1);
			if (partialResult) return [number, ...partialResult];
		}
		return null;
	};
	const result = getDecomposed(n * n, n - 1);
	if (!result || result.length <= 1) return null;
	return result.sort((a, b) => a - b);
};

console.log(decompose2(121));
