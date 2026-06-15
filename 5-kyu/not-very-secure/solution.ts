export function alphanumeric(string: string): boolean {
	const validChars =
		"qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890".split(
			"",
		);
	if (!string) {
		return false;
	}
	return string.split("").every((letter) => validChars.includes(letter));
}

function alphanumeric2(string: string): boolean {
	const regexp = /^[a-z0-9]+$/i;
	return regexp.test(string);
}

function alphanumeric3(string: string): boolean {
	const regexp = /^[a-z0-9]+$/i;
	return !!string.match(regexp);
}
