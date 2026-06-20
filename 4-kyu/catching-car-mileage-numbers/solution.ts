export function isInteresting(n: number, awesomePhrases: number[]): number {
	const checkInteresting = (n: number, awesomePhrases: number[]): boolean => {
		if (n < 100) return false;
		const str = n.toString();
		const strArray = [...str];
		if (strArray.slice(1).every((value) => value === "0")) return true;
		if (strArray.every((value) => value === str[0])) return true;
		if ("1234567890".includes(str)) return true;
		if ("9876543210".includes(str)) return true;
		if (strArray.join("") === [...strArray].reverse().join("")) return true;
		if (awesomePhrases.some((phrase) => phrase === n)) return true;
		return false;
	};
	if (checkInteresting(n, awesomePhrases)) return 2;
	else if (checkInteresting(n + 1, awesomePhrases)) return 1;
	else if (checkInteresting(n + 2, awesomePhrases)) return 1;
	else return 0;
}
