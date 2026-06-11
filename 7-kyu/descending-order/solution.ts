export function descendingOrder(n: number): number {
	return +String(n).split("").sort().reverse().join("");
}

export function descendingOrder2(n: number): number {
	return +String(n)
		.split("")
		.sort((a, b) => b.localeCompare(a))
		.join("");
}

export function descendingOrder3(n: number): number {
	return +String(n)
		.split("")
		.sort((a, b) => +b - +a)
		.join("");
}
