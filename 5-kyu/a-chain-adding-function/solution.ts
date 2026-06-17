export function add(x: number): any {
	let acc = x;
	const fn = (y: number) => {
		acc += y;
		return fn;
	};
	fn.valueOf = () => acc;
	return fn;
}

export function add2(x: number): any {
	const fn = (y: number) => {
		return add(x + y);
	};
	fn.valueOf = () => x;
	return fn;
}
