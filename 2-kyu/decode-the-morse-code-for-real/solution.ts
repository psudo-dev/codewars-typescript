const MORSE_CODE: Record<string, string> = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

let decodeBitsAdvanced = function (bits: string): string {
	const trimmed = bits.replace(/^0+|0+$/g, "");
	console.log(trimmed);
	if (trimmed === "") return "";
	const symbolsSet = [
		...new Set(
			trimmed
				.match(/(0+|1+)/g)
				?.sort((a, b) => a.length - b.length)
				.map((el) => el.length),
		),
	];
	const symbolsSetOne = [
		...new Set(
			trimmed
				.match(/(1+)/g)
				?.sort((a, b) => a.length - b.length)
				.map((el) => el.length),
		),
	];
	const kmeans = (k1: number, k2: number) => {
		const min = [];
		const mid = [];
		for (let i = 0; i < symbolsSetOne.length; i++) {
			const k11 = Math.abs(symbolsSetOne[i] - k1);
			const k12 = Math.abs(symbolsSetOne[i] - k2);
			if (k11 < k12) {
				min.push(symbolsSetOne[i]);
			} else {
				mid.push(symbolsSetOne[i]);
			}
		}
		return [min, mid];
	};
	let k1 = symbolsSetOne[0];
	let k2 = symbolsSetOne[symbolsSetOne.length - 1];
	let min: number[] = [];
	let mid: number[] = [];
	while (
		min.length !== kmeans(k1, k2)[0].length ||
		mid.length !== kmeans(k1, k2)[1].length
	) {
		min = kmeans(k1, k2)[0];
		mid = kmeans(k1, k2)[1];
		k1 = min.reduce((acc, curr) => acc + curr, 0) / min.length;
		k2 = mid.reduce((acc, curr) => acc + curr, 0) / mid.length;
	}
	if (symbolsSet.length === 1) {
		min = [symbolsSet[0]];
		mid = [];
	}
	if (symbolsSet.length === 2) {
		if (symbolsSet[1] / symbolsSet[0] > 4) {
			min = [symbolsSet[0]];
			mid = [];
		} else if (symbolsSet[1] / symbolsSet[0] >= 2) {
			min = [symbolsSet[0]];
			mid = [symbolsSet[1]];
		} else {
			min = [symbolsSet[0], symbolsSet[1]];
			mid = [];
		}
	}
	mid.push(mid[mid.length - 1] + 1);
	mid.push(mid[mid.length - 1] + 1);
	const result = [];
	let one = 0;
	let zero = 0;
	for (let i = 0; i < trimmed.length; i++) {
		const next = trimmed[i + 1];
		if (trimmed[i] === "1") {
			one += 1;
			if (next === "0" || next === undefined) {
				result.push(min.includes(one) ? "." : "-");
				one = 0;
			}
		} else {
			zero += 1;
			if (next === "1") {
				if (min.includes(zero)) result.push("");
				else if (mid.includes(zero)) result.push(" ");
				else result.push("   ");
				zero = 0;
			}
		}
	}
	return result.join("");
};

let decodeMorse = function (morseCode: string): string {
	if (morseCode === "") return "";
	const wordSpacer = "   ";
	const letterSpacer = " ";
	const words = morseCode.trim().split(wordSpacer);
	const result = words
		.map((word) => {
			const decodedWord = word
				.split(letterSpacer)
				.map((letter) => MORSE_CODE[letter])
				.join("");
			return decodedWord;
		})
		.join(" ");
	return result;
};
