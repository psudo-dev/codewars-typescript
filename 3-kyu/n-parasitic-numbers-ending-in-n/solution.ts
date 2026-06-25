export function calculateSpecial(lastDigit: number, base: number): string {
	const hex = "0123456789ABCDEF";
	const denom = lastDigit * base - 1;
	const calcRemainder = (remainder: number) => (remainder * base) % denom;
	let remainder = calcRemainder(lastDigit);
	const result = [];
	while (remainder !== lastDigit) {
		if (remainder >= base) result.push(remainder % base);
		else result.push(remainder);
		remainder = calcRemainder(remainder);
	}
	result.push(lastDigit);
	return result.map((el) => hex.charAt(el)).join("");
}

export function calculateSpecial2(lastDigit: number, base: number): string {
	const hex = "0123456789ABCDEF";
	const denom = lastDigit * base - 1;
	function nextRound(remainder: number) {
		const product = remainder * base;
		const digit = Math.trunc(product / denom);
		const nextRemainder = product % denom;
		return { digit, nextRemainder };
	}
	let { digit, nextRemainder } = nextRound(lastDigit);
	const result = [];
	while (nextRemainder !== lastDigit) {
		result.push(digit);
		const next = nextRound(nextRemainder);
		digit = next.digit;
		nextRemainder = next.nextRemainder;
	}
	result.push(lastDigit);
	return result.map((el) => hex.charAt(el)).join("");
}
