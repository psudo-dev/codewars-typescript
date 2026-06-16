export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
	if (!listOfArt.length || !listOfCat.length) return "";
	const bookCount = new Map<string, number>();
	const catCount = new Map<string, number>();
	const result: string[] = [];
	listOfArt.forEach((book) => {
		const bookArray = book.split(" ");
		bookCount.set(bookArray[0], +bookArray[1]);
	});
	listOfCat.forEach((cat, index) => {
		catCount.set(cat, 0);
		for (const [key, value] of bookCount) {
			if (key[0] === cat) {
				catCount.set(cat, (catCount.get(cat) ?? 0) + value);
			}
		}
		result[index] = `(${cat} : ${catCount.get(cat)})`;
	});
	return result.join(" - ");
};

export const stockList2 = (
	listOfArt: string[],
	listOfCat: string[],
): string => {
	if (!listOfArt.length || !listOfCat.length) return "";
	const catCount = new Map<string, number>();
	const result: string[] = [];
	listOfCat.forEach((cat, index) => {
		catCount.set(cat, 0);
		listOfArt.forEach((book) => {
			const bookArray = book.split(" ");
			if (bookArray[0][0] === cat) {
				catCount.set(cat, (catCount.get(cat) ?? 0) + +bookArray[1]);
			}
		});
		result[index] = `(${cat} : ${catCount.get(cat)})`;
	});
	return result.join(" - ");
};

export const stockList3 = (
	listOfArt: string[],
	listOfCat: string[],
): string => {
	if (!listOfArt.length || !listOfCat.length) return "";
	const catStock = new Map<string, number>();
	for (const book of listOfArt) {
		const [code, stock] = book.split(" ");
		catStock.set(code[0], (catStock.get(code[0]) ?? 0) + Number(stock));
	}
	const result = listOfCat.map((cat) => {
		const total = catStock.get(cat) ?? 0;
		return `(${cat} : ${total})`;
	});
	return result.join(" - ");
};

export const stockList4 = (
	listOfArt: string[],
	listOfCat: string[],
): string => {
	if (!listOfArt.length || !listOfCat.length) return "";
	const catStock = new Map<string, number>();
	for (const book of listOfArt) {
		const [code, stock] = book.split(" ");
		catStock.set(code[0], (catStock.get(code[0]) ?? 0) + Number(stock));
	}
	const result: string[] = [];
	listOfCat.forEach((cat, i) => {
		const total = catStock.get(cat) ?? 0;
		result[i] = `(${cat} : ${total})`;
	});
	return result.join(" - ");
};
