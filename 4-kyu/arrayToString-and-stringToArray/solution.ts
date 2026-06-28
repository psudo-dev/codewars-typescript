export function arrayToString(arr: number[]): string {
	interface Data {
		first: number;
		elements: number;
		diff: number;
		priority: boolean;
	}
	const dataMap = new Map<number, Data>();
	let id = 0;
	let prevDiff: number | undefined;
	for (let i = 0; i < arr.length; i++) {
		const currEl = arr[i];
		const nextEl1 = arr[i + 1];
		const nextEl2 = arr[i + 2];
		const nextEl3 = arr[i + 3];
		const nextEl4 = arr[i + 4];
		const nextDiff1 = nextEl1 - currEl;
		const nextDiff2 = nextEl2 - nextEl1;
		const nextDiff3 = nextEl3 - nextEl2;
		const nextDiff4 = nextEl4 - nextEl3;
		let data: Data;
		if (dataMap.has(id)) {
			data = dataMap.get(id)!;
			data.elements++;
		} else {
			const isPriority =
				nextDiff1 === nextDiff2 && nextDiff2 !== nextDiff3;

			data = {
				first: currEl,
				elements: 1,
				diff: nextDiff1,
				priority: isPriority,
			};
		}

		dataMap.set(id, data);

		const nextIsPriority =
			nextDiff1 !== nextDiff2 &&
			nextDiff2 === nextDiff3 &&
			nextDiff3 != nextDiff4;
		const isGroup = data.elements >= 3;
		const isSolo = data.elements === 1 && nextDiff1 !== nextDiff2;
		const isLastEl = prevDiff !== nextDiff1;

		if (isGroup) {
			if (!data.priority && nextIsPriority) id++;
			else if (isLastEl) id++;
		} else {
			if (isSolo) id++;
		}
		prevDiff = nextDiff1;
	}

	const result = [...dataMap.values()]
		.map((value) => {
			const { first, elements, diff } = value;
			let dataDiff;
			if (diff > 0) {
				dataDiff = `+${diff}`;
			} else if (diff < 0) {
				dataDiff = `${diff}`;
			} else {
				dataDiff = "";
			}
			if (elements === 1) return `${first}`;
			else return `${first}:${elements}${dataDiff}`;
		})
		.join(",");
	return result;
}

export function stringToArray(str: string): number[] {
	const result = str.split(",").flatMap((group) => {
		const regexp = /^(-?\d+)(?::(\d+))?([+-]\d+)?$/;
		const match = group.match(regexp);
		if (!match) return 0;
		const [_, firstEl, length, diff] = match;
		const element = [Number(firstEl ?? 0)];
		for (let i = 1; i < Number(length ?? 0); i++) {
			element.push(Number(firstEl) + i * Number(diff ?? 0));
		}
		return element;
	});
	return result;
}
