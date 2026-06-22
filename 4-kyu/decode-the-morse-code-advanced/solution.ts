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
export const decodeBits = (bits: string) => {
	const trimmed = bits.replaceAll("0", " ").trim().replaceAll(" ", "0");
	const minSpacerSize = trimmed
		.match(/(0+|1+)/g)
		?.sort((a, b) => a.length - b.length)[0].length!;
	const spacer = "0".repeat(minSpacerSize);
	const dot = "1".repeat(minSpacerSize);
	const charSpacer = "0".repeat(minSpacerSize * 3);
	const wordSpacer = "0".repeat(minSpacerSize * 7);
	const words = trimmed
		.split(wordSpacer)
		.map((word) => {
			return word
				.split(charSpacer)
				.map((char) => {
					return char
						.split(spacer)
						.map((symbol) => {
							if (symbol === dot) return ".";
							else return "-";
						})
						.join("");
				})
				.join(" ");
		})
		.join("   ");
	return words;
};

export const decodeBits2 = (bits: string) => {
	const trimmed = bits.replaceAll("0", " ").trim().replaceAll(" ", "0");
	const regexp = /(0+|1+)/g;
	const minSpacerSize = trimmed
		.match(regexp)
		?.sort((a, b) => a.length - b.length)[0].length!;

	const spacer = "0".repeat(minSpacerSize);
	const dot = "1".repeat(minSpacerSize);
	const dash = "1".repeat(minSpacerSize * 3);
	const charSpacer = "0".repeat(minSpacerSize * 3);
	const wordSpacer = "0".repeat(minSpacerSize * 7);
	const words = trimmed
		.replaceAll(dash, "-")
		.replaceAll(dot, ".")
		.replaceAll(wordSpacer, "   ")
		.replaceAll(charSpacer, " ")
		.replaceAll(spacer, "");
	return words;
};

export const decodeBits3 = (bits: string) => {
	const trimmed = bits.replace(/^0+|0+$/g, "");
	const minSpacerSize = trimmed
		.match(/(0+|1+)/g)
		?.reduce((acc, value) => Math.min(acc, value.length), Infinity)!;
	const spacer = "0".repeat(minSpacerSize);
	const dot = "1".repeat(minSpacerSize);
	const charSpacer = "0".repeat(minSpacerSize * 3);
	const wordSpacer = "0".repeat(minSpacerSize * 7);
	const words = trimmed
		.split(wordSpacer)
		.map((word) => {
			return word
				.split(charSpacer)
				.map((char) => {
					return char
						.split(spacer)
						.map((symbol) => {
							if (symbol === dot) return ".";
							else return "-";
						})
						.join("");
				})
				.join(" ");
		})
		.join("   ");
	return words;
};

export const decodeBits4 = (bits: string) => {
	const trimmed = bits.replace(/^0+|0+$/g, "");
	const minSpacerSize = trimmed
		.match(/(0+|1+)/g)
		?.reduce((acc, value) => Math.min(acc, value.length), Infinity)!;

	const result: string[] = [];
	let one = 0;
	let zero = 0;

	for (let i = 0; i < trimmed.length; i++) {
		const next = trimmed[i + 1];
		if (trimmed[i] === "1") {
			one += 1;
			if (next === "0" || next === undefined) {
				result.push(one === minSpacerSize ? "." : "-");
				one = 0;
			}
		} else {
			zero += 1;
			if (next === "1") {
				if (zero === minSpacerSize * 7) result.push("   ");
				else if (zero === minSpacerSize * 3) result.push(" ");
				zero = 0;
			}
		}
	}
	return result.join("");
};

export function decodeMorse(morseCode: string): string {
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
}
