export function hexStringToRGB(hexString: string): {
	r: number;
	g: number;
	b: number;
} {
	return {
		r: parseInt(`${hexString[1]}${hexString[2]}`, 16),
		g: parseInt(`${hexString[3]}${hexString[4]}`, 16),
		b: parseInt(`${hexString[5]}${hexString[6]}`, 16),
	};
}

export function hexStringToRGB2(hexString: string): {
	r: number;
	g: number;
	b: number;
} {
	const match = hexString.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
	if (!match) {
		throw new Error("Invalid hex color string");
	}
	const [, r, g, b] = match;
	return {
		r: parseInt(r, 16),
		g: parseInt(g, 16),
		b: parseInt(b, 16),
	};
}
