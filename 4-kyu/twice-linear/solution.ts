export function dblLinear(n: number): number {
	const u = [1];
	let i = 0;
	let j = 0;
	let y: number;
	let z: number;
	while (u.length <= n) {
		y = 2 * u[i] + 1;
		z = 3 * u[j] + 1;
		if (y < z) {
			u.push(y);
			i++;
		} else if (y === z) {
			u.push(y);
			i++;
			j++;
		} else {
			u.push(z);
			j++;
		}
	}
	return u[n];
}

console.log(dblLinear(10));
