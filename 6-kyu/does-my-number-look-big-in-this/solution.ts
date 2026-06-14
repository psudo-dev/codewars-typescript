export function narcissistic(value: number): boolean {
	const digits = value.toString().split("");
	const power = digits.length;
	let total = 0;
	digits.forEach((number) => {
		total += (+number) ** power;
	});
	return total === value;
}

export function narcissistic2(value: number): boolean {
	const digits = value.toString().split("");
	const power = digits.length;
	const total = digits.reduce((sum, num) => sum + (+num) ** power, 0);
	return total === value;
}
