export const isPangram = (phrase: string): boolean => {
	const alphabet = Array.from({ length: 26 }, (_, index) => {
		return String.fromCharCode(97 + index);
	});
	const letters: string[] = [];
	const phraseArray = phrase.toLowerCase().split("");
	alphabet.forEach((letter) => {
		const char = phraseArray.find((char) => char === letter);
		if (char) letters.push(char);
	});
	return letters.length === 26;
};

const isPangram2 = (phrase: string): boolean => {
	const letters = phrase.toLowerCase().replace(/[^a-z]/g, "");
	const uniqueLetters = new Set(letters);
	return uniqueLetters.size === 26;
};

const isPangram3 = (phrase: string): boolean => {
	const alphabet = Array.from({ length: 26 }, (_, index) => {
		return String.fromCharCode(97 + index);
	});
	const phraseLetters = new Set(phrase.toLowerCase());
	const intersection = alphabet.filter((letter) => phraseLetters.has(letter));

	return intersection.length === 26;
};

const isPangram4 = (phrase: string): boolean => {
	const alphabet = Array.from({ length: 26 }, (_, index) => {
		return String.fromCharCode(97 + index);
	});
	const phraseLetters = new Set(phrase.toLowerCase());
	return alphabet.every((letter) => phraseLetters.has(letter));
};
