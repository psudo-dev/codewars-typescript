export const towerBuilder = (nFloors: number): string[] => {
	const result: string[] = [];
	const maxStars = 2 * nFloors - 1;
	for (let floor = 1; floor <= nFloors; floor++) {
		const line: string[] = [];
		const stars = 2 * floor - 1;
		const spaces = (maxStars - stars) / 2;
		line.push(buildStr(" ", spaces));
		line.push(buildStr("*", stars));
		line.push(buildStr(" ", spaces));
		result.push(line.join(""));
	}
	return result;
};

function buildStr(char: string, count: number) {
	const array: string[] = [];
	for (let i = 0; i < count; i++) {
		array.push(char);
	}
	return array.join("");
}

export const towerBuilder2 = (nFloors: number): string[] => {
	const result: string[] = [];
	const maxStars = 2 * nFloors - 1;

	for (let floor = 1; floor <= nFloors; floor++) {
		const starsCount = 2 * floor - 1;
		const spacesCount = (maxStars - starsCount) / 2;

		const spaces = " ".repeat(spacesCount);
		const stars = "*".repeat(starsCount);

		result.push(`${spaces}${stars}${spaces}`);
	}

	return result;
};
