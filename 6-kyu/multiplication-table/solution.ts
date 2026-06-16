export function multiplicationTable(size: number): number[][] {
	const maxEl = size * size;
	const result: number[][] = [];
	let line: number[] = [];
	let maxLineEl = size;
	let index = 1;
	for (let el = 1; el <= maxEl; el = index * (result.length + 1)) {
		if (el <= maxLineEl) {
			line.push(el);
			if (el === maxLineEl) {
				result.push(line);
				if (el === maxEl) {
					break;
				}
				index = 0;
				line = [];
				maxLineEl += size;
			}
		}
		index++;
	}
	return result;
}

export function multiplicationTable2(size: number): number[][] {
	const base: number[] = [];
	const result: number[][] = [];
	for (let i = 1; i <= size; i++) {
		base.push(i);
	}
	result.push(base);
	for (let i = 2; i <= size; i++) {
		const line = base.map((el) => el * i);
		result.push(line);
	}
	return result;
}

export function multiplicationTable3(size: number): number[][] {
	return Array.from({ length: size }, (_, rowIndex) => {
		return Array.from({ length: size }, (_, elIndex) => {
			return (rowIndex + 1) * (elIndex + 1);
		});
	});
}

export function multiplicationTable4(size: number): number[][] {
	return Array.from({ length: size }, (_, index) =>
		Array.from({ length: size }, (_, index) => index + 1).map(
			(el) => el * (index + 1),
		),
	);
}
