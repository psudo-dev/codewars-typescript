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
