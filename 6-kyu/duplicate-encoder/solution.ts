export function duplicateEncode(word: string): string {
	word = word.toLowerCase();
	const letters = word.split("");
	return letters
		.map((letter) => {
			const first = word.indexOf(letter);
			const last = word.lastIndexOf(letter);
			return first === last ? "(" : ")";
		})
		.join("");
}

function duplicateEncode2(word: string): string {
	const letters = word.toLowerCase().split("");
	const countMap: Record<string, number> = {};
	for (const letter of letters) {
		if (countMap[letter] === undefined) {
			countMap[letter] = 1;
		} else {
			countMap[letter] += 1;
		}
	}
	return letters
		.map((letter) => {
			return countMap[letter] > 1 ? ")" : "(";
		})
		.join("");
}
