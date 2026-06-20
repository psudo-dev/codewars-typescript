export function validISBN10(isbn: string): boolean {
	const match = /^\d{9}[\dx]$/i;
	if (!match.test(isbn)) return false;
	const result: number = isbn
		.toLowerCase()
		.split("")
		.reduce((acc, value, index) => {
			const number = value === "x" ? 10 : Number(value);
			return acc + (index + 1) * number;
		}, 0);
	return result % 11 === 0;
}
